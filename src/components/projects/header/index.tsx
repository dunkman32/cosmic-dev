import {
  Background,
  Container,
  ImgWrapper,
  Mouse,
  Root,
  Title,
} from '@src/components/projects/header/styled';
import Image from 'next/image';
import projects from '@src/components/shared/images/projects.png';

const Header = ({ scrollTo }: { scrollTo: any }) => {
  return (
    <Container>
      <Root>
        <ImgWrapper>
          <Image src={projects} />
        </ImgWrapper>
        <Background>
          <Title>Projects!</Title>
          <Mouse onClick={scrollTo} />
        </Background>
      </Root>
    </Container>
  );
};

export default Header;
