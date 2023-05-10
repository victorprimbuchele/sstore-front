import { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { RecoverPasswordRequest } from "../../../../Domain/Model/User/RecoverPassword";
import { PrimaryButton } from "../../../components/Button/Primary/PrimaryButton";

interface ActivateAccountFormProps {
  handleSubmitForm: (data: RecoverPasswordRequest) => Promise<void>;
}

export const RecoveryCodePasswordForm: React.FC<ActivateAccountFormProps> = ({
  handleSubmitForm,
}) => {
  const [errors, setErrors] = useState({
    code: {
      message: "",
    },
    newPassword: {
      message: "",
    },
    confirmPassword: {
      message: "",
    },
  });
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (
    e: any,
    callback: (data: RecoverPasswordRequest) => Promise<void>
  ) => {
    e.preventDefault();

    setSubmitted(true);

    if (
      !errors.code.message &&
      code.length > 0 &&
      newPassword.length > 0 &&
      confirmNewPassword.length > 0 &&
      newPassword === confirmNewPassword
    ) {
      callback({
        code,
        password: newPassword,
      });
    }
  };

  useEffect(() => {
    if (submitted) {
      if (code.length < 6) {
        setErrors((prevState) => {
          return {
            ...prevState,
            code: { message: "É necessário preencher todos os campos." },
          };
        });
      } else {
        setErrors((prevState) => {
          return {
            ...prevState,
            code: { message: "" },
          };
        });
      }

      if (newPassword.length < 9) {
        setErrors((prevState) => {
          return {
            ...prevState,
            newPassword: {
              message: "A nova senha deve ter pelo menos 9 caracteres.",
            },
          };
        });
      } else {
        setErrors((prevState) => {
          return {
            ...prevState,
            newPassword: { message: "" },
          };
        });
      }

      if (
        !newPassword.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/
        )
      ) {
        setErrors((prevState) => {
          return {
            ...prevState,
            newPassword: {
              message:
                "Além de letras, a senha deve ter ao menos um caractere especial e um número",
            },
          };
        });
      }

      if (confirmNewPassword !== newPassword) {
        setErrors((prevState) => {
          return {
            ...prevState,
            confirmNewPassword: {
              message: "As senhas não coincidem.",
            },
          };
        });
      } else {
        setErrors((prevState) => {
          return {
            ...prevState,
            confirmNewPassword: { message: "" },
          };
        });
      }
    }
  }, [code, submitted, newPassword, confirmNewPassword]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, handleSubmitForm)}
      className="flex flex-col justify-center items-center w-full sm:w-9/12 md:w-7/12 lg:w-5/12 2xl:w-4/12 mx-auto"
    >
      <div className="flex flex-col justify-center items-center">
        <span className="font-body text-sm sm:text-base font-medium pb-2 text-left">
          Código de ativação
        </span>
        <ReactCodeInput
          isValid={errors.code.message === ""}
          onChange={(e) => setCode(e)}
          value={code}
          name="code"
          autoFocus={true}
          type="number"
          fields={6}
          inputMode="numeric"
          inputStyle={{
            fontFamily: "Montserrat",
            margin: "4px",
            MozAppearance: "textfield",
            width: "35px",
            borderRadius: "3px",
            fontSize: "18px",
            height: "40px",
            textAlign: "center",
            backgroundColor: "white",
            color: "#686868",
            border: "1px solid #D4D4D4",
          }}
          inputStyleInvalid={{
            fontFamily: "Montserrat",
            margin: "4px",
            MozAppearance: "textfield",
            width: "35px",
            borderRadius: "3px",
            fontSize: "18px",
            height: "40px",
            textAlign: "center",
            backgroundColor: "white",
            color: "red",
            border: "1px solid red",
          }}
        />
        <span className="w-full mt-0.5 text-xs text-red-600 text-left">
          {errors.code.message ? errors.code.message : ""}
        </span>
      </div>
      <div
        className="flex flex-col justify-center items-center pt-4 w-full sm:w-10/12 md:w-8/12 xl:w-6/12 2xl:w-5/12"
        id="sc-rc-new-pass-input-container"
      >
        <span
          className="font-body text-sm sm:text-base font-medium pb-2"
          id="sc-rc-new-pass-label"
        >
          Nova senha
        </span>
        <input
          id="sc-rc-new-pass-input"
          className={
            errors.newPassword.message
              ? "border border-red-500 text-red-500 p-2 w-full rounded"
              : "border border-gray-400 p-2 w-full rounded"
          }
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
          <span
            className="w-full mt-0.5 text-xs text-red-600 text-left word-break"
            id="sc-rc-new-pass-error"
          >
            {errors.newPassword.message}
          </span>
      </div>

      <div
        className="flex flex-col justify-center items-center pt-4 w-full sm:w-10/12 md:w-8/12 xl:w-6/12 2xl:w-5/12"
        id="sc-rc-confirm-pass-input-container"
      >
        <span
          className="font-body text-sm sm:text-base font-medium pb-2"
          id="sc-rc-confirm-pass-label"
        >
          Confirmar nova senha
        </span>
        <input
          id="sc-rc-confirm-pass-input"
          className={
            errors.confirmPassword.message
              ? "border border-red-500 text-red-500 p-2 w-full rounded"
              : "border border-gray-400 p-2 w-full rounded"
          }
          type="password"
          name="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
          <span
            className="w-full mt-0.5 text-xs text-red-600 text-left word-break"
            id="sc-rc-confirm-pass-error"
          >
            {errors.confirmPassword.message}
          </span>
      </div>

      <div className="pt-16 w-full sm:w-11/12 md:w-10/12">
        <PrimaryButton buttonName="Confirmar" />
      </div>
    </form>
  );
};
