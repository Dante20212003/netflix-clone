import { netflixApi } from "@/api";
import { INetflixItem } from "@/models/Netflix";

export const useItem = () => {
  const getByCategory = async (category: string, limit = 20) => {
    try {
      const response = await netflixApi(`/item/category/${category}`);

      const data: INetflixItem[] = response.data;

      return { limit: data.length, data: data.slice(0, limit) };
    } catch (error) {
      console.log(error);
      return { limit: 0, data: [] };
    }
  };

  const getMovies = async (offset: number) => {
    try {
      const response = await netflixApi(`/item/movies?offset=${offset}`);

      const data: INetflixItem[] = response.data;

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return {
    getByCategory,
    getMovies,
  };
};
