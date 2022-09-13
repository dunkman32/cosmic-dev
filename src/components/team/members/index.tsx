import React from 'react';
import {
  Title,
  ImgWrapper,
  Container,
  Wrapper,
  MemberWrapper,
} from '@src/components/team/members/styled';
import Image from 'next/image';
import { data } from '@src/components/team/members/helper';
import ScrollAnimation from 'react-animate-on-scroll';
import { useMediaQuery, useTheme } from '@mui/material';

const List = () => {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <MemberWrapper>
        {isUpMd
          ? data.map((o, i) => (
            <ScrollAnimation
              duration={i + 1}
              animateIn="fadeIn"
              animatePreScroll={false}
              animateOnce
              key={i + 1}
            >
              <Wrapper key={i}>
                <ImgWrapper>
                  <Image src={o.icon} />
                </ImgWrapper>
                <ScrollAnimation
                  duration={i + 2}
                  animateIn="fadeIn"
                  animatePreScroll={false}
                  animateOnce
                >
                  <Title>{o.title}</Title>
                </ScrollAnimation>
              </Wrapper>
            </ScrollAnimation>
          ))
          : data.map((o, i) => (
            <Wrapper key={i}>
              <ImgWrapper>
                <Image src={o.icon} />
              </ImgWrapper>
              <Title>{o.title}</Title>
            </Wrapper>
          ))}
      </MemberWrapper>
    </Container>
  );
};

export default List;
