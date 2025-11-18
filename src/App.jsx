import { Routes, Route } from "react-router-dom";
import InicialPage from "./screens/InicialPage";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      {/* Área logada */}
      <Route path="/inicialPage" element={<InicialPage />} />

      {/* Tudo relacionado a login/cadastro/esqueci senha */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
