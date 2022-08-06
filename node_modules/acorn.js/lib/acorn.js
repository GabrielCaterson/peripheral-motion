"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tough_cookie_1 = __importDefault(require("tough-cookie"));
var login_1 = __importDefault(require("./login"));
var logout_1 = __importDefault(require("./logout"));
var acornRoute_1 = __importDefault(require("./acornRoute"));
module.exports = /** @class */ (function () {
    function Acorn(utorid, utoridPassword) {
        var _this = this;
        this.login = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, login_1.default(this.cookieJar, this.utorid, this.utoridPassword)];
                    case 1:
                        _a.isLoggedIn = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        }); };
        this.logout = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, logout_1.default(this.isLoggedIn, this.cookieJar)];
                    case 1:
                        _a.isLoggedIn = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        }); };
        this.getStudentBasicInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/profile/studentBasicInfo", "GET", "studentBasicInfo", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getMailingAddress = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/tc/mailingAddress", "GET", "mailingAddress", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getTodayStartDateForARTSC = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/acorn-config/is-today-peak-load", "GET", "todayStartDateForARTSC", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getStudentAwards = function (sessionCode) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/invoice?sessionCode=" + sessionCode, "GET", "studentAwards", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        // See Sessions and Sub-Sessions section of https://www.sis.utoronto.ca/wp-content/uploads/StudyGuides-Intro.pdf
        this.getStudentAttendanceInfo = function (sessionCode) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/awards/attendance?sessionCode=" + sessionCode, "GET", "studentAttendanceInfo", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getCOEParticipatingOrgs = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/acorn-config/coe-participating-orgs", "GET", "COEParticipatingOrgs", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getGlobalMessage = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/acorn-config/global-message", "GET", "globalMessage", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getFeatureConfigs = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/acorn-config/feature-configs", "GET", "featureConfigs", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getEmailAddress = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/profile/email", "GET", "emailAddress", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getDomesticStudent = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/profile/domesticStudent", "GET", "domesticStudent", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getAccountBalanceFromMainframe = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/finance/mainframe-accountBalance", "GET", "accountBalanceFromMainframe", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getStudentEnrolledCourses = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/courseRegistration/enrolledCourses", "GET", "studentEnrolledCourses", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getTodaysEvents = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/eventCalendar/getDashboardEvents/TODAY", "GET", "todaysEvents", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getUpcomingEvents = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/eventCalendar/getUpcomingEvents", "GET", "upcomingEvents", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getStartTimes = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/course/start-times", "GET", "startTimes", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getDeData = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/programProgress", "GET", "deData", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getCurrentDate = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/eventCalendar/getCurrentDate/yyyy-MM-dd", "GET", "currentDate", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getCurrentRegistrations = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/current-registrations", "GET", "currentRegistrations", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getPostsWithInviteStatus = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/posts-with-invite-status", "GET", "postsWithInviteStatus", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getCNCTotal = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/cnc/total-credits", "GET", "CNCTotal", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getTermCourseLoad = function (primaryOrgCode, postCode, sessionCodes) { return __awaiter(_this, void 0, void 0, function () {
            var qparams, len, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qparams = "primaryOrgCode=" + encodeURIComponent(primaryOrgCode) + "&postCode=" + encodeURIComponent(postCode);
                        len = sessionCodes.length;
                        i = 0;
                        for (; i < len; i++) {
                            qparams = qparams + ("&sessionCodes=" + encodeURIComponent(sessionCodes[i]));
                        }
                        return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/term-course-loads?" + qparams, "GET", "termCourseLoad", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getActiveActionNotices = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/notification/action-notice", "GET", "activeActionNotices", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getDentalOptOutSessionCode = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/dashboard/finance/dentalOptOutSessionCode", "GET", "dentalOptOutSessionCode", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getEligibleRegistrations = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, acornRoute_1.default("https://acorn.utoronto.ca/sws/rest/enrolment/eligible-registrations", "GET", "eligibleRegistrations", this.cookieJar)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /* To store cookies when logging in, this is so accessing GET requests link
           don't return the login page */
        this.cookieJar = new tough_cookie_1.default.CookieJar(),
            this.isLoggedIn = false,
            this.utorid = utorid,
            this.utoridPassword = utoridPassword;
    }
    return Acorn;
}());
