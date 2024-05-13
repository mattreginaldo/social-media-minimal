import { Profile } from "./profile";

export interface Post {
  id: number,
  body: string,
  publishedAt: string,
  author: Profile;
}
