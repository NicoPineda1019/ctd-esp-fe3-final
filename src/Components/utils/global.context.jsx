import { createContext, useCallback, useMemo, useReducer } from "react";
import { themeReducer } from "../../reducers/themeReducer";
export const themes = {
  light: {
    font: 'black',
    background: 'white'
    },
    dark: {
    font: 'white',
    background: 'black'
    }
}
export const initialState = {theme: themes.light}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [ theme, dispatch ] = useReducer(themeReducer, themes.light)
  const handleChangeTheme = useCallback(() => {
  if (theme.font === themes.dark.font) dispatch({ type: "CHANGE_THEME", payload: themes.light })
  if (theme.font === themes.light.font) dispatch({ type: "CHANGE_THEME", payload: themes.dark })
  },[theme,dispatch])
  const providerValue = useMemo(()=>({theme,
  handleChangeTheme}),[theme,handleChangeTheme])
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
