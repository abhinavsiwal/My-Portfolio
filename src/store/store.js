import React,{useState,useEffect} from "react";

const ThemeContext=React.createContext({
    themeValue:"",
    changeTheme:()=>{},
    active:"",
    Active:()=>{},
})

export const ThemeContextProvider=(props)=>{
    const [theme, setTheme] = useState("");
    const [active, setActive] = useState("");

    useEffect(()=>{
        const storedValue=localStorage.getItem('theme');
        const value=parseInt(storedValue);
        setTheme(value);
    },[]);

    useEffect(() => {
        switch(window.location.pathname){
            case "/":
                if(active!==0){
                    setActive(0);
                }
                break;
            case "/about":
                if(active!==1){
                    setActive(1);
                }
                break;
            case "/portfolio":
                if(active!==2){
                    setActive(2);
                }
                break;
            case "/contact":
                if(active!==3){
                    setActive(3);
                }
                break;
            default:
                break;
        }
    }, [active])

    const changeTheme=(value)=>{
        setTheme(value);
        localStorage.setItem('theme',value);
    };
    const changeActiveValue=(value)=>{
        setActive(value);
    }

    const contextValue={
        theme,
        changeTheme,
        active,
        changeActiveValue,
    }
    return(
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;