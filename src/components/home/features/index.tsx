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
} from '@src/components/home/features/styled';
import Blob from '@root/public/images/blob';
import { featuresData } from '@src/components/home/features/helper';

const feature = () => {
  return (
    <StyledPaddingWrapper>
      <Root>
        <ImgWrapper>
          <Blob />
        </ImgWrapper>
        <TextWrapper>
          <Feature>feature</Feature>
          <Background>
            <Title>
              Connect the tools you already use
            </Title>
          </Background>
          <Desc>Our extensive developer tools might also strike your fancy.</Desc>
          <Grid>
            {featuresData.map((val) => (
              <Buttons
                key={val.id}
                bgColor={val.backgroundColor}
                bxShadow={val.shadow}
                blue
              >
                {val.icon}
              </Buttons>
            ))}
          </Grid>
        </TextWrapper>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default feature;
