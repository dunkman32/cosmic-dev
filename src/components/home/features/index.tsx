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
  ButtonWrapper,
  Container,
} from '@src/components/home/features/styled';
import { featuresData } from '@src/components/home/features/helper';
import Partner from '@src/components/shared/icons/partner';

const feature = () => {
  return (
    <Container>
      <Root>
        <ImgWrapper>
          <Partner />
        </ImgWrapper>
        <TextWrapper>
          <Feature>FEATURES</Feature>
          <Background>
            <Title>Connect the tools you already use</Title>
          </Background>
          <DescDiv>
            <Desc>
              Our extensive developer tools might also strike your fancy.
            </Desc>
            <Grid>
              {featuresData.map((o) => (
                <ButtonWrapper key={o.id}>
                  <Buttons
                    bgColor={o.backgroundColor}
                    bxShadow={o.shadow}
                    blue={o.blue}
                  >
                    {o.icon}
                  </Buttons>
                </ButtonWrapper>
              ))}
            </Grid>
          </DescDiv>
        </TextWrapper>
      </Root>
    </Container>
  );
};

export default feature;
