import {
  Root,
  Main,
  Title,
  Desc,
  List,
  Column,
  Icon,
  ListContainer,
} from 'src/components/layout/footer/styled';
import { socialIcons } from '@src/components/layout/footer/helper';

const Footer = () => {
  return (
    <Root>
      <Main>
        <Column>
          <Title>CosmicDev</Title>
          <Desc>ready to help  launch your project along with our well-designed pages</Desc>
          <List>
            {socialIcons.map((val) => (
              <div key={val.id}>
                <Icon>{val.icon}</Icon>
              </div>
            ))}
          </List>
        </Column>
        <ListContainer>
          list
        </ListContainer>
      </Main>
    </Root>
  );
};

export default Footer;
