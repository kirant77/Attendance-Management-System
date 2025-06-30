// File: src/App.jsx
// import Router from "./router";

// export default function App() {
//   return <Router />;
// }


import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Router />
    </>
  );
}

export default App;
