import Navbar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { colors } from "../theme";

const GlobalStyle = createGlobalStyle`
    html,body{
        font-family: 'Poppins',sans-serif;
    }
    *
    {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
`

export default function App()
{
    return(
        <div className="app">
            <ThemeProvider theme={colors}>
                <GlobalStyle/>
                <Navbar/>
                <Home/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}