import React, { Component } from 'react';
import { ColorContext } from './ColorContext.js';


export class StyleChoice extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return(
			<div className="foreground-box-2 style-choice"
						/*onClick={setGridStyle(this.props.style)}*/>
				{ this.props.style }
			</div>
		)
	}
}
