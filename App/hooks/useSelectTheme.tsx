import React, {useContext} from "react";
import {ThemeContext} from "../utils/ThemeManager";
import {Theme} from "../theme/palette";

const useGetTheme = () => {
  const {themeID, setThemeID} = useContext(ThemeContext);
  const getTheme = (themeID: string) => {
    return Theme.themeID;
  };
  const getAppTheme = (themeId: string) => {
    const theme = getTheme(themeId);
    if (theme) {
      return {...theme};
    } else {
      return {...Theme["LIGHT"]};
    }
  };

  return getAppTheme(themeID);
};

export default useGetTheme;
