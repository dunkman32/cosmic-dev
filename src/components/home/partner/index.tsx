import React from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
import {
  Root,
  Title,
  Desc,
  TitleWrapper,
} from '@src/components/home/partner/styled';

const Partner = () => {
  return (
    <StyledPaddingWrapper>
      <Root>
        <TitleWrapper>
          <Title>PARTNER</Title>
          <Desc>Trusted by more than 5,000 businesses in 122 countries.</Desc>
        </TitleWrapper>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default Partner;
