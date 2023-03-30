import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MainPage } from "./pages/MainPage";
import { CreatePage } from "./pages/CreatePage";
import { ResultPage } from "./pages/ResultPage";

const theme = extendTheme({
  fonts: {
    heading: `"Pretendard", sans-serif`,
    body: `"Pretendard", sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/new",
    element: <CreatePage />,
  },
  {
    path: "/result/:id",
    element: <ResultPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
