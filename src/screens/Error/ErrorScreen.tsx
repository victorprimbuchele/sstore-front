import { Link } from "react-router-dom";
import { FullPageContainerContentCenter } from "../../layouts/Container/FullPage/ContentCenter/FullPageContainerContentCenter";

export const ErrorScreen: React.FC = () => (
  <FullPageContainerContentCenter>
    <h1 className='font-bold text-5xl'>Oops...</h1>

    <h2 className='font-medium text-xl my-3'>Página não encontrada.</h2>
    
    <Link className='mt-4 hover:underline' to='/'>Ir para a página inicial</Link>
  </FullPageContainerContentCenter>
);
