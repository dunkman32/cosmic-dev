import React from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
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
} from '@src/components/home/features/styled';
import { featuresData } from '@src/components/home/features/helper';
import Partner from '@src/components/shared/icons/partner';

const feature = () => {
  return (
    <StyledPaddingWrapper>
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
            <Desc>Our extensive developer tools might also strike your fancy.</Desc>
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
    </StyledPaddingWrapper>
  );
};

export default feature;
