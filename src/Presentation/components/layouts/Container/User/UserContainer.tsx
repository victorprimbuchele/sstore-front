interface UserContainerProps {
  children: React.ReactNode;
}

export const UserContainer: React.FC<UserContainerProps> = ({
  children,
}: UserContainerProps) => {
  return (
    <div id="sc-container-user" className="p-10 h-screen">
      {children}
    </div>
  );
};
