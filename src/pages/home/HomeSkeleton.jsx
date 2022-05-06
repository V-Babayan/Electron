import { HeadingSkeleton } from "components/core-ui/heading/styled";
import { ListSkeleton } from "components/list/ListSceleton";
import { PageSkeleton } from "components/slider/children/page/skeleton";

const HomeSkeleton = () => {
  return (
    <>
      <PageSkeleton />
      <HeadingSkeleton />

      <ListSkeleton />
    </>
  );
};

export { HomeSkeleton };
