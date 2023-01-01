import { useState } from "react";

export const useDefaultLayoutController = () => {
  const [isOpen, setIsOpen] = useState(false);

  const content = [
    {
      title: "Página inicial",
      route: "/",
      nested: null,
    },
    {
      title: "Acesse sua conta",
      route: "/usuario/login",
      nested: null,
    },
    {
      title: "Naves",
      route: null,
      nested: [
        {
          title: "Iates",
          route: "/produtos/?model=yacht",
        },
        {
          title: "Starfighter",
          route: "/produtos/?model=starfighter",
        },
        {
          title: "Séries espaciais",
          route: null,
          nested: [
            {
              title: "Cruzador espacial",
              route: "/produtos/?model=cruzador-espacial",
              nested: null,
            },
            {
              title: "Transporte espacial",
              route: "/produtos/?model=transporte-espacial",
              nested: null,
            },
          ],
        },
        {
          title: "Cargueiros",
          route: "/produtos/?model=cargueiros",
        },
        {
          title: 'Todas as naves',
          route: "/produtos"
        }
      ],
    },
  ];

  return {
    isOpen,
    setIsOpen,
    content,
  };
};
