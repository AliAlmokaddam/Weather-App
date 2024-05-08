import Lottie from "lottie-react";
import { motion } from "framer-motion";
import App_Loader from "@/Core/assets/lottie/wind.json";
import {ReactNode} from "react";

interface AppLoaderProps {
  Loader?: any;
  size?: string | number;
  children?: ReactNode;
}

const slideIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 3 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};


function AppLoader({ Loader, size, children }: AppLoaderProps) {
  return (
    <motion.div
      key="loader"
      variants={slideIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex justify-center items-center bg-white"
      style={{ height: "100vh" }}
    >
      <motion.div className="flex flex-col gap-10 justify-center items-center">
        <Lottie
          style={{ height: size ?? 250 }}
          animationData={Loader ?? App_Loader}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}

export default AppLoader;
