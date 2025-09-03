import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";

const Navigation = lazy(() => import("home/Navigation"));

const App = () => {
  return (
    <div className="container">
      <div>this is admin</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);