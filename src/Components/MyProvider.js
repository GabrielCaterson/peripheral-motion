import React, { Component } from 'react';
export const MContext = React.createContext({
	testFunc: () => {},
	testVar: 2
});  //exporting context object


export class MyProvider extends Component {
	state = {
		message: "green",
		setMessage: (value) => this.setState({
			message: value
		}),
		testFunc: this.getColor,
		num: "1"
	}

	getColor = () => {
		alert("yo waddup")
		this.setState({
			num: 2
		});
	}

	render() {
		return (
	 		<MContext.Provider value={
				{	/*state: this.state,
					/*setMessage: (value) => this.setState({
						message: value
					}),*/
					testFunc: () => (alert("heyyy")),
					testVar: 2
				}
			}>

			{this.props.children}
			{/*//this indicates that the global store is accessible to all the child tags with MyProvider as Parent*/}
			</MContext.Provider>
		)
	}
}

export default MyProvider;

//const ThemeContext = React.createContext('yellow');
