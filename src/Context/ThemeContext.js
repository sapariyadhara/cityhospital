import { createContext, useContext, useReducer } from "react";
import { ThemeReducer } from "./reducer/theme.reducer";
import { TOGGELE_THEME } from "./ActionType";

export const ThemeContext = createContext()

const initialState = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    const toogletheme = (theme) => {
        console.log(theme);
        const newTheme = theme === 'light' ? 'dark' : 'light'

        dispatch({ type: TOGGELE_THEME, payload: newTheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toogletheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )


}

