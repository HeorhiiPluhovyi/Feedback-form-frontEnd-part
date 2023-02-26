import React from 'react';
import styled from 'styled-components';
import pinkBubble from '../../assets/pink-bubble.svg';
import ellowSmallBubble from '../../assets/yellow-small-bubble.svg';
import greenBubble from '../../assets/green-bubble.svg';
import fb from '../../assets/fb.svg';
import pint from '../../assets/pint.svg';
import tw from '../../assets/twitter.svg';
import instagram from '../../assets/inst.svg';

const FooterWrapper = styled.footer`
    width: 100%;
    height: 200px;
    background-color: #FAFAFA;
    border: 1px solid #D8D8D8;
    background-image: 
          url(${pinkBubble}), 
          url(${greenBubble}),
          url(${ellowSmallBubble});
    background-repeat: no-repeat;
    background-position:
      52px 4px,
      top right 127px,
      top 60px right -25px;
    background-size:
      214px,
      78px,
      88px;
    position: relative;
    bottom: 0;
`;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100%;
`;

const Inst = styled.a`
  height: 16px;
  width: 16px;
  background-image: url(${instagram});
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 5px;
  background-size: cover;
`;

const Fb = styled.a`
  height: 16px;
  width: 16px;
  background-image: url(${fb});
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 5px;
  background-size: cover;
`;

const Twit = styled.a`
  height: 16px;
  width: 16px;
  background-image: url(${tw});
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 5px;
  background-size: cover;
`;

const Pint = styled.a`
  height: 16px;
  width: 16px;
  background-image: url(${pint});
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 5px;
  background-size: cover;
`;

const LinksContainer = styled.div`
  margin-left: 130px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  background-color: #FAFAFA;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
              <LinksContainer>
                <Fb target={"_blank"} href={"https://www.facebook.com/"}/>
                <Twit target={"_blank"} href={"https://twitter.com/?lang=en"}/>
                <Inst target={"_blank"} href={"https://www.instagram.com/"}/>
                <Pint target={"_blank"} href={"https://www.pinterest.com/"}/>
              </LinksContainer>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;