import { useNavigateToPost } from "../../../../shared/lib/hooks";
import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  id: number;
  title: string;
  body: string;
};

export const ListItem = ({ id, title, body }: ListItemProps) => {
  const handleNavigate = useNavigateToPost({ id });
  return (
    <div className={styles.item}>
      <span>{id}</span>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.body}>{body}</span>
      <Button onClick={handleNavigate}>Просмотр</Button>
    </div>
  );
};
