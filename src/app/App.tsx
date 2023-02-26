import React from 'react';
import Main from "./main/Main";
import Footer from "./footer/Footer";
import styled from "styled-components";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`
function App() {
  return (
      <AppWrapper>
          <Main />
          <Footer />
      </AppWrapper>
  );
}

export default App;
