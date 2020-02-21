import React, { Component } from 'react';
import { Director } from './Director.js';
import { Director2 } from './Director2.js';
import { Director3 } from './Director3.js';
import { Director4 } from './Director4.js';

import { ColorContext } from './ColorContext.js';
import { StyleChoice } from './StyleChoice.js';


export class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight,
			directorWidth: 30 + 20,
			directorHeight: 30 + 20,
			style: "wave"
    };

		window.addEventListener("resize", this.resize.bind(this));

  }

	componentDidMount() {
		/*window.addEventListener("resize", this.resize.bind(this));
		this.resize();*/

		this.resize(this.state.style);
	}

	resize(style) {
		this.setState({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight
		});

		let directorArray = [];
		let directorPosition = 0;

		let directorsPerColumn = Math.ceil(this.state.screenHeight / this.state.directorHeight);
		let directorsPerRow = Math.floor(this.state.screenWidth / this.state.directorWidth);

		this.setState({
			directorsPerRow: directorsPerRow,
			directorsPerColumn: directorsPerColumn
		});








		if(style === "wave") {
			let directorWaveArray = [];
			this.setState({
				directors: []
			});

			for (var i = 0; i < directorsPerColumn; i++) {
				for (var j = 0; j < directorsPerRow; j++) {
					let numDirectorLoops = Math.floor((i + j) / 8);
					let lastLoopDirectors = i + j - (numDirectorLoops * 8);

					directorWaveArray.push(<Director style="wave" position={"position" + lastLoopDirectors}/>);
					directorWaveArray.push("")
					this.setState({ //I had this in the parent function, but for some reason it had wacky bugs.
						directors: directorWaveArray
					});
				}

			}
		} else if (style === "horizontal") {
			let directorHorizontalArray = [];
			this.setState({
				directors: []
			});
			for (var i = 0; i < directorsPerColumn; i++) {
				for (var j = 0; j < directorsPerRow; j++) {

					if (i % 2 === 0) {
						directorHorizontalArray.push(<Director2 position="position1" style="horizontal"/>);
					} else {
						directorHorizontalArray.push(<Director2 position="position5"/>);
					}
				}
				this.setState({ //I had this in the parent function, but for some reason it had wacky bugs.
					directors: directorHorizontalArray
				});
			}
		} else if (style === "horizontal2") {
			directorArray = [];
			for (var i = 0; i < directorsPerColumn; i++) {
				for (var j = 0; j < directorsPerRow; j++) {

					if (i % 4 === 0 || i % 4 === 1) {
						directorArray.push(<Director3 position="position1"/>);
					} else {
						directorArray.push(<Director3 position="position5"/>);
					}
				}
				this.setState({ //I had this in the parent function, but for some reason it had wacky bugs.
					directors: directorArray
				});
			}
		}else if (style === "vertical") {
			directorArray = [];
			for (var i = 0; i < directorsPerColumn; i++) {
				for (var j = 0; j < directorsPerRow; j++) {

					if (j % 2 === 0) {
						directorArray.push(<Director3 position="position3"/>);
					} else {
						directorArray.push(<Director3 position="position7"/>);
					}
				}
				this.setState({ //I had this in the parent function, but for some reason it had wacky bugs.
					directors: directorArray
				});
			}
		}
		return directorArray;
	}

	setStyle = (style) => {
		this.setState({
			style: style
		});

		this.resize(style);


	}


  render() {

		let directorsPerColumn = Math.ceil(this.state.screenHeight / this.state.directorHeight);
		let directorsPerRow = Math.floor(this.state.screenWidth / this.state.directorWidth);

    return (
			<div>
				<div className="foreground-box editor">
					<div className="illusion-styles">
						<div>
						Illusion Style
						</div>



						<div className="style-box-container">

							<div className="foreground-box-2 style-choice" onClick={ () => this.setStyle("wave") }>
								Wave
							</div>

							<div className="foreground-box-2 style-choice" onClick={ () => this.setStyle("horizontal") }>
								Horizontal
							</div>

							<div className="foreground-box-2 style-choice" onClick={ () => this.setStyle("horizontal2") }>
								Double Horizontal
							</div>

							<div className="foreground-box-2 style-choice" onClick={ () => this.setStyle("vertical") }>
								Vertical
							</div>



							{/*<StyleChoice style="Vertical" />
							<StyleChoice style="Rings" />
							<StyleChoice style="Primrose" />*/}
						</div>
					</div>
				</div>

				{ this.state.style}

				<div className={ "matrix" }>
					<div className="matrix-box">
						{this.state.directors}
					</div>
				</div>
			</div>
    )
  }
}

export default Matrix;
