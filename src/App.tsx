import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import EmptyPage from "./pages/EmptyPage";
import WherePage from "./pages/WherePage";
import styles from "./styles/App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Body}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/*"} element={<WherePage />} />
            <Route path={"empty/"} element={<EmptyPage />} />
            <Route path={"*"} element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
