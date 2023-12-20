import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigateToPost.module.scss";

type NavigateToPostProps = {
  id: number;
  children: ReactNode;
};

export const NavigateToPost = ({ id, children }: NavigateToPostProps) => {
  const navigate = useNavigate();
  const handleNavigateToPost = () => navigate(`/posts/${id}`);

  return (
    <div onClick={handleNavigateToPost} className={styles.item}>
      {children}
    </div>
  );
};
