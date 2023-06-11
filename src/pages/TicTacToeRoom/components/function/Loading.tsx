import React from "react";
interface ILoadingProps {
  loading: boolean;
}
const Loading = ({ loading }: ILoadingProps) => {
  return (
    <div className="loader" style={{ display: loading ? "flex" : "none" }}>
      <i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
      <span style={{ userSelect: "none" }}>Loading...</span>
    </div>
  );
};

export default Loading;
