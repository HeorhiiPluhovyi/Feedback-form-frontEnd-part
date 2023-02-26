import React from 'react';
import styled from 'styled-components';
import ellowBubble from '../../assets/yellow-bubble.svg';
import ellowSmallBubble from '../../assets/yellow-small-bubble.svg';
import pinkBubble from '../../assets/pink-bubble.svg';
import allipse from '../../assets/ellipse.png';
import clouds from '../../assets/clouds.svg';
import sun from '../../assets/sun.svg';
import Form from "./form/Form";

const MainWrapper = styled.main`
  background-image: 
          url(${ellowSmallBubble}), 
          url(${ellowBubble}),
          url(${pinkBubble}),
          url(${allipse}),
          url(${sun}),
          url(${clouds});
  background-repeat: no-repeat;
  background-position: 
          30px 30px, 
          top 43vh right 43vh,
          top 50vh right 35vh, 
          right top,
          50% 21px,
          50%;
  background-size: 
          90px, 
          127px, 
          214px, 
          contain,
          87px,
          cover;
  width: 100%;
  min-height: 680px;
  height: calc(100vh - 200px);
`;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  justify-content: start;
`

function Main() {
    return (
        <MainWrapper>
          <Container>
            <Form />
          </Container>
        </MainWrapper>
    );
}

export default Main;