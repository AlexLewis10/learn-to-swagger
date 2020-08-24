import React from 'react';
import { RedocStandalone } from 'redoc';


function App() {
  return (
    <div>
      <p>Hello</p>
      <RedocStandalone
        specUrl="https://petstore.swagger.io/v2/swagger.json"
        onLoaded={error => {
          if (!error) {
            console.log('Yay!');
          }
        }}
      />
    </div>
  );
}

export default App;
