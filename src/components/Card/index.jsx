import { CardContainer } from "./styles";

const Card = (props) => {
  console.log(props.name, "HHHHHHHHHHHHHHHHH");
  return (
    <CardContainer>
      <div className="side">
        <div>Nome: {props.name}</div>
        <div>Sobrenome: {props.last_name}</div>
        <div>Email: {props.email}</div>
        <div>Cep: {props.cep}</div>
        <div>Estado: {props.state}</div>
        <div>Cidade: {props.city}</div>
      </div>
      <div className="side">
        <div>Bairro: {props.neighborhood}</div>
        <div>Rua: {props.street}</div>
        <div>Numero: {props.number}</div>
        <div>Complemento: {props.complement}</div>
        <div>Telefone: {props.phone}</div>
        <div>ID: {props.id}</div>
      </div>
    </CardContainer>
  );
};

export default Card;
