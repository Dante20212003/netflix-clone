import axios from "axios";

const calendarApi = axios.create({
  baseURL: "https://netflix-clone-ts.herokuapp.com",
});

//Configurate interceptors

export default calendarApi;
