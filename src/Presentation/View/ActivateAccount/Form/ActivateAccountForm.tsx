import { ActivateAccountRequest } from "../../../../Domain/Model/User/Activate";
import ReactCodeInput from "react-code-input";
import { PrimaryButton } from "../../../components/Button/Primary/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import { UserInput } from "../../../components/Input/User/UserInput";

interface ActivateAccountFormProps {
  handleSubmitForm: (data: ActivateAccountRequest) => Promise<void>;
  userEmail: string;
}

export const ActivateAccountForm: React.FC<ActivateAccountFormProps> = ({
  handleSubmitForm,
  userEmail,
}) => {
  const [errors, setErrors] = useState({
    code: {
      message: "",
    },
    email: {
      message: "",
    },
  });
  const [code, setCode] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [submitted, setSubmitted] = useState(false);
  const rest = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(e.target.value),
    name: "email",
    value: email,
  };

  const handleSubmit = (
    e: any,
    callback: (data: ActivateAccountRequest) => Promise<void>
  ) => {
    e.preventDefault();

    setSubmitted(true);

    if (!errors.code.message && !errors.email.message && code.length > 0) {
      callback({
        code,
        email,
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

      if (!email.includes('@')) {
        setErrors((prevState) => {
          return {
            ...prevState,
            email: { message: "É necessário ser um e-mail válido" },
          };
        });
      } else {
        setErrors((prevState) => {
          return {
            ...prevState,
            email: { message: "" },
          };
        });
      }
    }
  }, [code, submitted, email]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, handleSubmitForm)}
      className="flex flex-col justify-center items-center w-full sm:w-9/12 md:w-7/12 lg:w-5/12 2xl:w-4/12"
    >
      <>
        {userEmail == "" ? (
          <UserInput
            type="email"
            id="sc-input-activate-account-email"
            label="E-mail"
            hasError={errors.email.message !== "" ? true : false}
            maxLength={65}
            errorMessage={errors.email.message}
            {...rest}
          />
        ) : null}
      </>

      <div className="flex flex-col justify-center items-center">
        <span className="font-body text-base font-medium pb-2">
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
        <span className="w-full mt-0.5 text-xs text-red-600 text-left">{errors.code.message ? errors.code.message : ""}</span>
      </div>

      <div className="pt-16 w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
        <PrimaryButton buttonName="Confirmar" />
      </div>
    </form>
  );
};
