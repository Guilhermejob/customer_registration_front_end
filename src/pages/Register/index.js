import { Container, FormContainer, FormSection } from "./styles";
import { registerSchema as schema } from "../../schemas/register.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useClients } from "../../Providers/Clients";
import { useNavigate } from "react-router";

import axios from "axios";

const FormRegister = () => {
  const { registerCostumer } = useClients();
  const navigate = useNavigate();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((resp) => {
      console.log(resp.data);
      setValue("cep", resp.data.cep);
      setValue("street", resp.data.logradouro);
      setValue("neighborhood", resp.data.bairro);
      setValue("city", resp.data.localidade);
      setValue("state", resp.data.uf);
      setValue("Complement", resp.data.complemento);
    });
  };

  const onSubmit = (data) => {
    registerCostumer(data);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Registro</h2>
        <FormSection>
          <div>
            <div>
              <span className="text-error">
                {errors.name ? errors.name?.message : "Nome"}
              </span>
              <input type="text" placeholder="Nome" {...register("name")} />
            </div>
            <div>
              <span className="text-error">
                {errors.last_name ? errors.last_name?.message : "Sobrenome"}
              </span>
              <input
                type="text"
                placeholder="Sobrenome"
                {...register("last_name")}
              />
            </div>
          </div>
          <div>
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
          </div>
        </FormSection>
        <FormSection>
          <div>
            <div>
              <span className="text-error">
                {errors.phone ? errors.phone?.message : "Telefone"}
              </span>
              <input
                type="text"
                placeholder="Telefone"
                {...register("phone")}
              />
            </div>
            <div>
              <span className="text-error">
                {errors.cep ? errors.cep?.message : "Cep"}
              </span>
              <input
                type="text"
                placeholder="Cep"
                {...register("cep")}
                onBlur={checkCep}
              />
            </div>
            <div>
              <span className="text-error">
                {errors.street ? errors.street?.message : "Rua"}
              </span>
              <input type="text" placeholder="Rua" {...register("street")} />
            </div>
            <div>
              <span className="text-error">
                {errors.number ? errors.number?.message : "Numero"}
              </span>
              <input type="text" placeholder="Numero" {...register("number")} />
            </div>
          </div>
          <div>
            <div>
              <span>Complemento:</span>
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>
            <div>
              <span className="text-error">
                {errors.neighborhood ? errors.neighborhood?.message : "Bairro"}
              </span>
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </div>
            <div>
              <span className="text-error">
                {errors.state ? errors.state?.message : "Estado"}
              </span>
              <input type="text" placeholder="Estado" {...register("state")} />
            </div>
            <div>
              <span className="text-error">
                {errors.city ? errors.city?.message : "Cidade"}
              </span>
              <input type="text" placeholder="Cidade" {...register("city")} />
            </div>
          </div>
        </FormSection>
        <button type="submit">Registrar</button>
      </FormContainer>
      <button onClick={() => navigate("/")}>Cancelar</button>
    </Container>
  );
};

export default FormRegister;
