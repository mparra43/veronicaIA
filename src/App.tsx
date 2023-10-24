import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";


function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          {/* <Spinner /> */}
        </div>
      }
    >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
