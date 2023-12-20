import { NavigateToPost } from "../../../features/NavigateTo";
import { useGetPostsQuery } from "../../../shared/api/postApi";
import { Loader } from "../../../shared/ui";
import { ListItem, VirtualList } from "../../../entities/List";

type PostsListProps = {
  classNames?: string;
};

export const PostsList = ({ classNames }: PostsListProps) => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className={classNames}>
        <Loader />
      </div>
    );
  }

  if ((data && data.length === 0) || !data) {
    return <div className={classNames}>нет данных</div>;
  }

  return (
    <VirtualList items={data}>
      {({ id, title, body }) => (
        <NavigateToPost id={id}>
          <ListItem id={id} title={title} body={body} />
        </NavigateToPost>
      )}
    </VirtualList>
  );
};
