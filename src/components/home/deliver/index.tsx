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
  LeftWrapper,
  RightWrapper,
} from './styled';

const data = [
  {
    icon: '😶‍🌫️',
    title: 'Launch a help center website',
    text: 'Your knowledge base software has an auto-generated sitemap and configurable SEO options for each article.',
  },
  {
    icon: '🐀',
    title: 'Deliver instant answers',
    text: 'Customers won’t even have to leave your website to find the right answer and keep moving forward.',
  },
];

const Deliver = () => {
  return (
    <Root>
      <Content>
        <Caption>FEATURES</Caption>
        <TitleWrapper>
          <Title>Deliver instant answers with knowledge base</Title>
        </TitleWrapper>
        <Desc>
          Create and publish answers for customers and reduce your customer
          support volume by at least 20%. Happier customers, fewer conversations
          - everyone wins.
        </Desc>
        <ProjectsWrapper>
          {data.map(({ icon, title, text }) => (
            <Wrapper key={title}>
              <LeftWrapper>{icon}</LeftWrapper>
              <RightWrapper>
                <WrappedTitle>{title}</WrappedTitle>
                <WrappedDesc>{text}</WrappedDesc>
              </RightWrapper>
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

export default Deliver;
