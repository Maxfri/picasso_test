import { Main } from "../../../pages/Main";
import { PostDetails } from "../../../pages/PostDetails";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  POSTS = "posts",
  POSTS_DETAILS = "posts_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.POSTS]: "/posts",
  [AppRoutes.POSTS_DETAILS]: "/posts/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.POSTS]: {
    path: RoutePath.posts,
    element: <Main />,
  },
  [AppRoutes.POSTS_DETAILS]: {
    path: `${RoutePath.posts_details}:id`,
    element: <PostDetails />,
  },
};
