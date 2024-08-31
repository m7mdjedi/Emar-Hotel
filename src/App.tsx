import NavBar from "./components/NavBar";
import Homee from "./pages/Homee";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Acadimics from "./pages/Acadimics";
import AcceptingAndHelping from "./pages/AcceptingAndHelping";
import Login from "./pages/Login";
import Logup from "./pages/Logup";
import { Outlet, Route, Routes } from "react-router";
import StudentPage from "./pages/StudentPage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import NavBar2 from "./components/NavBar2";


function BasicLayout() {
  return (
    <>
      <NavBar2 />
      <Outlet />
      <Footer />
    </>
  );
}
function RegisterLayout() {
  return <Outlet />;
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/" element={<Homee />} />

          <Route path="/aboutUs" element={<AboutUsPage />}>
            <Route path="aboutUsInShort" element={<AboutUs />} />
           
          </Route>
          <Route path="/student" element={<StudentPage />}>
            <Route index path="acadimics" element={<Acadimics />} />
          </Route>
          <Route
            path="/acceptingAndHelping"
            element={<AcceptingAndHelping />}
          />
          <Route path="/leadership" element={<Leadership />} />
        </Route>
        <Route path="/register" element={<RegisterLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="logup" element={<Logup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
