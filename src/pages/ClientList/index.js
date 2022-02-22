import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import CardList from "../../components/CardList";

const Clients = () => {
  const initialState =
    JSON.parse(localStorage.getItem("@Bemol:token")) || false;
  const [authenticated, setAuthenticated] = useState(initialState);
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (authenticated === false) {
      navigate("/login");
    }
  }, []);

  return (
    <Container>
      <h1>Lista de clientes</h1>
      <CardList />
      <button onClick={scrollTop}>Voltar para o topo</button>
      <button onClick={() => navigate("/")}>Pagina principal</button>
    </Container>
  );
};

export default Clients;
