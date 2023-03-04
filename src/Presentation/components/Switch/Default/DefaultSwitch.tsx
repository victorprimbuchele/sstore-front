import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

interface DefaultSwitchProps {
  style: ISwitchProps;
}

type ISwitchProps = {
  padding: number | string;
  track: ISwitchTrackProps;
  thumb: ISwitchThumb;
};

type ISwitchTrackProps = {
  borderRadius: number | string;
  beforeAndAfter: ISwitchTrackBeforeAndAfter;
  after: ISwitchTrackAfter;
  before: ISwitchTrackBefore;
};

type ISwitchTrackBeforeAndAfter = {
  content: string;
  position: string;
  top: string;
  transform: string;
  width: number | string;
  height: number | string;
};

type ISwitchTrackAfter = {
  backgroundImage: string;
  right: number | string;
};

type ISwitchTrackBefore = {
  backgroundImage: string;
  left: number | string;
};

type ISwitchThumb = {
  boxShadow: string;
  width: number | string;
  height: number | string;
  margin: number | string;
};

export const DefaultSwitch = styled(Switch)(
  ({ style }: DefaultSwitchProps) => ({
    padding: `${style.padding}`,
    "& .MuiSwitch-track": {
      borderRadius: `${style.track.borderRadius}`,
      "&:before, &:after": {
        content: `${style.track.beforeAndAfter.content}`,
        position: `${style.track.beforeAndAfter.position}`,
        top: `${style.track.beforeAndAfter.top}`,
        transform: `${style.track.beforeAndAfter.transform}`,
        width: `${style.track.beforeAndAfter.width}`,
        height: `${style.track.beforeAndAfter.height}`,
      },
      "&:before": {
        backgroundImage: `${style.track.before.backgroundImage}`,
        left: `${style.track.before.left}`,
      },
      "&:after": {
        backgroundImage: `${style.track.after.backgroundImage}`,
        right: `${style.track.after.right}`,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: `${style.thumb.boxShadow}`,
      width: `${style.thumb.width}`,
      height: `${style.thumb.height}`,
      margin: `${style.thumb.margin}`,
    },
  })
);
