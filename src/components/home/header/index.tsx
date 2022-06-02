import React from 'react';
import {
  Root,
  Desc,
  Flex,
  Card,
  Title,
  Icon,
  Button,
  Content,
  CardDesc,
  Welcome,
  TitleWrapper,
  ButtonWrapper,
  StyledButtons,
} from '@src/components/home/header/styled';
import { HeadersData } from '@src/components/home/header/helper';

const MainsHeader = () => {
  return (
    <Root>
      <Content>
        <TitleWrapper>
          <Welcome>Welcome</Welcome>
          <Title>Ready to Help you in your projects!</Title>
          <Desc>
            Our sales team will get in touch to better
            understand your needs, and will help you with
            the sign-up process
          </Desc>
          <ButtonWrapper>
            <Button>
              Start Now
            </Button>
            <StyledButtons>
              Contact Sales
            </StyledButtons>
          </ButtonWrapper>
        </TitleWrapper>
        <Flex>
          {HeadersData.map((val) => (
            <Card key={val.id}>
              <Icon>{val.icon}</Icon>
              <CardDesc>{val.desc}</CardDesc>
            </Card>
          ))}
        </Flex>
      </Content>
    </Root>
  );
};

export default MainsHeader;
