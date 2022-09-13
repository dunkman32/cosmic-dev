import Layout from '@src/components/layout';
import Header from '@src/components/projects/header';
import List from '@src/components/projects/projects';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef();

  const scrollTo = () => {
    if (ref && ref.current) {
      // @ts-ignore
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      <Header scrollTo={scrollTo} />
      <List rf={ref} />
    </>
  );
};

Projects.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Projects;
