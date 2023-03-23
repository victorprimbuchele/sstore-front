import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserController } from "../../../../Controller/User/useUserController";

interface ButtonLogoffProps {
  style?: string;
}

export const ButtonLogoff: React.FC<ButtonLogoffProps> = ({ style }) => {
  const { logoutUser } = useUserController();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await logoutUser();

      navigate("/");

      toast.success("Deslogado com sucesso!");
    } catch (error) {
      toast.error("Não foi possível sair da conta");
    }
  };

  return (
    <button onClick={handleClick} className={style ? style : ""}>
      Fazer logoff
    </button>
  );
};
