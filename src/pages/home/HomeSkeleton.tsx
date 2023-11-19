import React from "react";

import { HeadingSkeleton, ListSkeleton, PageSkeleton } from "~/components";

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
