/* eslint-disable max-len */

import React from 'react';
import {
  Title,
  Desc,
  ImgWrapper,
  Root,
  Container,
  Wrapper,
  List,
  Icon,
} from '@src/components/projects/projectPage/styled';
import Image from 'next/image';
import placeholder from '@src/components/shared/images/placeholder.jpg';
import { socialIcons } from '@src/components/layout/footer/helper';

const text =
  'Our sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up processOur sales team will get in touch to better understand your needs, and will help you with the sign-up process';

const ProjectPage = () => {
  return (
    <Container>
      <Root>
        <Wrapper>
          <Title>RE BANK</Title>
          <ImgWrapper>
            <Image src={placeholder} layout="responsive" />
          </ImgWrapper>
          <List>
            {socialIcons.map((val) => (
              <Icon key={val.id}>{val.icon}</Icon>
            ))}
          </List>
          <Desc>{text}</Desc>
        </Wrapper>
      </Root>
    </Container>
  );
};

export default ProjectPage;
