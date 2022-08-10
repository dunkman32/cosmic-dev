import React from 'react';
import {
  Root,
  Title,
  ImgWrapper,
  Background,
  Container,
  Wrapper,
  Desc,
} from '@src/components/team/header/styled';
import Image from 'next/image';
import team from '@src/components/shared/images/team.png';

const header = () => {
  return (
    <Container>
      <Root>
        <Wrapper>
          <Background>
            <Title>Team ...</Title>
          </Background>
          <Desc>Team of full time IT professionals and part time nerdy wizards.</Desc>
        </Wrapper>
        <ImgWrapper>
          <Image src={team} />
        </ImgWrapper>
      </Root>
    </Container>
  );
};

export default header;
