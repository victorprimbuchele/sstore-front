interface UserContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const UserContainer: React.FC<UserContainerProps> = ({
  children,
  className
}: UserContainerProps) => {
  return (
    <div id="sc-container-user" className={`p-10 h-screen ${className}`}>
      {children}
    </div>
  );
};
