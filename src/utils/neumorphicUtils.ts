import { setColor, setLighterAndDarkerColor } from "./colorUtils";

export type NeumorphicTypeProps = "flat" | "concave" | "convex" | "pressed";

export type LightingAngleTypes = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export const dictAngleTypesToAngleDegrees = {
    "top-left": "145deg", 
    "top-right": "225deg", 
    "bottom-left": "45deg", 
    "bottom-right": "315deg"
};

export function setNeumorphicCssProperties(
    blur: number | string | null,
    color: string,
    radius: number,
    ref: React.RefObject<HTMLDListElement>,
    size: number | string,
    type: NeumorphicTypeProps,
    lightingAngle: LightingAngleTypes
  ) {
    const rgbColor = setColor(color);
    let colors = null;
  
    if (rgbColor !== null) {
      colors = setLighterAndDarkerColor(rgbColor);
    }
  
    if (colors !== null) {
      if (ref) {
        let shadowOffset;

        const style = {
          borderRadius: radius + "px",
          background: "",
          boxShadow: "",
          width: "",
          height: ""
        };

        if (typeof size === "number") {
            shadowOffset = size / 20 + "px";
  
            if (!blur) {
              blur = size / 10 + "px";
            }

            style['width'] = size + "px";
            style['height'] = size + "px";
        } else {
            size.split(" ").map((className: string) => ref.current?.classList.add(className));

            if (ref.current) {
                size = ref.current.offsetHeight;

                shadowOffset = size / 20 + "px";

                if (!blur) {
                    blur = size / 10 + "px";
                }
            }
        }
  
        if (type === "flat") {
          style['background'] = colors.color;
          style['boxShadow'] = `${shadowOffset} ${shadowOffset} ${blur}px ${colors.darkShadow},-${shadowOffset} -${shadowOffset} ${blur}px ${colors.lighterColor}`;
        };
  
        if (type === "concave") {
          style['background'] = `linear-gradient(${dictAngleTypesToAngleDegrees[lightingAngle]}, ${colors.darkerColor}, ${colors.lighterColor})`;
          style['boxShadow'] = `${shadowOffset} ${shadowOffset} ${blur}px ${colors.darkShadow},-${shadowOffset} -${shadowOffset} ${blur}px ${colors.lighterColor}`;
        };
  
        if (type === "convex") {
          style['background'] = `linear-gradient(${dictAngleTypesToAngleDegrees[lightingAngle]}, ${colors.lighterColor}, ${colors.darkerColor})`;
          style['boxShadow'] = `${shadowOffset} ${shadowOffset} ${blur}px ${colors.darkShadow},-${shadowOffset} -${shadowOffset} ${blur}px ${colors.lighterColor}`;
        };
  
        if (type === "pressed") {
          style['background'] = colors.color;
          style['boxShadow'] = `inset ${shadowOffset} ${shadowOffset} ${blur}px ${colors.lighterColor},inset -${shadowOffset} -${shadowOffset} ${blur}px ${colors.darkerColor}`;
        };
  
        return style;
      }
    }

    return {
        borderRadius: "",
        background: "",
        boxShadow: "",
        width: "",
        height: ""
    }
  }
  