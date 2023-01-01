interface UserButtonProps {
  buttonName: string;
}

export const UserButton: React.FC<UserButtonProps> = ({
  buttonName,
}: UserButtonProps) => {
  return (
    <button
      type="submit"
      className="mb-5 sm:mb-6 block m-auto p-3 sm:p-4 bg-pastel-blue text-white font-body font-semibold text-base sm:text-lg w-8/12 sm:w-6/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 rounded-[21px] mb-5 hover:bg-dark-pastel-blue"
    >
      {buttonName}
    </button>
  );
};
