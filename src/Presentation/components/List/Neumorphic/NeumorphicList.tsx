import { useEffect, useRef, useState } from "react";
import {
  setNeumorphicCssProperties,
} from "../../../../utils/neumorphicUtils";
import { NeumorphicListProps } from "./NeumorphicListProps.types";

export const NeumorphicList: React.FC<NeumorphicListProps> = ({
  blur,
  children,
  color,
  lightingAngle,
  radius,
  size,
  type,
}) => {
  const ref = useRef<HTMLDListElement>(null);
  const [rerender, setRerender] = useState(0);
  const [neumorphicCssProps, setNeumorphicCssProps] = useState(
    setNeumorphicCssProperties(
      blur,
      color,
      radius,
      ref,
      size,
      type,
      lightingAngle
    )
  );

  useEffect(() => {
    if (rerender < 1) {
      setRerender(1);
      setNeumorphicCssProps(
        setNeumorphicCssProperties(
          blur,
          color,
          radius,
          ref,
          size,
          type,
          lightingAngle
        )
      );
    }
  }, [rerender]);

  return (
    <div
      key="sc-neumorphic-list-container"
      id="sc-neumorphic-list-container"
      className="w-full h-max self-center"
    >
      <dl
        ref={ref}
        key="sc-neumorphic-list-dl"
        id="sc-neumorphic-list-dl"
        style={{
          borderRadius: neumorphicCssProps?.borderRadius,
          background: neumorphicCssProps?.background,
          boxShadow: neumorphicCssProps?.boxShadow,
          width: neumorphicCssProps?.width,
          height: neumorphicCssProps?.height,
        }}
      >
        {children}
      </dl>
    </div>
  );
};
