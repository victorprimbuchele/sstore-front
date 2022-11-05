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
    <List key={`sc-key-list-container`} id={`sc-id-list-container`}>
      {content.map((item, itemIdx) => (
        <>
          <ListItemButton
            key={`sc-key-item-Btn-${itemIdx}`}
            id={`sc-id-item-Btn-${itemIdx}`}
            className="!py-1"
            onClick={
              item.nested
                ? () =>
                    handleClick(item.title, whichOneIsOpen, setWhichOneIsOpen)
                : () => navigate(item.route)
            }
          >
            <ListItemText
              key={`sc-key-item-text-${itemIdx}`}
              id={`sc-id-item-text-${itemIdx}`}
              primary={item.title}
              disableTypography
            />
            {item.nested ? (
              whichOneIsOpen === item.title ? (
                <ExpandLess
                  key={`sc-key-item-icon-show-${itemIdx}`}
                  id={`sc-id-item-icon-show-${itemIdx}`}
                />
              ) : (
                <ExpandMore
                  key={`sc-key-item-icon-hide-${itemIdx}`}
                  id={`sc-id-item-icon-hide-${itemIdx}`}
                />
              )
            ) : null}
          </ListItemButton>
          {item.nested ? (
            <Collapse
              in={whichOneIsOpen === item.title}
              timeout="auto"
              unmountOnExit
              key={`sc-key-item-collapse-${itemIdx}`}
              id={`sc-id-item-collapse-${itemIdx}`}
            >
              <List
                component="div"
                disablePadding
                key={`sc-key-subitem-list-container`}
                id={`sc-id-subitem-list-container`}
              >
                {item.nested.map((subitem, subitemIdx) => (
                  <>
                    <ListItemButton
                      key={`sc-key-subitem-Btn-${subitemIdx}`}
                      id={`sc-id-subitem-Btn-${subitemIdx}`}
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
                        key={`sc-key-subitem-text-${subitemIdx}`}
                        id={`sc-id-subitem-text-${subitemIdx}`}
                        primary={subitem.title}
                        disableTypography
                      />
                      {subitem.nested ? (
                        whichSubitemIsOpen === subitem.title ? (
                          <ExpandLess
                            key={`sc-key-subitem-icon-show-${itemIdx}`}
                            id={`sc-id-subitem-icon-show-${itemIdx}`}
                          />
                        ) : (
                          <ExpandMore
                            key={`sc-key-subitem-icon-hide-${itemIdx}`}
                            id={`sc-id-subitem-icon-hide-${itemIdx}`}
                          />
                        )
                      ) : null}
                    </ListItemButton>
                    <Collapse
                      in={whichSubitemIsOpen === subitem.title}
                      timeout="auto"
                      unmountOnExit
                      key={`sc-key-subitem-collapse-${itemIdx}`}
                      id={`sc-id-subitem-collapse-${itemIdx}`}
                    >
                      <List
                        component="div"
                        disablePadding
                        key={`sc-key-nestedSubitem-list-container`}
                        id={`sc-id-nestedSubitem-list-container`}
                      >
                        {subitem?.nested?.map(
                          (nestedSubitem, nestedSubitemIdx) => (
                            <ListItemButton
                              key={`sc-key-nestedSubitem-Btn-${nestedSubitemIdx}`}
                              id={`sc-id-nestedSubitem-Btn-${nestedSubitemIdx}`}
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
                                key={`sc-key-nestedSubitem-text-${nestedSubitemIdx}`}
                                id={`sc-id-nestedSubitem-text-${nestedSubitemIdx}`}
                                primary={nestedSubitem.title}
                                disableTypography
                              />
                              {nestedSubitem.nested ? (
                                whichNestedSubitemIsOpen ===
                                nestedSubitem.title ? (
                                  <ExpandLess
                                    key={`sc-key-nestedsubitem-icon-show-${itemIdx}`}
                                    id={`sc-id-nestedsubitem-icon-show-${itemIdx}`}
                                  />
                                ) : (
                                  <ExpandMore
                                    key={`sc-key-nestedsubitem-icon-hide-${itemIdx}`}
                                    id={`sc-id-nestedsubitem-icon-hide-${itemIdx}`}
                                  />
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
