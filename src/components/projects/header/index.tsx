import React from 'react';
import {
  Root,
  Title,
  ImgWrapper,
  Background,
  Container,
} from '@src/components/projects/header/styled';
import Image from 'next/image';
import projects from '@src/components/shared/images/projects.png';

const header = () => {
  return (
    <Container>
      <Root>
        <ImgWrapper>
          <Image src={projects} />
        </ImgWrapper>
        <Background>
          <Title>Projects!</Title>
        </Background>
      </Root>
    </Container>
  );
};

export default header;
