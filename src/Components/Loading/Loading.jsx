import Lottie from "lottie-react";
import loadingData from "../../Components/Loading/loading.json";

export const Loading = () => {
  return (
    <>
      <Lottie animationData={loadingData} />
    </>
  );
};
