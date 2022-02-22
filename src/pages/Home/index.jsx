import { useEffect, useState } from "react";
import { Container } from "./styles";
import CanAccessClients from "../../components/CanAcessClients";
import CanNotAccessClients from "../../components/CanNotAccess";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Bemol:token"));
    setToken(token);
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      {token ? <CanAccessClients /> : <CanNotAccessClients />}
    </Container>
  );
};

export default Home;
