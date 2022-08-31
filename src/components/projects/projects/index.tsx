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

const List = () => {
  return (
    <Container>
      <ProjectWrapper>
        {data.map((o) => (
          <Link href={`/projects/${o.id}`} key={o.id}>
            <Wrapper>
              <Title>{o.title}</Title>
              <ImgWrapper>
                <Image src={o.icon} />
              </ImgWrapper>
              <Desc>{o.text}</Desc>
            </Wrapper>
          </Link>
        ))}
      </ProjectWrapper>
    </Container>
  );
};

export default List;
