import React, { Component } from 'react';
import { MContext } from './MyProvider.js';
import { MyProvider } from './MyProvider.js';
import { ColorContext } from './ColorContext.js';


export class Director3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
			position: this.props.position
    };

  }

  render() {

    return (
			<div>
				<ColorContext.Consumer>
					{({color, setColor}) => (
						<main className={ "director positionTentative " + this.state.position /*+ " " + context.state.message*/ + " " + color }>
						</main>
					)}
				</ColorContext.Consumer>

			</div>
    )
  }
}

export default Director3;
