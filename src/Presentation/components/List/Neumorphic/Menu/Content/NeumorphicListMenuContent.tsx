import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface NeumorphicListMenuContent {
  children?: React.ReactNode;
}

export const NeumorphicListMenuContent: React.FC<NeumorphicListMenuContent> = ({
  children,
}: NeumorphicListMenuContent) => (
  <List component="div" disablePadding>
    <div className="!px-0">
      <ListItemIcon className="!w-full">{children}</ListItemIcon>
    </div>
  </List>
);
