"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var handleRedirect = function (response, cookieJar) {
    return new Promise(function (resolve, reject) {
        var headers = response.headers.raw();
        var cookies = headers['set-cookie'];
        if (cookies) {
            cookies.forEach(function (cookie) {
                cookieJar.setCookie(cookie, response.url, function (error, cookie) {
                    if (error)
                        throw new Error("Failed to setCookie.");
                });
            });
        }
        var location = headers['location'] && headers['location'][0];
        if (location) {
            var cookieString = "";
            cookieJar.getCookieString(location, function (error, cookies) {
                if (error)
                    throw new Error("Failed to getCookieString.");
                cookieString = cookies;
            });
            node_fetch_1.default(location, {
                "redirect": "manual",
                headers: {
                    cookie: cookieString
                }
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) { return reject(error); });
        }
        else {
            resolve(response);
        }
    })
        .then(function (response) {
        return response.headers.raw()['location'] && response.headers.raw()['location'][0] ? handleRedirect(response, cookieJar) : response;
    })
        .catch(function (error) { return console.log("Redirect Promise Error: " + error); });
};
exports.default = handleRedirect;
