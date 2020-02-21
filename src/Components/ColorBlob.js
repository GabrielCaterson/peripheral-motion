import React, { Component } from "react";
//import {Helmet} from "react-helmet";
import { MContext } from './MyProvider.js';
import { MyProvider } from './MyProvider.js';
import { ColorContext } from './ColorContext.js';


export class ColorBlob extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<div>
				<ColorContext.Consumer>
					{({color, setColor}) => (
						<div 	className={"color-blob " + this.props.color }
							onClick={
								() => this.props.area === "background" ?
								document.body.style.backgroundColor = this.props.colorHex :
								setColor(this.props.color)

							}
						>
						</div>
					)}
				</ColorContext.Consumer>
			</div>
		);
	}
}

export default ColorBlob;
