/* eslint-disable max-len */
import React from 'react';
import Delivers from '@src/components/shared/icons/deliver';
import { data } from '@src/components/home/deliver/helper';
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
            <Wrapper key={id}>
              {icon && <LeftWrapper>{icon}</LeftWrapper>}
              <RightWrapper>
                {title && <WrappedTitle>{title}</WrappedTitle>}
                <WrappedDesc space={icon}>{text}</WrappedDesc>
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
