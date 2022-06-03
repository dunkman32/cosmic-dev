import React from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
import {
  Root,
  Title,
  Desc,
  List,
  Card,
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
            <Card key={val.id}>
              {val.svg}
            </Card>
          ))}
        </List>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default Partner;
