import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CanAccessClients = () => {
  const [token, setToken] = useState("");

  const logout = () => {
    localStorage.removeItem("@Bemol:token");
    setToken("");
    window.location.reload();
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Bemol:token"));
    setToken(token);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="access">
      Caso voce tenha token acesse a pagina de clientes clicando no botão
      <button onClick={() => navigate("/customers")}>Clientes</button>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default CanAccessClients;
