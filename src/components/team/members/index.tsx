import React from 'react';
import {
  Title,
  ImgWrapper,
  Container,
  Wrapper,
  MemberWrapper,
} from '@src/components/team/members/styled';
import Image from 'next/image';
import { data } from '@src/components/team/members/helper';

const List = () => {
  return (
    <Container>
      <MemberWrapper>
        {data.map((o, i) => (
          <Wrapper key={i}>
            <ImgWrapper>
              <Image src={o.icon} />
            </ImgWrapper>
            <Title>{o.title}</Title>
          </Wrapper>
        ))}
      </MemberWrapper>
    </Container>
  );
};

export default List;
