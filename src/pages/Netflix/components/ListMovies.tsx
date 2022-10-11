import { useEffect, useRef, useState } from "react";
import { moviesTest } from "@/data/moviesTest";
import { INetflixItem } from "@/models/Netflix";
import { SwiperSlide, Swiper } from "swiper/react";
import { MovieItem } from "./MovieItem";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { useInView as testView } from "framer-motion";
import { useItem } from "@/hooks";

interface Props {
  url?: string;
  special?: boolean;
  offset?: number;
}
export const ListMovies = ({ url = "", special, offset = 0 }: Props) => {
  const { getByCategory, getMovies } = useItem();

  const [data, setData] = useState<INetflixItem[]>([]);
  const [limit, setLimit] = useState(20);
  
  const [maxLimit, setMaxLimit] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView();

  useEffect(() => {
    const getDataType = async () => {
      const data = await getMovies(offset);

      setData(special ? data.slice(0, 10) : data);
    };

    const getDataCategory = async () => {
      const data = await getByCategory(url, limit);
      setMaxLimit(data.limit);
      setData(data.data);
    };

    if (inView && data.length == 0) {
      if (offset >= 0 && url == "") {
        getDataType();
      } else {
        getDataCategory();
      }
    }
  }, [inView]);

  useEffect(() => {
    
    if (inView2) {
      if (offset >= 0 && url == "") {
        getDataType();
      } else {
        getDataCategory();
      }
      getByCategory(url, limit + 10).then((response: any) => {
        setData(response.data);
      });
      setLimit(limit + 10);
    }
  }, [inView2]);

  return (
    <div ref={ref} style={{ display: "flex" }}>
      <Swiper
        style={{
          padding: `0 ${special ? "1rem 0 4rem" : "1rem"}`,
          height: "16rem",
        }}
        slidesPerView="auto"
        spaceBetween={special ? 40 : 5}
        grabCursor
      >
        {data.length == 0 ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
            <SwiperSlide key={`skeletonList-${i}`} style={{ width: "11rem" }}>
              <MovieItem />
            </SwiperSlide>
          ))
        ) : (
          <>
            {data.map((movie, i) => (
              <SwiperSlide key={movie.netflix_id} style={{ width: "11rem" }}>
                <MovieItem img={movie.img} number={special ? i + 1 : null} />
              </SwiperSlide>
            ))}
          </>
        )}

        {limit < maxLimit && (
          <SwiperSlide style={{ width: "11rem" }}>
            <div ref={ref2} style={{ color: "#FFF" }}>
              <MovieItem />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};
