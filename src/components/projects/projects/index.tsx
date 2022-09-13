import React from 'react';
import {
  Title,
  Desc,
  ImgWrapper,
  Container,
  Wrapper,
  ProjectWrapper,
} from '@src/components/projects/projects/styled';
import Image from 'next/image';
import { data } from '@src/components/projects/projects/helper';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import { useMediaQuery, useTheme } from '@mui/material';

const List = ({ rf }: { rf: any }) => {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <div ref={rf} style={{ marginBottom: '100px' }} />
      <Container>
        <ProjectWrapper>
          {isUpMd
            ? data.map((o) => (
              <ScrollAnimation
                duration={Number(o.id)}
                animateIn="fadeIn"
                animatePreScroll={false}
                animateOnce
                key={o.id}
              >
                <Link href={`/projects/${o.id}`} key={o.id}>
                  <Wrapper>
                    <Title>{o.title}</Title>
                    <ImgWrapper>
                      <Image style={{ objectFit: 'cover', maxHeight: 300 }} src={o.icon} />
                    </ImgWrapper>
                    <ScrollAnimation
                      duration={Number(o.id) + 1}
                      animateIn="fadeIn"
                      animatePreScroll={false}
                      animateOnce
                    >
                      <Desc>{o.text}</Desc>
                    </ScrollAnimation>
                  </Wrapper>
                </Link>
              </ScrollAnimation>
            ))
            : data.map((o) => (
              <Link href={`/projects/${o.id}`} key={o.id}>
                <Wrapper>
                  <Title>{o.title}</Title>
                  <ImgWrapper>
                    <Image style={{ objectFit: 'cover', maxHeight: 300 }} src={o.icon} />
                  </ImgWrapper>
                  <Desc>{o.text}</Desc>
                </Wrapper>
              </Link>
            ))}
        </ProjectWrapper>
      </Container>
    </>
  );
};

export default List;
