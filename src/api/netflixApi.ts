import axios from "axios";

const calendarApi = axios.create({
  baseURL: "http://192.168.13.102:4000",
});

//Configurate interceptors

export default calendarApi;
