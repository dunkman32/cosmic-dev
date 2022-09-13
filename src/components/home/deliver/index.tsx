/* eslint-disable max-len */
import React from 'react';
import { data } from '@src/components/home/deliver/helper';
import deliverImg from '@src/components/shared/images/deliver.png';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Root,
  Title,
  Content,
  TitleWrapper,
  Caption,
  Wrapper,
  WrappedTitle,
  WrappedDesc,
  ProjectsWrapper,
  ImgWrapper,
  LeftWrapper,
  RightWrapper,
} from './styled';

const Deliver = () => {
  return (
    <Root>
      <Content>
        <Caption>FEATURES</Caption>
        <TitleWrapper>
          <Title>Deliver instant answers with knowledge base</Title>
        </TitleWrapper>
        <ProjectsWrapper>
          {data.map(({
            icon, title, text, id,
          }) => (
            <ScrollAnimation
              duration={Number(id * 1)}
              animateIn="fadeIn"
              animatePreScroll={false}
              animateOnce
              key={id}
            >
              <Wrapper key={id}>
                {icon && <LeftWrapper>{icon}</LeftWrapper>}
                <RightWrapper>
                  {title && <WrappedTitle>{title}</WrappedTitle>}
                  <WrappedDesc space={Boolean(icon)}>{text}</WrappedDesc>
                </RightWrapper>
              </Wrapper>
            </ScrollAnimation>
          ))}
        </ProjectsWrapper>
        <ImgWrapper>
          <Image src={deliverImg} />
        </ImgWrapper>
      </Content>
    </Root>
  );
};

export default Deliver;
