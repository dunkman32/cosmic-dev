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
  BlueRectangle,
  LowerBlueRectangle,
  LowerWrapper,
} from '@src/components/home/header/styled';
import { HeadersData } from '@src/components/home/header/helper';

const MainsHeader = () => {
  return (
    <Root>
      <Content>
        <TitleWrapper>
          <Welcome>WELCOME</Welcome>
          <BlueRectangle>
            <Title>Ready to Help you in your projects!</Title>
          </BlueRectangle>
          <Desc>
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process
          </Desc>
          <LowerWrapper>
            <ButtonWrapper>
              <Button>Start Now</Button>
              <StyledButtons>Contact Sales</StyledButtons>
            </ButtonWrapper>
            <LowerBlueRectangle />
          </LowerWrapper>
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
