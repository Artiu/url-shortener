import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Button } from "./Home";

const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    padding:1rem;
`
const Hamburger = styled.button`
    background:transparent;
    width:30px;
    border:0;
    border-top:4px ${props=>props.theme.darkBlue} solid;
    position:relative;
    transition:transform 0.5s linear;  
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
        transition:transform 0.5s linear;  
    }
    :focus{
        border:0;
        transform:rotate(45deg) translate(-12%,25%);
        ::after{
            transform:rotate(-90deg) translate(-6px);
        }
    }
`
const SignUp = styled(Button)`
    width:90%;
    padding:20px 0;
    margin:0;
    margin-bottom:40px;
`
const MobileNav = styled.div`
    background-color:${props=>props.theme.darkViolet};
    position:absolute;
    top:80px;
    width:90%;
    text-align:center;
`
const Link = styled.p`
    color:white;
    font-size:20px;
    margin:20px 0;
`
const StyledHr = styled.hr`
    width:90%;
    margin:auto;
`
export default function Navbar()
{
    const [visible,setVisible] = useState(false);
    return(
        <Nav>
            <img src={logo} alt="logo"/>
            <Hamburger onClick={()=>{setVisible(!visible)}}/>
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