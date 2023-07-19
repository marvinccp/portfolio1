import { dataProjects } from "../../utils/dataProjects.js";
import styles from "./content_projects.module.css";
console.log(dataProjects);

const PageProject = ({ params }) => {
  console.log(params);
  const { id } = params;
  const data = dataProjects.find((p) => p.id === id);
  console.log(data);
  return (
    <section className={styles.container}>
      <iframe width="100%" height="100%" src={data.link} frameborder="0"></iframe>
    </section>
  );
};

export default PageProject;
