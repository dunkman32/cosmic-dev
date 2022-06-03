import React from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
import {
  Root,
  Title,
  Desc,
  List,
  TitleWrapper,
} from '@src/components/home/partner/styled';
import { PartnersData } from '@src/components/home/partner/helper';

const Partner = () => {
  return (
    <StyledPaddingWrapper>
      <Root>
        <TitleWrapper>
          <Title>PARTNER</Title>
          <Desc>Trusted by more than 5,000 businesses in 122 countries.</Desc>
        </TitleWrapper>
        <List>
          {PartnersData.map((val) => (
            <div key={val.id}>
              {val.svg}
            </div>
          ))}
        </List>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default Partner;
