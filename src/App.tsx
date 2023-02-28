import React from 'react';
import Main from "./components/Main";
import Footer from "./components/Footer";
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
