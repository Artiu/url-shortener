import styled from "styled-components";
import logo from "../images/logo.svg";

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
export default function Navbar()
{
    return(
        <Nav>
            <img src={logo} alt="logo"/>
            <Hamburger/>
        </Nav>
    )
}