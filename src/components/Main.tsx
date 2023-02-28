import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import yellowBubble from '../assets/yellow-bubble.svg';
// @ts-ignore
import yellowSmallBubble from '../assets/yellow-small-bubble.svg';
// @ts-ignore
import pinkBubble from '../assets/pink-bubble.svg';
// @ts-ignore
import ellipse from '../assets/ellipse.png';
// @ts-ignore
import clouds from '../assets/clouds.svg';
// @ts-ignore
import sun from '../assets/sun.svg';
import Form from './Form';

const MainWrapper = styled.main`
  background-image: 
          url(${yellowSmallBubble}), 
          url(${yellowBubble}),
          url(${pinkBubble}),
          url(${ellipse}),
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