import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Root,
  Title,
  Content,
  TitleWrapper,
  Desc,
  Wrapper,
  WrappedTitle,
  WrappedDesc,
  ProjectsWrapper,
} from './styled';

const data = [
  {
    num: '20 +',
    text: 'Complete Projects',
  },
  {
    num: '5 +',
    text: 'Years of experience as a team',
  },
  {
    num: '12',
    text: 'Team Members and growing up fast',
  },
  {
    num: '51 +',
    text: 'Total years of experience in high level programming languages',
  },
];

const Difference = () => {
  return (
    <Root>
      <Content>
        <TitleWrapper>
          <Title>Superb services to diverse industries</Title>
        </TitleWrapper>
        <ProjectsWrapper>
          <Desc>
            We provide you with a wide range of services and tech stack to fully adjust to your
            needs
          </Desc>
          {data.map(({ num, text }) => (
            <Wrapper key={num}>
              <ScrollAnimation duration={1} animateIn="fadeIn" animatePreScroll={false} animateOnce>
                <WrappedTitle>{num}</WrappedTitle>
              </ScrollAnimation>
              <WrappedDesc>{text}</WrappedDesc>
            </Wrapper>
          ))}
        </ProjectsWrapper>
      </Content>
    </Root>
  );
};

export default Difference;
