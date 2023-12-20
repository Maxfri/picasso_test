import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type NavigateToPostProps = {
  id: number;
};

export const useNavigateToPost = ({ id }: NavigateToPostProps) => {
  const navigate = useNavigate();

  const handleNavigateToPost = useCallback(
    () => navigate(`/posts/${id}`),
    [id, navigate]
  );

  return handleNavigateToPost;
};
