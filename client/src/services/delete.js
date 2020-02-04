import axios from "axios";


const deleteProject = (projectId) => {
  console.log("im delete.js gelandet", projectId);
  const deletePath=`/api/projects/${projectId}`;
  axios.delete(deletePath);
};

export { deleteProject };
