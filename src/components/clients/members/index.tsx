import React from 'react';
import {
  ImgWrapper,
  Container,
  Wrapper,
  MemberWrapper,
} from '@src/components/clients/members/styled';
import Image from 'next/image';
import { data } from '@src/components/clients/members/helper';

const List = () => {
  return (
    <Container>
      <MemberWrapper>
        {data.map((o, i) => (
          <Wrapper key={i}>
            <ImgWrapper>
              <Image src={o.icon} />
            </ImgWrapper>
          </Wrapper>
        ))}
      </MemberWrapper>
    </Container>
  );
};

export default List;
