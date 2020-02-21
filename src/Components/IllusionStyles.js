import React, { Component } from 'react';
import { StyleChoice } from './StyleChoice.js';

export class IllusionStyles extends Component {


	render() {
		return (
			<div className="foreground-box illusion-styles">
				<div>
				Illusion Style
				</div>
				<div className="style-box-container">
				<StyleChoice style="Wave Grid" />
				<StyleChoice style="Lines" />
				<StyleChoice style="Circle" />
				<StyleChoice style="Primrose" />
				</div>
			</div>
		)
	}
}
