import Layout from '@src/components/layout';
import ProjectPage from '@src/components/projects/projectPage';

const Project = () => {
  return <ProjectPage />;
};

Project.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Project;
