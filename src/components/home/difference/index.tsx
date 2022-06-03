import React from 'react';
import Blob from '@root/public/images/blob';
import {
  Root,
  Title,
  Content,
  TitleWrapper,
  Caption,
  Desc,
  Wrapper,
  WrappedTitle,
  WrappedDesc,
  ProjectsWrapper,
  ImgWrapper,
} from './styled';

const data = [
  {
    num: '50+',
    text: 'Complete Projects',
  },
  {
    num: '17',
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
        <Caption>FEATURES</Caption>
        <TitleWrapper>
          <Title>Our people make the difference.</Title>
        </TitleWrapper>
        <Desc>
          At any time, you can contact our support center for help, because we won over 100 clients.
        </Desc>
        <ProjectsWrapper>
          {data.map(({ num, text }) => (
            <Wrapper key={num}>
              <WrappedTitle>{num}</WrappedTitle>
              <WrappedDesc>{text}</WrappedDesc>
            </Wrapper>
          ))}
        </ProjectsWrapper>
        <ImgWrapper>
          <Blob />
        </ImgWrapper>
      </Content>
    </Root>
  );
};

export default Difference;
