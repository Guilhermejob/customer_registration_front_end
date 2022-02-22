import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api/api";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api
      .get("/customer", {
        headers: { Authorization: `Bearer ${token.access_token}` },
      })
      .then((resp) => {
        setClients([resp.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const token = JSON.parse(localStorage.getItem("@Bemol:token")) || "";

  const registerCostumer = (data) => {
    api
      .post("/customer", data)
      .then((resp) => {
        setClients([...clients, data]);
        console.log(resp);
      })
      .catch((e) => console.log(e));
  };

  const Login = (data) => {
    api.post("/login", data).then((resp) => {
      localStorage.setItem("@Bemol:token", JSON.stringify(resp.data));
    });
  };

  return (
    <ClientsContext.Provider value={{ registerCostumer, Login, clients }}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);
