import { Theme } from "@/contexts/ThemeEnum";

import pencil from "@/assets/pencil.png";
import pencilBlack from "@/assets/pencil_black.png";
import pencilEmptyWhite from "@/assets/pencil_white.png";
import pill from "@/assets/pill.png";
import pillBlack from "@/assets/pill_black.png";
import pillEmptyWhite from "@/assets/pill_white.png";
import heart from "@/assets/heartred.png";
import heartBlack from "@/assets/heartblack.png";
import heartEmptyWhite from "@/assets/heartwhite.png";

interface imageByThemeType {
    color: {
        pill: string;
        pencil: string;
        heart: string;
    };
    light: {
        pill: string;
        pencil: string;
        heart: string;
    };
    dark: {
        pill: string;
        pencil: string;
        heart: string;
    };
}

export type imageType = "pill" | "pencil" | "heart";

const getPNGIconPath = (imageName: imageType, theme?: Theme) => {
    const imageByTheme: imageByThemeType = {
        color: {
            pill,
            pencil,
            heart
        },
        light: {
            pill: pillBlack,
            pencil: pencilBlack,
            heart: heartBlack
        },
        dark: {
            pill: pillEmptyWhite,
            pencil: pencilEmptyWhite,
            heart: heartEmptyWhite
        }
    };
    if (theme) {
        return imageByTheme[theme][imageName];
    } else {
        return imageByTheme.color[imageName];
    }
};

export default getPNGIconPath;
