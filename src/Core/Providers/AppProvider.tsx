import { ReactNode } from 'react';
import AntProvider from "./AntProvider";

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  return (
      <AntProvider>
        {children}
      </AntProvider>
  );
}

export default AppProvider;
