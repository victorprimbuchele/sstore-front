export interface SimpleToggleButtonProps {
  onClick: () => void | Function | Promise<void>;
  buttonName: string;
  className?: string;
  icon?: React.ReactNode;
  id?: string;
}
