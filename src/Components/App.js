/*
by Gabriel Caterson
2/5/2020
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';
/*import { Director } from './Director.js';*/
import { Matrix } from './Matrix.js';
import { Editor } from './Editor.js';
import { MyProvider } from './MyProvider.js';
import { ColorContext } from './ColorContext.js';
import { Page } from './Page.js';


//const DirectorColor = React.createContext('yellow');


class App extends Component{

		constructor(props) {
			super(props);

		}

		setColor = color => {
			this.setState({
				color
			});
		}

		setGridStyle = gridStyle => {
			this.setState({
				gridStyle
			})
		}

		setContext = (color, gridStyle) => {
			this.setState({
				color: color,
				gridStyle: gridStyle
			})
		}

		state = {
			color: "yellow",
			setColor: this.setContext/*,
			/*gridStyle: "wave",
			/*setGridStyle: this.setContext,
			setContext: this.setContext*/
		}



		render() {
		  return (
		    <div className="App App-body body">
					<header className="foreground-box header">
						<p className="title">
							PERIPHERAL
							<br />
						</p>
						<p className="subtitle">
							by Gabriel Caterson
						</p>
						<p className="explanation">
							Scroll down and let your eyes wander. These images don't move. Skeptical? Take a screenshot.
							<br />
							Feel free to use this for a background, or anything else.
							<br />
							Based on <a href="http://brain.phgy.queensu.ca/pare/assets/Faubert%20Herbert%201999.pdf" className="link">this research</a> and some work by <a href="http://www.paulnasca.com/" className="link"> Paul Nasca</a> and others.
						</p>
					</header>

					<ColorContext.Provider value={this.state}>

						<Editor />

						<Matrix style={ this.props.style }/>
					</ColorContext.Provider>
					{/*<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />*/}

		    </div>
		  );
		}
}

export default App;
