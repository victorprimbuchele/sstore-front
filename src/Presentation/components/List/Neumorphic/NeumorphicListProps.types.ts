import { ColorProps } from "../../../../utils/colorUtils";
import { LightingAngleTypes, NeumorphicTypeProps } from "../../../../utils/neumorphicUtils";

export interface NeumorphicListProps {
    color: string | ColorProps;
    type: NeumorphicTypeProps;
    size: number | string,
    radius: number,
    blur: number | string | null,
    children: React.ReactNode,
    lightingAngle: LightingAngleTypes
}