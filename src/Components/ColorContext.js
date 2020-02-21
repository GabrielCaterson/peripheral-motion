import React from 'react';

export const ColorContext = React.createContext({
	color: "green",
	setColor: () => {},
	gridStyle: "wave",
	setGridStyle: () => {},
	setContext: () => {}
});

export default ColorContext;
