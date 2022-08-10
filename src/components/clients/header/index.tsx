import React from 'react';
import {
  Root,
  Title,
  ImgWrapper,
  Background,
  Container,
  Wrapper,
  Desc,
} from '@src/components/clients/header/styled';
import Image from 'next/image';
import clients from '@src/components/shared/images/clients.png';

const header = () => {
  return (
    <Container>
      <Root>
        <ImgWrapper>
          <Image src={clients} />
        </ImgWrapper>
        <Wrapper>
          <Background>
            <Title>Clients</Title>
          </Background>
          <Desc>
            We do magic for companies of various scales from diverse fields e.g:
            Financial Sector, E-Commerce, Telecommunications, Real estate and
            many more.
          </Desc>
        </Wrapper>
      </Root>
    </Container>
  );
};

export default header;
