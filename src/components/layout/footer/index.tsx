import {
  Root,
  Main,
  Title,
  Desc,
  List,
  Items,
  Icon,
  Column,
  ListGrid,
  TitleOfList,
} from 'src/components/layout/footer/styled';
import { dataOfList, socialIcons } from '@src/components/layout/footer/helper';

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
        <ListGrid>
          {dataOfList.map((val) => (
            <div key={val.id}>
              <TitleOfList>{val.title}</TitleOfList>
              {val.item.map((data) => (
                <div key={data.id}>
                  <Items>{data.desc}</Items>
                </div>
              ))}
            </div>
          ))}
        </ListGrid>
      </Main>
    </Root>
  );
};

export default Footer;
