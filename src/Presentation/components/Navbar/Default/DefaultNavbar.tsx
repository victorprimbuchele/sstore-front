import { DefaultNavbarProps } from "./DefaultNavbar.types";

export const DefaultNavbar: React.FC<DefaultNavbarProps> = ({
  title = "SPACECRAFT",
  menu,
  children,
}) => (
  <div className="h-12 sm:h-14 border-b-1 border-zinc-700">
    <div
      className="h-12 sm:h-14 flex flex-row justify-content-center items-center content-center px-5 "
      id="sc-nav-default-container"
    >
      <div className="basis-1/4 h-fit">
        <h1 className="font-brand font-bold text-sm sm:text-base lg:text-lg">
          {title}
        </h1>
      </div>
      <div className="basis-2/4"></div>
      <div className="basis-1/4 flex justify-end">{menu}</div>
      {children}
    </div>
  </div>
);
