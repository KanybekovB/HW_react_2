import React from 'react';

class ToggleColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true,
    }
  }
  toggleColor = () => {
    this.setState({ isRed: !this.state.isRed });
  }
  
  render() {
    const bgColor = this.state.isRed ? 'red' : 'blue';
    
    return (
      <div className = 'block-container'>
        <button className='block' onClick={this.toggleColor} style={{backgroundColor: bgColor}}></button>
        <button className='block' onClick={this.toggleColor} style={{backgroundColor: bgColor === 'red' ? 'blue' : 'red'}}></button>
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

