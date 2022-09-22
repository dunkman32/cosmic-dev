import {
  Desc,
  Image,
  Root,
  StackInner,
  Title,
  TitleWrapper,
} from '@src/components/home/stack/styled';
import { StyledPaddingWrapper } from '@src/components/shared';

export const STACK = {
  front: [
    { name: 'HTML5', src: '/images/stack/front/html.svg' },
    { name: 'CSS3', src: '/images/stack/front/css.svg' },
    { name: 'JavaScript', src: '/images/stack/front/javascript.svg' },
    { name: 'TypeScript', src: '/images/stack/front/typescript.svg' },
    { name: 'React.js', src: '/images/stack/front/react.svg' },
    { name: 'Next.js', src: '/images/stack/front/nextjs.svg' },
    { name: 'Redux', src: '/images/stack/front/redux.svg' },
    { name: 'Webpack', src: '/images/stack/front/webpack.svg' },
    { name: 'Git', src: '/images/stack/front/git.svg' },
    { name: 'GraphQL', src: '/images/stack/front/graphql.svg' },
    { name: 'Zustand', src: '/images/stack/front/zustand.png' },
    { name: 'React Query', src: '/images/stack/front/react-query.png' },
    { name: 'Apollo Client', src: '/images/stack/front/apollo.svg' },
    { name: 'MUI', src: '/images/stack/front/mui.png' },
    { name: 'Styled Components', src: '/images/stack/front/styledcomponents.png' },
    { name: 'Emotion', src: '/images/stack/front/emotion.png' },
    { name: 'Tailwind', src: '/images/stack/front/tailwind.jpg' },
    { name: 'Vite', src: '/images/stack/front/vite.png' },
    { name: 'Babel', src: '/images/stack/front/babel.png' },
    { name: 'Prettier', src: '/images/stack/front/prettier.png' },
    { name: 'ESLint', src: '/images/stack/front/eslint.png' },
    { name: 'Strapi', src: '/images/stack/front/strapi.svg' },
    { name: 'Docker', src: '/images/stack/front/docker.svg' },
  ],
  back: [
    { name: 'Net', src: '/images/stack/back/net.png' },
    { name: 'Azure', src: '/images/stack/front/azure.png' },
    { name: 'Git', src: '/images/stack/front/git.svg' },
    { name: 'elastick', src: '/images/stack/back/elastick.svg' },
    { name: 'mongo', src: '/images/stack/back/mongo.png' },
    { name: 'csharp', src: '/images/stack/back/csharp.png' },
    { name: 'mysql', src: '/images/stack/back/mysql.png' },
    { name: 'Node.js', src: '/images/stack/back/node.svg' },
    { name: 'oracle', src: '/images/stack/back/oracle.png' },
    { name: 'postgre', src: '/images/stack/back/postgre.png' },
    { name: 'python', src: '/images/stack/back/python.png' },
    { name: 'redis', src: '/images/stack/back/redis.png' },
    { name: 'rabbit', src: '/images/stack/back/rabbit.png' },
  ],
};

const StackComponent = () => {
  return (
    <StyledPaddingWrapper>
      <Root>
        <TitleWrapper>
          <Title>Technologies</Title>
          <Desc>Backend</Desc>
        </TitleWrapper>
        <StackInner>
          {STACK.back.map((stack) => (
            <div key={stack.src} data-tip={stack.name}>
              <Image src={stack.src} />
            </div>
          ))}
        </StackInner>
        <TitleWrapper>
          <Desc>Frontend</Desc>
        </TitleWrapper>
        <StackInner>
          {STACK.front.map((stack) => (
            <div key={stack.src} data-tip={stack.name}>
              <Image src={stack.src} />
            </div>
          ))}
        </StackInner>
      </Root>
    </StyledPaddingWrapper>
  );
};

export default StackComponent;
