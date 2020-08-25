import React from 'react';
import { RedocStandalone } from 'redoc';


function App() {
  return (
    <div>
      <p>Hello</p>
      <RedocStandalone
        specUrl="https://petstore.swagger.io/v2/swagger.json"
        //https://petstore.swagger.io/v2/swagger.json
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: '#dd5522' } } },
        }}
      />
    </div>
  );
}

export default App;
