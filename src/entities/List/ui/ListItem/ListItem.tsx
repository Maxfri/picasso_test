import styles from "./ListItem.module.scss";

type ListItemProps = {
  id: number;
  title: string;
  body: string;
};

export const ListItem = ({ id, title, body }: ListItemProps) => {
  return (
    <>
      <span>{id}</span>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.body}>{body}</span>
    </>
  );
};
