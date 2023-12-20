import { useParams } from "react-router-dom";

import { Loader } from "../../../shared/ui";
import { useGetPostQuery } from "../../../shared/api/postApi";

import { DetailsPageDescriptions } from "../../../entities/Description/ui/DetailsPageDescriptions/DetailsPageDescriptions";
import { ButtonNavigateToBack } from "../../../features/NavigateTo/ui/ButtonNavigateToBack/ButtonNavigateToBack";

type PostDetailsProps = {
  classNames?: string;
};

export const PostDetails: React.FC<PostDetailsProps> = ({ classNames }) => {
  const { id } = useParams();

  const { data, isLoading } = useGetPostQuery(id ?? "", {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });

  if (!id || !data) {
    return <div className={classNames}>Статья не найдена</div>;
  }

  if (isLoading) {
    return (
      <div className={classNames}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classNames}>
      <ButtonNavigateToBack />
      <DetailsPageDescriptions
        id={data.id}
        title={data.title}
        body={data.body}
      />
    </div>
  );
};

export default PostDetails;
