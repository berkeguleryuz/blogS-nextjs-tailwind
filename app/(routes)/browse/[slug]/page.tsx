import React from "react";

interface BrowsePageProps {
  params: {
    slug: string;
  };
}

const BrowsePage = ({ params }: BrowsePageProps) => {
  return <div>{params.slug}</div>;
};

export default BrowsePage;
