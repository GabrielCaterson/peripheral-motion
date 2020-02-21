import React, { Component } from 'react';
import { Director } from './Director.js';
import { ColorContext } from './ColorContext.js';


export class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight,
			directorWidth: 30 + 20,
			directorHeight: 30 + 20
    };

		this.determineNumOfDirectors = this.determineNumOfDirectors.bind(this);

  }

	componentDidMount() {
		/*window.addEventListener("resize", this.resize.bind(this));
		this.resize();*/

		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight
		});

		let directors = [];
		let directorPosition = 0;

		let directorsPerColumn = Math.ceil(this.state.screenHeight / this.state.directorHeight);
		let directorsPerRow = Math.floor(this.state.screenWidth / this.state.directorWidth);

		this.setState({
			directorsPerRow: directorsPerRow,
			directorsPerColumn: directorsPerColumn
		});


		if(this.props.style === "wave") {
			for (var i = 0; i < directorsPerColumn; i++) {
				for (var j = 0; j < directorsPerRow; j++) {
					let numDirectorLoops = Math.floor((i + j) / 8);
					let lastLoopDirectors = i + j - (numDirectorLoops * 8);

					directors.push(<Director position={"position" + lastLoopDirectors}/>);
				}
				this.setState({ //I had this in the parent function, but for some reason it had wacky bugs.
					directors: directors
				});
			}
		}


	}

	determineNumOfDirectors() {
		this.setState({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight
		});
		let directorsPerRow = Math.floor(this.state.screenWidth / this.state.directorWidth);
		this.setState({
			directorsPerRow: directorsPerRow
		});
	}

  render() {

		let directorsPerColumn = Math.ceil(this.state.screenHeight / this.state.directorHeight);
		let directorsPerRow = Math.floor(this.state.screenWidth / this.state.directorWidth);

    return (
			<main className={ "matrix" }>
				<div className="matrix-box">{this.state.directors}</div>
			</main>
    )
  }
}

export default Matrix;
