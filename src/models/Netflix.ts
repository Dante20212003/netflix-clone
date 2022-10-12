export interface NetflixData {
  data: {
    series: INetflixItem[];
    movies: INetflixItem[];
  };
}

export interface INetflixItem {
  _id?: string;
  imdb_id: string;
  img: string;
  netflix_id: number;
  poster: string;
  rating: string;
  runtime: string;
  synopsis: string;
  title: string;
  title_date: string;
  title_type: string;
  top250: number;
  top250tv: number;
  year: string;
}

export interface NetlixGeneros {
  genre: string;
  netflix_id: number;
}
