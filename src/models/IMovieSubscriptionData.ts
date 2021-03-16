import { IMovie } from "./IMovie";
import { IUserProfile } from "./IUserProfile";

export interface IMovieSubscriptionData {
  movie: IMovie;
  user: IUserProfile;
}
