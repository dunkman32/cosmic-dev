/* eslint-disable max-len */
import React from 'react';
import Check from '@src/components/shared/icons/check';
import HelpIcon from '@src/components/shared/icons/help';
import Delivers from '@src/components/shared/icons/deliver';
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

const data = [
  {
    id: 1,
    icon: <Check />,
    text: ' Create and publish answers for customers and reduce your customer support volume by at least 20%. Happier customers, fewer conversations - everyone wins.',
  },
  {
    id: 2,
    icon: <HelpIcon />,
    title: 'Launch a help center website',
    text: 'Your knowledge base software has an auto-generated sitemap and configurable SEO options for each article.',
  },
  {
    id: 3,
    icon: <Check />,
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
        <ProjectsWrapper>
          {data.map(({
            icon, title, text, id,
          }) => (
            <Wrapper key={id}>
              <LeftWrapper>{icon}</LeftWrapper>
              <RightWrapper>
                {title && <WrappedTitle>{title}</WrappedTitle>}
                <WrappedDesc>{text}</WrappedDesc>
              </RightWrapper>
            </Wrapper>
          ))}
        </ProjectsWrapper>
        <ImgWrapper>
          <Delivers />
        </ImgWrapper>
      </Content>
    </Root>
  );
};

export default Deliver;
