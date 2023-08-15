import React from 'react';

class BlockColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.backgroundColor
    }
  }
  toggleColor = () => {
    this.setState((state) => ({
      color: state.color === 'red' ? 'blue' : 'red',
    }));
  };
  
  render() {
    const bgColor = this.state.color
    return (
      <div className='block' 
      onClick={this.toggleColor}
      style={{backgroundColor: bgColor}}>
      </div>
    )
  }
}

class ToggleColor extends React.Component {
  render() {
    return (
      <div className='block-container'>
        <BlockColor backgroundColor='red'/>
        <BlockColor backgroundColor='blue'/>
      </div>
    )
  }
}



// export default ToggleColor;

// import React, { useState } from 'react';

// function ToggleColor() {
//   const [isRed, setIsRed] = useState(true);

//   const toggleColor = () => {
//     setIsRed(!isRed);
//   };

//   const bgColor = isRed ? 'red' : 'blue';

//   return (
//     <button className='block' onClick={toggleColor} style={{ backgroundColor: bgColor }}>
//       Toggle Color
//     </button>
//   );
// }

export default ToggleColor;

