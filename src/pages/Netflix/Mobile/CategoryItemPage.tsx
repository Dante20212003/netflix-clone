import { ListMovies } from "../components/ListMovies";
import { HeaderCategory } from "./views/HeaderCategory";
import { categoriesPage } from "@/data";
import styles from "@/assets/styles/Netflix/Mobile/HomeMoPage.module.css";

const CategoryItemPage = () => {
  return (
    <div className={styles.container}>
      <HeaderCategory />

      <main className={styles.listCategories}>
        {categoriesPage.map((c) => (
          <div key={c.title}>
            <p className={styles.title}>{c.title}</p>

            <ListMovies special={c.special} offset={c.offset} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default CategoryItemPage;
