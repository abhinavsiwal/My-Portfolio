import React,{useState,useEffect} from "react";

const ThemeContext=React.createContext({
    themeValue:"",
    changeTheme:()=>{},
})

export const ThemeContextProvider=(props)=>{
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(0)
    }, [])

    const changeTheme=(value)=>{
        setTheme(value);
    }

    const contextValue={
        theme,
        changeTheme,
    }
    return(
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;