import { useNavigate } from "react-router-dom";
import { Header } from "./views/Header";
import { ListMovies } from "../components/ListMovies";
import styles from "@/assets/styles/Netflix/Mobile/HomeMoPage.module.css";

const categorias = [
  {
    title: "NuevosLanzamientos",
    url: "nuevosLanzamientos",
    special: false,
  },
  {
    title: "Anime",
    url: "anime",
    special: false,
  },
  {
    title: "Documentales",
    url: "documental",
    special: false,
  },

  {
    title: "Suspenso",
    url: "suspenso",
    special: false,
  },
  {
    title: "Las 10 peliculas mas populares en Bolivia hoy",
    url: "top10movies",
    special: true,
  },
  {
    title: "Dramas",
    url: "drama",
    special: false,
  },
  {
    title: "Terror",
    url: "soloNetflix",
    special: false,
  },
  {
    title: "Las 10 series mas populares en Bolivia hoy",
    url: "top10series",
    special: true,
  },
  {
    title: "Infantiles",
    url: "infantil",
    special: false,
  },
  {
    title: "Asiaticos",
    url: "koreano",
    special: false,
  },
  {
    title: "Comedia",
    url: "comedia",
    special: false,
  },
];

const HomeMoPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.listCategories}>
        {categorias.map((c) => (
          <div key={c.title}>
            <p className={styles.title}>{c.title}</p>

            <ListMovies url={c.url} special={c.special} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomeMoPage;
