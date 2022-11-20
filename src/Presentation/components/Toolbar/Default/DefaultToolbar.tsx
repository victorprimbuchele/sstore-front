import { DefaultToolbarProps } from "./DefaultToolbar.types";

export const DefaultToolbar: React.FC<DefaultToolbarProps> = ({
  children,
}: DefaultToolbarProps) => {
  return <div className="max-h-12 w-full drop-shadow-lg">{children}</div>;
};
