'use strict'

import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

import { MContext } from './MyProvider.js';
import { MyProvider } from './MyProvider.js';
import { ColorContext } from './ColorContext.js';

class ColorPickerBlob extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '20px',
          height: '20px',
          borderRadius: '30px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          margin: '-5px',
          marginTop: '0',
          background: '#fff',
          borderRadius: '30px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          padding: '25px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }


        <ColorContext.Consumer>
            {({color, setColor}) => (
                <div 	className={"color-blob " + this.props.color }
                    onClick={
                        () => this.props.area === "background" ?
                        document.body.style.backgroundColor = this.props.colorHex :
                        setColor(this.props.color)

                    }
                >
                </div>
            )}
		</ColorContext.Consumer>

      </div>
    )
  }
}

export default ColorPickerBlob;