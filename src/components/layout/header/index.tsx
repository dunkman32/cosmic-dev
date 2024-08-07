import {
  Main,
  Root,
  Logo,
  Card,
  Desc,
  List,
  Button,
  LogoWrapper,
  Logo3,
  BurgerArea,
  StyledBtn,
} from '@src/components/layout/header/styled';
import { Navbar } from '@src/components/layout/header/helper';
import { useState } from 'react';
import CustomLink from '@src/components/shared/customLink';
import Link from 'next/link';
import Menu, { Burger } from './burger';

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Root>
      <Main>
        <BurgerArea>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
          <StyledBtn />
        </BurgerArea>
        <Link href="/">
          <LogoWrapper style={{ cursor: 'pointer' }}>
            <Logo>Cosmic</Logo>
            <Logo3>{' { Dev } '}</Logo3>
          </LogoWrapper>
        </Link>
        <List>
          {Navbar.map((val) => (
            <Card key={val.id}>
              <CustomLink href={val.link}>
                <Desc>{val.desc}</Desc>
              </CustomLink>
            </Card>
          ))}
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </List>
      </Main>
    </Root>
  );
};

export default MyComponent;
