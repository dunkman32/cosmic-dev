/* eslint-disable import/no-unresolved */
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {HeadersData.map((val) => (
              <SwiperSlide key={val.id}>
                <Card>
                  <Icon>{val.icon}</Icon>
                  <CardDesc>{val.desc}</CardDesc>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Content>
    </Root>
  );
};

export default MainsHeader;
