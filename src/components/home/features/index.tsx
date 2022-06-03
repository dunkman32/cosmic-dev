import React from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
import {
  Root,
  Desc,
  Title,
  Feature,
  ImgWrapper,
  TextWrapper, Grid,
} from '@src/components/home/features/styled';
import Blob from '@root/public/images/blob';

const feature = () => {
  return (
    <StyledPaddingWrapper>
      <Root>
        <ImgWrapper>
          <Blob />
        </ImgWrapper>
        <TextWrapper>
          <Feature>feature</Feature>
          <Title>
            Connect the tools you already use
          </Title>
          <Desc>Our extensive developer tools might also strike your fancy.</Desc>
          <Grid>
            jsdfjgklsj
          </Grid>
        </TextWrapper>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default feature;
