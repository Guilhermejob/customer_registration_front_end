import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  last_name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  cep: yup
    .string()
    .min(8, "Minimo de 8 digitos")
    .max(9, "Maximo de 9 digitos")
    .required("Campo obrigatório"),
  neighborhood: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  complement: yup.string(),
  phone: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Minimo de 6 digitos")
    .required("Campo obrigatório"),
});
