import React from 'react';
import {
  Root,
  Title,
  Content,
  TitleWrapper,
} from '@src/components/home/header/styled';

const MainsHeader = () => {
  return (
    <Root>
      <Content>
        <TitleWrapper>
          <Title>Ready to Help you in your projects!</Title>
        </TitleWrapper>
      </Content>
    </Root>
  );
};

export default MainsHeader;
