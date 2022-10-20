import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultListProps } from "./DefaultList.types";

export const DefaultList: React.FC<DefaultListProps> = ({ content }) => {
  const [whichOneIsOpen, setWhichOneIsOpen] = useState("");
  const [whichSubitemIsOpen, setWhichSubitemIsOpen] = useState("");
  const [whichNestedSubitemIsOpen, setWhichNestedSubitemIsOpen] = useState("");

  const navigate = useNavigate();

  function handleClick(
    id: string,
    state: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) {
    if (state === id) {
      return setter("");
    }

    return setter(id);
  }

  return (
    <List>
      {content.map((item, itemIdx) => (
        <>
          <ListItemButton
            key={`item-Btn-${itemIdx}`}
            id={`item-Btn-${itemIdx}`}
            className="!py-1"
            onClick={
              item.nested
                ? () =>
                    handleClick(item.title, whichOneIsOpen, setWhichOneIsOpen)
                : () => navigate(item.route)
            }
          >
            <ListItemText
              key={`item-text-${itemIdx}`}
              id={`item-text-${itemIdx}`}
              primary={item.title}
              disableTypography
            />
            {item.nested ? (
              whichOneIsOpen === item.title ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>
          {item.nested ? (
            <Collapse
              in={whichOneIsOpen === item.title}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.nested.map((subitem, subitemIdx) => (
                  <>
                    <ListItemButton
                      key={`subitem-Btn-${subitemIdx}`}
                      id={`subitem-Btn-${subitemIdx}`}
                      className="!py-1"
                      onClick={
                        subitem.nested
                          ? () =>
                              handleClick(
                                subitem.title,
                                whichSubitemIsOpen,
                                setWhichSubitemIsOpen
                              )
                          : () => navigate(subitem.route)
                      }
                      sx={{ pl: 4 }}
                    >
                      <ListItemText
                        key={`item-text-${subitemIdx}`}
                        id={`item-text-${subitemIdx}`}
                        primary={subitem.title}
                        disableTypography
                      />
                      {subitem.nested ? (
                        whichSubitemIsOpen === subitem.title ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}
                    </ListItemButton>
                    <Collapse
                      in={whichSubitemIsOpen === subitem.title}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {subitem?.nested?.map(
                          (nestedSubitem, nestedSubitemIdx) => (
                            <ListItemButton
                              key={`nestedSubitem-Btn-${nestedSubitemIdx}`}
                              id={`nestedSubitem-Btn-${nestedSubitemIdx}`}
                              className="!py-1"
                              onClick={
                                nestedSubitem.nested
                                  ? () =>
                                      handleClick(
                                        nestedSubitem.title,
                                        whichNestedSubitemIsOpen,
                                        setWhichNestedSubitemIsOpen
                                      )
                                  : () => navigate(nestedSubitem.route)
                              }
                              sx={{ pl: 6 }}
                            >
                              <ListItemText
                                key={`item-text-${nestedSubitemIdx}`}
                                id={`item-text-${nestedSubitemIdx}`}
                                primary={nestedSubitem.title}
                                disableTypography
                              />
                              {nestedSubitem.nested ? (
                                whichNestedSubitemIsOpen ===
                                nestedSubitem.title ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )
                              ) : null}
                            </ListItemButton>
                          )
                        )}
                      </List>
                    </Collapse>
                  </>
                ))}
              </List>
            </Collapse>
          ) : null}
        </>
      ))}
    </List>
  );
};
