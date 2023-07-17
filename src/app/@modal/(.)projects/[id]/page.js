import React from "react";
import Modal from "@/components/modal/Modal";
import Content from "@/components/Content";
import { dataProjects } from "@/app/utils/dataProjects";



const ModalProject = ({ params }) => {
  const { id} = params
  const data = dataProjects.find((p) => p.id === id);
  console.log(data)

  return (
    <Modal>
      <Content data={data} />
    </Modal>
  );
};

export default ModalProject;
