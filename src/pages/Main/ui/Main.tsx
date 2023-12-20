import { PostsList } from "../../../widgets/PostsList";

type MainProps = {
  classNames?: string;
};

export const Main: React.FC<MainProps> = ({ classNames }) => {
  return (
    <div className={classNames}>
      <PostsList />
    </div>
  );
};

export default Main;
