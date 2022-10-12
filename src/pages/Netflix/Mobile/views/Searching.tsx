import { useRef, useEffect, useState } from "react";
import Drawer from "../../components/Drawer";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import styles from "@/assets/styles/Netflix/Mobile/Searching.module.css";
import { useNetflix } from "@/hooks/useNetflix";
import { MovieItem } from "../../components/MovieItem";
import { useItem } from "@/hooks";
import { INetflixItem } from "@/models/Netflix";
import { useInView } from "react-intersection-observer";

let timeout: any = 0;

export const Searching = () => {
  const { search: drawerSearch } = useSelector(
    (state: RootState) => state.netflix
  );

  const [dataSearch, setDataSearch] = useState<INetflixItem[]>([]);
  const [valueSearch, setValueSearch] = useState("");
  const [limit, setLimit] = useState(-20);
  const [maxLimit, setMaxLimit] = useState(0);

  const ref = useRef<HTMLInputElement>(null);
  const { ref: refItem, inView } = useInView();

  const { onToggleSearch, onToggleConfig } = useNetflix();
  const { getDataByName, getByCategory, isLoading, setIsLoading } = useItem();

  const getData = async (val: string, setLoading: boolean = true) => {
    const { data, maxLimit } = await getDataByName(
      dataSearch.length,
      val,
      setLoading
    );

    setDataSearch([...dataSearch, ...data]);
    setLimit(limit + 20);
    setMaxLimit(maxLimit);
  };

  const getDataCategories = async () => {
    const { data } = await getByCategory("top10series");
    const { data: dataExtr } = await getByCategory("top10movies");
    setDataSearch([...data, ...dataExtr]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setDataSearch([]);
    setLimit(-20);

    const value = e.target.value;
    setValueSearch(value);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (value !== "") {
        setDataSearch([]);
        getData(value);
        return;
      }

      getDataCategories();

      clearTimeout(timeout);
    }, 1500);
  };

  const clearInput = () => {
    setValueSearch("");
    ref.current?.focus();
  };

  useEffect(() => {
    if (drawerSearch) ref.current?.focus();
  }, [drawerSearch]);

  useEffect(() => {
    if (inView) {
      getData(valueSearch, false);
    }
  }, [inView]);

  useEffect(() => {
    getDataCategories();
  }, []);

  return (
    <Drawer open={drawerSearch}>
      <div className={styles.head_fixed}>
        <div className={styles.top_drawer}>
          <AiOutlineArrowLeft
            onClick={() => onToggleSearch()}
            size={28}
            color="FFF"
          />
          <img
            className={styles.img_perfil}
            src="/img/profile/1.png"
            alt=""
            onClick={() => onToggleConfig()}
          />
        </div>

        <div className={styles.input}>
          <AiOutlineSearch size={25} color="#8c8c8c" />
          <input
            ref={ref}
            type="text"
            placeholder="Buscar una serie, una peli, un genero, etc."
            name="input_2"
            value={valueSearch}
            onChange={handleInputChange}
          />

          {valueSearch.length > 0 ? (
            <AiOutlineClose size={25} color="#8c8c8c" onClick={clearInput} />
          ) : (
            <FaMicrophone size={20} color="#8c8c8c" />
          )}
        </div>
      </div>

      <div className={`${isLoading && styles.isLoading}`}>
        {!isLoading ? (
          <>
            {dataSearch.length == 0 && valueSearch.length > 0 ? (
              <p className={styles.title}>
                <span>¡Ay! Esa opcion no esta disponible</span>
                <small>
                  Intenta buscar otra peli, serie, actor, director o genero
                </small>
              </p>
            ) : (
              <p className={styles.title}>
                {valueSearch.length == 0 ? "Lo mas buscados" : "Peliculas y Tv"}
              </p>
            )}

            {valueSearch.length > 0 ? (
              <div className={styles.grid}>
                {dataSearch.map((item) => (
                  <div key={item._id}>
                    <MovieItem img={item.img} />
                  </div>
                ))}

                {dataSearch.length < maxLimit && (
                  <div ref={refItem}>
                    <MovieItem />
                  </div>
                )}
              </div>
            ) : (
              dataSearch.map((item) => (
                <div
                  key={item.netflix_id}
                  className={styles.item_search_container}
                >
                  <img
                    className={styles.item_search_img}
                    src={item.img}
                    alt={item.title}
                  />

                  <p className={styles.item_search_title}>{item.title}</p>
                  <BsPlayCircle
                    className={styles.item_search_icon}
                    size={28}
                    color="FFF"
                  />
                </div>
              ))
            )}
          </>
        ) : (
          <div className={styles.spiner}></div>
        )}
      </div>
    </Drawer>
  );
};
