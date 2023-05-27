import { Box } from "@chakra-ui/react";
import "./App.css";
import { AllRoutes } from "./Component/AllRoutes";
import Navbar from "./Component/Navbar";
import Navbar1 from "./Component/Navbar1";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar1 />
      <Box mt={{ base: "30px", sm: "30px", md: "150px", lg: "150px" }}>
        {<AllRoutes />}
      </Box>

      <Footer />
    </div>
  );
}

export default App;
