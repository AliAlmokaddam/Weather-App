import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Loader from "@/Core/assets/lottie/page-loader.json";

function PageLoader() {
  return (
    <motion.div className="flex-col items-center justify-center w-full">
      <Lottie style={{ height: 150 }} animationData={Loader} />
    </motion.div>
  );
}

export default PageLoader;
