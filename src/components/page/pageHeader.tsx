import React from "react";
import Title from "./title";
import Description from "./description";
import clsx from "clsx";

interface PageHeaderProps {
  withBreadcrumbs?: boolean;
  children: React.ReactNode;
}

interface PageHeaderComponent extends React.FC<PageHeaderProps> {
  Title: typeof Title;
  Description: typeof Description;
}

const PageHeader: PageHeaderComponent = (props) => {
  const { withBreadcrumbs, children } = props;

  return (
    <div
      className={clsx(
        "flex flex-col mb-14",
        withBreadcrumbs ? "pt-12 gap-11" : "pt-28"
      )}
    >
      {children}
    </div>
  );
};

PageHeader.Title = Title;
PageHeader.Description = Description;

export default PageHeader;
