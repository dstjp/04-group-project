import Lottie from "lottie-react";
import loadingData from "../../Components/Loading/loading.json";

export const Loading = () => {
  // this can be simplified to just return the Lottie component
  return <Lottie animationData={loadingData} />;
};
