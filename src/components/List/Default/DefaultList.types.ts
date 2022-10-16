export interface DefaultListProps {
  content: typeof defaultListModel;
}

const defaultListModel = [
  {
    title: "Página inicial",
    route: "/",
    nested: null,
  },
  {
    title: "Acesse sua conta",
    route: "/login",
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
    ],
  },
];
