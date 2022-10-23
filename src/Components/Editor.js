import React, { Component } from "react";
import { SketchPicker, SliderPicker, MaterialPicker } from 'react-color';


import { ColorBlob } from "./ColorBlob.js";
import { StyleChoice } from "./StyleChoice.js";
import ColorPickerBlob from "./ColorPicker.js";


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

							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>
							<ColorBlob area="foreground" color="orange"/>
							<ColorBlob area="foreground" color="yellow"/>
							<ColorBlob area="foreground" color="green"/>
							<ColorBlob area="foreground" color="darkGreen"/>
							<ColorBlob area="foreground" color="lightBlue"/>
							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>


							<ColorBlob area="foreground" color="blue"/>
							<ColorBlob area="foreground" color="purple"/>
							<ColorBlob area="foreground" color="pink"/>
							<ColorBlob area="foreground" color="red"/>
							<ColorBlob area="foreground" color="brown"/>
							<ColorBlob area="foreground" color="tan"/>


							<ColorBlob area="foreground" color="gray4"/>
							<ColorBlob area="foreground" color="gray1"/>
							<ColorBlob area="foreground" color="gray2"/>
							<ColorBlob area="foreground" color="gray3"/>
							<div className="color-blob color-picker-blob"> <ColorPickerBlob area="foreground" color="green"/> </div>
							
						</div>
						
					</div>

					<div className="color-picker foreground-box-2">
						Background color
						<div className="color-blob-box">

							<div className="color-blob color-blob-half"></div>
							<ColorBlob area="background" color="orange" colorHex="#ff8800"/>
							<ColorBlob area="background" color="yellow" colorHex="#ffff00"/>
							<ColorBlob area="background" color="green" colorHex="#00ff00"/>
							<ColorBlob area="background" color="darkGreen" colorHex="#008800"/>
							<ColorBlob area="background" color="lightBlue" colorHex="#00ffff"/>
							<ColorBlob area="background" color="blue" colorHex="#0000ff"/>
							<div className="color-blob color-blob-half"></div>


							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>
							<ColorBlob area="background" color="purple" colorHex="#7700ee"/>
							<ColorBlob area="background" color="pink" colorHex="#ff00ff"/>
							<ColorBlob area="background" color="red" colorHex="#ff0000"/>
							<ColorBlob area="background" color="brown" colorHex="#7B3F00"/>
							<ColorBlob area="background" color="tan" colorHex="#EADDCA"/>
							<div className="color-blob color-blob-half"></div>
							<div className="color-blob color-blob-half"></div>

							<ColorBlob area="background" color="gray4" colorHex="#ccc"/>
							<ColorBlob area="background" color="gray1" colorHex="#505060"/>
							<ColorBlob area="background" color="gray2" colorHex="#404050"/>
							<ColorBlob area="background" color="gray3" colorHex="#303040"/>

						</div>
					</div>

					<div className="color-picker foreground-box-2">
						<div className="editor-box-text">
							Tips: <br />
							Contrasting colors may work best. <br />
							Try using a big screen!
						</div>
					</div>
				</div>



			</div>
		)
	}
}

export default Editor;
