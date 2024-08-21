import React from 'react';
import {SvgXml} from 'react-native-svg';

const App = () => {
  return (
    <SvgXml
      xml={`<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" stroke="green" stroke-width="3" fill="red" />
</svg> `}
    />
  );
};

export default App;
