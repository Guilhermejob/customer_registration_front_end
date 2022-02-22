import Card from "../Card";
import { Container } from "./styles";
import { useClients } from "../../Providers/Clients";

const CardList = () => {
  const { clients } = useClients();

  return (
    <Container>
      {clients[0].map((item) => (
        <Card
          key={item.id}
          name={item.name}
          last_name={item.last_name}
          email={item.email}
          cep={item.cep}
          state={item.state}
          city={item.city}
          neighborhood={item.neighborhood}
          street={item.street}
          number={item.number}
          complement={item.complement}
          phone={item.phone}
          id={item.id}
        >
          =
        </Card>
      ))}
    </Container>
  );
};

export default CardList;
