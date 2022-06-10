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
        <LogoWrapper>
          <Logo>Cosmic</Logo>
          <Logo3>{' { Dev } '}</Logo3>
        </LogoWrapper>
        <List>
          {Navbar.map((val) => (
            <Card key={val.id}>
              <Desc>{val.desc}</Desc>
            </Card>
          ))}
          <Button>
            Contact us
          </Button>
        </List>
      </Main>
    </Root>
  );
};

export default MyComponent;
