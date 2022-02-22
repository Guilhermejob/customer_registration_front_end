import { useEffect, useState } from "react";
import { Container } from "./styles";
import CanAccessClients from "../../components/CanAcessClients";
import CanNotAccessClients from "../../components/CanNotAccess";

const Home = () => {
  const [havetoken, setHaveToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Bemol:token"));
    setHaveToken(token);
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      {havetoken ? <CanAccessClients /> : <CanNotAccessClients />}
    </Container>
  );
};

export default Home;
