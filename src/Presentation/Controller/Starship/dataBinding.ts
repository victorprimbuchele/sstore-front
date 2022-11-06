import { Starship } from "../../../Data/Starship/StarshipModel";

export function starshipBinder(starship: Starship) {
    return {
      brand: starship.manufacturer,
      model: starship.model,
      name: starship.name,
      price: starship.cost_in_credits,
      qty: null,
      description: {
        cardDescription: `
        A nave ${starship.model} possui:
        
        - Velocidade máxima: ${starship.mglt} megalight${
          Number(starship?.mglt) > 1 ? "s" : ""
        } por hora

        - Capacidade de até: ${starship.passengers} passageiros
        
        - Capacidade de carga: ${starship.cargo_capacity} toneladas
        `,
        fullDescription: `
        A nave ${starship.model} possui:
        - Velocidade máxima: ${starship.mglt} megalight${
          Number(starship?.mglt) > 1 ? "s" : ""
        } por hora
        - Capacidade de até: ${starship.passengers} passageiros
        - Capacidade de carga: ${starship.cargo_capacity} toneladas
        `,
        minimunDescription: `
        A nave ${starship.model} possui:
        - Velocidade máxima: ${starship.mglt} megalight${
          Number(starship?.mglt) > 1 ? "s" : ""
        } por hora
        - Capacidade de até: ${starship.passengers} passageiros
        - Capacidade de carga: ${starship.cargo_capacity} toneladas
        `,
      },
    };
  }