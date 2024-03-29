import { Collapse, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export interface NeumorphicListMenuProps {
    border?: string,
    font?: string
    handleClick: any, 
    isLastMenu?: boolean,
    label: string,
    open: boolean,
    padding?: string,
    children: React.ReactNode,
    id?: number;
}
    
export const NeumorphicListMenu: React.FC<NeumorphicListMenuProps> = ({ border, children, font, handleClick, isLastMenu, label, open, padding, id }) => {
    return (
        <div id={`sc-neumorphic-list-content-container-${id}`} className={`${!isLastMenu ? border ? border : "border-b-2 border-gray-300" : ""} ${padding ? padding : 'py-4 px-7'}`}>
            <ListItemButton id="sc-neumorphic-list-content-button" onClick={handleClick} className="!p-0 hover:!bg-transparent">
                <span className={font ? font : "font-medium font-body w-full"}>
                    {label}
                </span>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </div>
    )
}