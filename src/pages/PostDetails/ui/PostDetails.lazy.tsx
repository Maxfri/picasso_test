import { lazy } from "react";

export const PostDetailsLazy = lazy(async () => await import("./PostDetails"));
