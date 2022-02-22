import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres!")
    .required("Campo Obrigatório!"),
});
