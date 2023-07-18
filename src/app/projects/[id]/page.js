import Content from "@/components/Content.jsx";
import { dataProjects } from "../../utils/dataProjects.js";
console.log(dataProjects);

const PageProject = ({ params }) => {
  console.log(params);
  const { id } = params;
  const data = dataProjects.find((p) => p.id === id);
  console.log(data);
  // return <Content data={data} />;
  return (<section >
  
  {data.title}
  
  </section>)
};

export default PageProject;
