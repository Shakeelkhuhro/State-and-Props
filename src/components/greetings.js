import React from 'react';

function Greeting(props) {

  return (
    <div>
        
      <h1>Hello, {props.name}! (using props)</h1>
    </div>
  );
}

export default Greeting;
