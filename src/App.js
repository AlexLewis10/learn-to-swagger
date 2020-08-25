import React from 'react';
import { RedocStandalone } from 'redoc';



function App() {



  return (
    <div>
      <p>Hello</p>
      <RedocStandalone specUrl='https://raw.githubusercontent.com/AlexLewis10/learn-to-swagger/master/swagger.json'/>
    </div>
  );
}

export default App;
