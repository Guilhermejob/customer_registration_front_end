import { useEffect, useState, useContext, createContext } from "react";

export const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Bemol:token")) || false
  );

  useEffect(() => {
    const initialToken =
      JSON.parse(localStorage.getItem("@Bemol:token")) || false;

    console.log(token, "PROVIDER TOKEN");
    setToken(initialToken);
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export const useToken = () => useContext(TokenContext);
