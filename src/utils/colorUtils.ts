export type ColorProps ="white" | "black" | "grey" | "green" | "blue" | "yellow" | "red" | "pink" | "orange";

export const colorRgbDictionary: { [key: string]: string } = {
    white: "rgb(255,255,255)",
    black: "rgb(33,33,33)",
    grey: "rgb(158,158,158)",
  };
  
  function hexToRgb(hex: string) {
      const result = hex.slice(1, hex.length);
      
      return `rgb(${parseInt(result.slice(0, 2), 16)}, ${parseInt(result.slice(2, 4), 16)}, ${parseInt(result.slice(4, 6), 16)})`;
  }
  
export function setColor(color: ColorProps | string) {
    if (typeof color === "string") {
      const hexRegex = new RegExp("([#][A-Za-z0-9]{6})", "g");
      const rgbRegex = new RegExp("([r][g][b][(][\d]{3}[\s][\d]{3}[\s][\d]{3}[)])", "g");
  
      if (rgbRegex.test(color)) {
          return color;
      }
  
      if (hexRegex.test(color)) {
        return hexToRgb(color);
      } else {
        return null;
      }
    }
  
    return colorRgbDictionary[color as string];
  }
  
export function setLighterAndDarkerColor(color: string) {
      const regex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
  
      const rgb = regex.exec(color);
  
      if (!rgb) {
          return null;
      }
  
      const red = Number(rgb[1]);
      const green = Number(rgb[2]);
      const blue = Number(rgb[3]);
  
  
      let lightRed = Math.round(red * 1.4);
      let lightGreen = Math.round(green * 1.4);  
      let lightBlue = Math.round(blue * 1.4);
  
      if (lightRed > 255) {
        lightRed = 255;
        lightGreen = 255;
        lightBlue = 255;
      }
  
      return {
        lighterColor: `rgb(${lightRed},${lightGreen},${lightBlue})`,
        darkerColor: `rgb(${Math.round(red*0.9)},${Math.round(green*0.9)},${Math.round(blue*0.9)})`,
        darkShadow: `rgb(${Math.round(red*0.8)},${Math.round(green*0.8)},${Math.round(blue*0.8)})`,
        color: `rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)})`
      }
  }
  