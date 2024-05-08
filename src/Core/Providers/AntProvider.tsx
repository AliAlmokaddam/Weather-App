import { ConfigProvider } from "antd";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

function AntProvider({ children }: Props) {

  return (
    <ConfigProvider>
      {children}
    </ConfigProvider>
  );
}

export default AntProvider;
