import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppProvider from "@/Core/Providers/AppProvider.tsx";
import Router from "@/Core/Routes/index.routes.tsx";
import {useGetGeoLocation} from "@/Core/Hooks/use-get-geo-location.hook.tsx";

const queryClient = new QueryClient();

function App() {
    useGetGeoLocation()

  return (
      <QueryClientProvider client={queryClient}>
          <AppProvider>
              <Router />
              <ReactQueryDevtools initialIsOpen={false} />
          </AppProvider>
      </QueryClientProvider>

      )
}

export default App
