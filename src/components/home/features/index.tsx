import React from 'react';
import {
  Root,
  Desc,
  Title,
  Feature,
  ImgWrapper,
  TextWrapper,
  Grid,
  Buttons,
  Background,
  DescDiv,
  Container,
  BackgroundWrapper,
} from '@src/components/home/features/styled';
import { featuresData } from '@src/components/home/features/helper';
import Image from 'next/image';
import features from '@src/components/shared/images/features.png';

const feature = () => {
  return (
    <Container>
      <Root>
        <ImgWrapper>
          <Image src={features} />
        </ImgWrapper>
        <TextWrapper>
          <Feature>FEATURES</Feature>
          <BackgroundWrapper>
            <Background>
              <Title>Connect the tools you already use</Title>
            </Background>
          </BackgroundWrapper>
          <DescDiv>
            <Desc>
              Our extensive developer tools might also strike your fancy.
            </Desc>
            <Grid>
              {featuresData.map((o) => (
                <Buttons
                  key={o.id}
                  bgColor={o.backgroundColor}
                  bxShadow={o.shadow}
                  blue={o.blue}
                >
                  {o.icon}
                </Buttons>
              ))}
            </Grid>
          </DescDiv>
        </TextWrapper>
      </Root>
    </Container>
  );
};

export default feature;
