import React, { Component } from "react";

import { ColorBlob } from "./ColorBlob.js";
import { StyleChoice } from "./StyleChoice.js";

export class Editor extends Component {
	constructor(props) {
		super(props);


	}

	render() {
		return(
			<div className="foreground-box editor">
				<div className="illusion-styles foreground-box-title">
						Colors
				</div>


				<div className="editor-compartment">
					<div className="color-picker foreground-box-2">
						Foreground color
						<div className="color-blob-box">
							<ColorBlob area="foreground" color="orange"/>
							<ColorBlob area="foreground" color="yellow"/>
							<ColorBlob area="foreground" color="green"/>
							<ColorBlob area="foreground" color="darkGreen"/>
							<ColorBlob area="foreground" color="lightBlue"/>
							<ColorBlob area="foreground" color="blue"/>
							<ColorBlob area="foreground" color="purple"/>
							<ColorBlob area="foreground" color="red"/>
							<ColorBlob area="foreground" color="pink"/>

						</div>
					</div>

					<div className="color-picker foreground-box-2">
						Background color
						<div className="color-blob-box">
						<ColorBlob area="background" color="orange" colorHex="#ff8800"/>
						<ColorBlob area="background" color="yellow" colorHex="#ffff00"/>
						<ColorBlob area="background" color="green" colorHex="#00ff00"/>
						<ColorBlob area="background" color="darkGreen" colorHex="#008800"/>
						<ColorBlob area="background" color="lightBlue" colorHex="#00ffff"/>
						<ColorBlob area="background" color="blue" colorHex="#0000ff"/>
						<ColorBlob area="background" color="purple" colorHex="#7700ee"/>
						<ColorBlob area="background" color="red" colorHex="#ff0000"/>
						<ColorBlob area="background" color="pink" colorHex="#ff00ff"/>
						</div>
					</div>

					<div className="color-picker foreground-box-2">
						<div className="editor-box-text">
							Tips: <br />
							Contrasting colors work best. <br />
							Try using a big screen!
						</div>
					</div>
				</div>



			</div>
		)
	}
}

export default Editor;
