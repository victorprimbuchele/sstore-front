import { Link } from "react-router-dom";
import { FullPageContainerContentCenter } from "../../components/layouts/Container/FullPage/ContentCenter/FullPageContainerContentCenter";

export const Unauthenticated: React.FC = () => (
  <FullPageContainerContentCenter>
    <h1 className="font-bold text-5xl">Esta parece uma área restrita...</h1>

    <h2 className="font-medium text-xl my-3">
      Você deve estar autenticado para acessar esta página.
    </h2>

    <Link className="mt-4 hover:underline" to="/usuario/login">
      Ir para o login
    </Link>
  </FullPageContainerContentCenter>
);
