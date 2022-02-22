import { ClientsProvider } from "./Clients";
import { TokenProvider } from "./Token";

const Providers = ({ children }) => {
  return (
    <ClientsProvider>
      <TokenProvider>{children}</TokenProvider>
    </ClientsProvider>
  );
};

export default Providers;
