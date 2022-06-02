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
} from '@src/components/layout/header/styled';
import { Navbar } from '@src/components/layout/header/helper';

const MyComponent = () => {
  return (
    <Root>
      <Main>
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
