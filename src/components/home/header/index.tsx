/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
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
  ArrowWrapper,
  ButtonWrapper,
  StyledButtons,
  BlueRectangle,
  LowerBlueRectangle,
  LowerWrapper,
  FloatyBoxes,
  AbsoluteBoxes,
} from '@src/components/home/header/styled';
import { HeadersData } from '@src/components/home/header/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery, useTheme } from '@mui/material';

const MainsHeader = () => {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handleSwipeNext = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);
  const handleSwipePrev = useCallback(() => {
    if (!swiperInstance) return;

    swiperInstance.slidePrev();
  }, [swiperInstance]);

  return (
    <Root>
      <Content>
        {isUpMd && (
          <AbsoluteBoxes>
            <FloatyBoxes>
              {HeadersData.map((val) => (
                <Card key={val.id}>
                  <Icon>{val.icon}</Icon>
                  <CardDesc>{val.desc}</CardDesc>
                </Card>
              ))}
            </FloatyBoxes>
          </AbsoluteBoxes>
        )}
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
        <ArrowWrapper>
          <KeyboardArrowLeftIcon onClick={handleSwipePrev} />
          <KeyboardArrowRightIcon onClick={handleSwipeNext} />
        </ArrowWrapper>
        {!isUpMd && (
          <Flex>
            <Swiper
              spaceBetween={5}
              onInit={(swiper) => setSwiperInstance(swiper)}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  slidesOffsetBefore: 10,
                  slidesOffsetAfter: 10,
                },
                400: {
                  slidesPerView: 2.5,
                  slidesOffsetBefore: 20,
                  slidesOffsetAfter: 20,
                },
                600: {
                  slidesPerView: 3,
                  slidesOffsetBefore: 10,
                  slidesOffsetAfter: 10,
                },
              }}
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
        )}
      </Content>
    </Root>
  );
};

export default MainsHeader;
