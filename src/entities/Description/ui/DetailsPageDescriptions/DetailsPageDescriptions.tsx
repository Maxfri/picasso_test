import React from "react";
import { Posts } from "../../../../shared/types/types";

type DetailsPageDescriptions = {
  classNames?: string;
} & Omit<Posts, "userId">;

export const DetailsPageDescriptions = React.memo(
  ({ id, title, body, classNames }: DetailsPageDescriptions) => {
    return (
      <div className={classNames}>
        <h1>
          {id} {title}
        </h1>
        <p>{body}</p>
      </div>
    );
  }
);
