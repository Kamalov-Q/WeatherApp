import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ThemeProvider } from "./components/context/theme-provider";
import Weather from "./pages/weather-dashboard";
import City from "./pages/city-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useGeoLocation } from "./hooks/useGeoLocation";

export default function App() {

  const client = new QueryClient();

  useGeoLocation();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<Weather />} />
              <Route path="/city/:id" element={<City />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
