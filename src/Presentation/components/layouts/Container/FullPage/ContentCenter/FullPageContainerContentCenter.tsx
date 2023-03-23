import { FullPageContainerContentCenterProps } from "./FullPageContainerContentCenter.types";

export const FullPageContainerContentCenter: React.FC<FullPageContainerContentCenterProps> = ({children, className}: FullPageContainerContentCenterProps) => (
    <div className={`grid grid-col-1 place-content-center h-full w-full font-body justify-items-center ${className}`}>
        {children}
    </div>
)