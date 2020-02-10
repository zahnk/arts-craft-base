import axios from "axios";

const initElements = (password) => {
  console.log( "IES(A):", password );

  return axios
    .get(`/api/initelements/${password}`)
    .then(response => {
      console.log( "OK",response.data);
      return response.data;
    })
    .catch(err => {
      console.log( "ERR", err.response.data);
      return err.response.data;
    });
};


export { initElements };
