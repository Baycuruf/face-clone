import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes";


function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const showRoutes = useRoutes(routes);
  
  return (
    <>
        <Toaster position="top-right" />
        {showRoutes}
      </>
  );
}

export default App;
