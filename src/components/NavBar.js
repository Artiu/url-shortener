import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Button } from "./Home";

const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    padding:1rem;
    @media(min-width:1450px)
    {
        display:grid;
        grid-template-columns:auto 1fr;
        padding:1rem 3rem;
    }
`
const Hamburger = styled.button`
    background:transparent;
    width:30px;
    border:0;
    border-top:4px ${props=>props.theme.darkBlue} solid;
    position:relative; 
    ::before,::after{
        content:'';
        position: absolute;
        left:0;
        top:0;
        width:100%;
        border-top:4px ${props=>props.theme.darkBlue} solid;
        transform:translateY(6px);
    }
    ::after
    {
        transform:translateY(16px); 
    }
    @media(min-width:1450px)
    {
        display:none;
    }
`
const SignUp = styled(Button)`
    width:90%;
    padding:20px 0;
    margin:0;
    margin-bottom:40px;
    @media(min-width:1450px)
    {
        font-size:16px;
        width:auto;
        margin-bottom:0;
        padding:10px 20px;
    }
`
const MobileNav = styled.div`
    background-color:${props=>props.theme.darkViolet};
    position:absolute;
    top:80px;
    left:5%;
    width:90%;
    text-align:center;
    border-radius:10px;
`
const Link = styled.p`
    color:white;
    font-size:20px;
    margin:20px 0;
    @media(min-width:1450px)
    {
        display:inline-block;
        font-size:16px;
        color:${props=>props.theme.gray};
        margin:0;
        padding:2px 15px;
    }
`
const StyledHr = styled.hr`
    width:90%;
    margin:auto;
`
const Links = styled.div`
    display:none;
    @media(min-width:1450px)
    {
        display:flex;
        justify-content:space-between;
    }
`
export default function Navbar()
{
    const [visible,setVisible] = useState(false);
    return(
        <Nav>
            <img src={logo} alt="logo"/>
            <Hamburger onClick={()=>{setVisible(!visible)}}/>
            <Links>
                <div>
                    <Link>Features</Link>
                    <Link>Pricing</Link>
                    <Link>Resources</Link>
                </div>
                <div>
                    <Link>Login</Link>
                    <SignUp>Sign Up</SignUp>
                </div>
            </Links>
            {visible ? <MobileNav>
                <Link>Features</Link>
                <Link>Pricing</Link>
                <Link>Resources</Link>
                <StyledHr/>
                <Link>Login</Link>
                <SignUp>Sign Up</SignUp>
            </MobileNav>:null}
        </Nav>
    )
}