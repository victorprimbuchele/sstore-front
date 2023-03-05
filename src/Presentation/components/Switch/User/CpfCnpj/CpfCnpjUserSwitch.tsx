import { DefaultSwitch } from "../../Default/DefaultSwitch";

type CpfCnpjUserSwitchProps = {
  onClick: () => void
}

export const CpfCnpjUserSwitch: React.FC<CpfCnpjUserSwitchProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <DefaultSwitch
        style={{
          padding: 8,
          track: {
            borderRadius: 22 / 2,
            beforeAndAfter: {
              content: '""',
              height: 16,
              width: 16,
              top: "50%",
              transform: "translateY(-50%)",
              position: "absolute",
            },
            after: {
              backgroundImage:
                "https://img.freepik.com/free-photo/3d-chinese-new-year-background_52683-101234.jpg?t=st=1673796408~exp=1673797008~hmac=fac63d0b154cd6ecf665091c7bddf2064d16b98649c5b1fdf384f392ae4b023e !important",
              right: 12,
            },
            before: {
              backgroundImage:
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>CNPJ</text></svg>",
              left: 12,
            },
          },
          thumb: {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
        }}
      />
    </div>
  );
};
