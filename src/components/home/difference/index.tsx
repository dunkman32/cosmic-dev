import React from 'react';
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
    num: '20+',
    text: 'Complete Projects',
  },
  {
    num: '12',
    text: 'Team Members',
  },
  {
    num: '10.550.000',
    text: 'Lines of Code Written',
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
            We provide you with a wide range of services and tech stack to fully adjust to your needs
          </Desc>
          {data.map(({ num, text }) => (
            <Wrapper key={num}>
              <WrappedTitle>{num}</WrappedTitle>
              <WrappedDesc>{text}</WrappedDesc>
            </Wrapper>
          ))}
        </ProjectsWrapper>
      </Content>
    </Root>
  );
};

export default Difference;
