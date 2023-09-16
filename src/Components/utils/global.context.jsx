import { createContext, useCallback, useMemo, useReducer } from "react";
import { themeReducer } from "../../reducers/themeReducer";
import { usersReducer } from "../../reducers/usersReducer";
export const themes = {
  light: { class : 'light'},
  dark: { class : 'dark'}
};
export const initialState = { theme: themes.light, users: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, themes.light);
  const [users, dispatchUsers] = useReducer(usersReducer, []);

  const handleChangeTheme = useCallback(() => {
    if (theme.class === themes.dark.class)
      dispatch({ type: "CHANGE_THEME", payload: themes.light });
    if (theme.class === themes.light.class)
      dispatch({ type: "CHANGE_THEME", payload: themes.dark });
  }, [theme, dispatch]);

  const setUsers = useCallback(
    (data) => {
      dispatchUsers({ type: "SET_USERS", payload: data });
    },
    [dispatchUsers]
  );
  const setFavoriteUsers = useCallback(
    (data) => {
      dispatchUsers({ type: "SET_FAV_USERS", payload: data });
    },
    [dispatchUsers])

  const providerValue = useMemo(
    () => ({ theme, handleChangeTheme, users, setUsers, setFavoriteUsers }),
    [theme, handleChangeTheme, users, setUsers, setFavoriteUsers]
  );
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
