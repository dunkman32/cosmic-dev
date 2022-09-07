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
} from '@src/components/projects/projectPage/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { data } from '@src/components/projects/projects/helper';
import LinkIcon from '@mui/icons-material/Link';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import rebank from '@src/components/shared/images/rebank.png';

const ProjectPage = () => {
  const router = useRouter();
  const project = data.find((el) => el.id === Number(router.query.id))! || {
    id: 1,
    icon: rebank,
    title: 'RE|BANK',
    text: 'Re|Bank is a sub-brand of Pasha Bank, whose goal is to offer simplified products to customers.',
    link: 'https://rebank.ge/en',
  };
  return (
    <Container>
      <Root>
        <Wrapper>
          <Title>{project.title}</Title>
          <ImgWrapper>
            <Image src={project.icon} layout="responsive" />
          </ImgWrapper>
          <List>
            <Link href={project.link}>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <LinkIcon
                    sx={{
                      width: '38px',
                      height: '38px',
                      fill: '#77838f',
                      cursor: 'pointer',
                    }}
                  />
                </IconButton>
              </a>
            </Link>

            {/* {socialIcons.map((val) => ( */}
            {/*  <Icon key={val.id}>{val.icon}</Icon> */}
            {/* ))} */}
          </List>
          <Desc>{project.text}</Desc>
        </Wrapper>
      </Root>
    </Container>
  );
};

export default ProjectPage;
