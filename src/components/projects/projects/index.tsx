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

const List = () => {
  return (
    <Container>
      <ProjectWrapper>
        {data.map((o) => (
          <Wrapper key={o.id}>
            <Title>{o.title}</Title>
            <ImgWrapper>
              <Image src={o.icon} />
            </ImgWrapper>
            <Desc>{o.text}</Desc>
          </Wrapper>
        ))}
      </ProjectWrapper>
    </Container>
  );
};

export default List;
