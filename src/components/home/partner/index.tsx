/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { StyledPaddingWrapper } from '@src/components/shared';
import {
  Root,
  Title,
  Desc,
  List,
  Card,
  ArrowWrapper,
  TitleWrapper,
} from '@src/components/home/partner/styled';
import { PartnersData } from '@src/components/home/partner/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Partner = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const handleSwipeNext = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);
  const handleSwipePrev = useCallback(() => {
    if (!swiperInstance) return;

    swiperInstance.slidePrev();
  }, [swiperInstance]);

  return (
    <StyledPaddingWrapper>
      <Root>
        <TitleWrapper>
          <Title>PARTNER</Title>
          <Desc>Trusted by more than 5,000 businesses in 122 countries.</Desc>
        </TitleWrapper>
        <ArrowWrapper>
          <KeyboardArrowLeftIcon onClick={handleSwipePrev} />
          <KeyboardArrowRightIcon onClick={handleSwipeNext} />
        </ArrowWrapper>
        <List>
          <Swiper
            swiper-scrollbar={false}
            spaceBetween={5}
            onInit={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
              300: {
                slidesPerView: 1,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
              },
              400: {
                slidesPerView: 1,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },
              600: {
                slidesPerView: 2,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
              },
              900: {
                slidesPerView: 4,
              },
            }}
          >
            {PartnersData.map((val) => (
              <SwiperSlide key={val.id}>
                <Card>
                  {val.svg}
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </List>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default Partner;
