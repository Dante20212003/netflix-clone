import { netflixApi } from "@/api";
import { INetflixItem } from "@/models/Netflix";

export const useItem = () => {
  const getByCategory = async (category: string, limit = 0) => {
    try {
      const response = await netflixApi(
        `/item/category/${category}?offset=${limit}`
      );

      const data = response.data;

      return { maxLimit: data.limit, data: data.items };
    } catch (error) {
      console.log(error);
      return { limit: 0, data: [] };
    }
  };

  const getMovies = async (offset: number, type: string) => {
    let tipoItem;
    if (type === "Peliculas") tipoItem = "movie";

    if (type == "Series") tipoItem = "series";

    try {
      const response = await netflixApi(
        `/item/movies?offset=${offset}&type=${tipoItem}`
      );

      const data = response.data;

      return { maxLimit: data.limit, data: data.items };
    } catch (error) {
      console.log(error);
      return { maxLimit: 0, data: [] };
    }
  };

  const getCategories = async () => {
    try {
      const response = await netflixApi("/item/categories");

      const data = response.data;

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return {
    getByCategory,
    getMovies,
    getCategories,
  };
};
