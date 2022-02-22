import { useForm } from "react-hook-form";
import { useClients } from "../../Providers/Clients";
import { Container, FormContainer, FormSection } from "./styles";
import { loginSchema as schema } from "../../schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const { Login } = useClients();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    Login(data);
    navigate("/");
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <FormSection>
          <div>
            <span className="text-error">
              {errors.email ? errors.email?.message : "Email"}
            </span>
            <input type="text" placeholder="E-mail" {...register("email")} />
          </div>
          <div>
            <span className="text-error">
              {errors.password ? errors.password?.message : "Senha"}
            </span>
            <input
              type="text"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </div>
        </FormSection>
        <div className="containerButtons">
          <button type="submit">Login</button>
        </div>
      </FormContainer>
      <button onClick={() => navigate("/register")}>Registre-se</button>
    </Container>
  );
};

export default FormLogin;
