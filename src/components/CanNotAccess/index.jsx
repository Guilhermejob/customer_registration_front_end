import { Container } from "./styles";
import { useNavigate } from "react-router";

const CanNotAccessClients = () => {
  const navigate = useNavigate();
  return (
    <Container className="Access">
      <h2>Bem vindo a nossa aplicação para captação de clientes</h2>
      <h4>Para acessar todos os nossos recursos primeiro vamos Logar</h4>
      <button onClick={() => navigate("/login")}>Logar</button>
    </Container>
  );
};

export default CanNotAccessClients;
