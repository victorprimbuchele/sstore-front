import {
  List,
  ListItemIcon,
} from "@mui/material";

export interface NeumorphicListMenuContent {
  children?: React.ReactNode;
  id?: number;
}

export const NeumorphicListMenuContent: React.FC<NeumorphicListMenuContent> = ({
  children,
  id,
}: NeumorphicListMenuContent) => (
  <List component="div" disablePadding>
    <div className="!px-0" id={`sc-neumorphic-list-menu-content-container-${id}`}>
      <ListItemIcon className="!w-full">{children}</ListItemIcon>
    </div>
  </List>
);
