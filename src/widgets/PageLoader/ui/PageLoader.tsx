import { Loader } from "../../../shared/ui";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={className}>
      <Loader />
    </div>
  );
};
