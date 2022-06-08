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
import CustomLink from '@src/components/shared/customLink';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Root>
      <Main>
        <Column>
          <Title>CosmicDev</Title>
          <Desc>ready to help  launch your project along with our well-designed pages</Desc>
          <List>
            {socialIcons.map((val) => (
              <Icon key={val.id}>
                {val.icon}
              </Icon>
            ))}
          </List>
          <Typography sx={{
            color: '#77838f',
            fontSize: '20px',
            paddingLeft: '5px',
            marginTop: '167px',
          }}
          >
            © CosmicDev
            {' '}
            {new Date().getFullYear()}
          </Typography>
        </Column>
        <ListGrid>
          {dataOfList.map((val) => (
            <div key={val.id}>
              <TitleOfList>{val.title}</TitleOfList>
              {val.item.map((data) => (
                <CustomLink key={data.id} href="/">
                  <Items>{data.desc}</Items>
                </CustomLink>
              ))}
            </div>
          ))}
        </ListGrid>
      </Main>
    </Root>
  );
};

export default Footer;
