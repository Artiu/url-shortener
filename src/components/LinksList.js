import { useContext } from "react";
import styled, {ThemeContext} from "styled-components";

const List = styled.div`
    padding-top:80px;
    background-color:#f0f1f6;
    @media (min-width:1000px)
    {
        padding-top:50px;
    }
`
const LinkContainer = styled.div`
    background-color:white;
    padding:15px 20px;
    border-radius:10px;
    width:90%;
    margin:auto;
    margin-top:20px;
    @media (min-width:1000px)
    {
        width:80%;
        display:grid;
        grid-template-columns:1fr max-content 100px;
        column-gap:20px;
        align-items:center;
    }
`
const LongLink = styled.p`
    width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    border-bottom:1px ${props=>props.theme.gray} solid;
    text-align:left;
    padding:10px 0;
    @media (min-width:1000px)
    {
        border:0;
        padding:0;
    }
`
const ShortLink = styled.p`
    width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    text-align:left;
    color:${props=>props.theme.cyan};
    padding:10px 0;
    @media (min-width:1000px)
    {
        padding:0;
    }
`
const CopyButton = styled.button`
    background-color:${props=>props.theme.cyan};
    border:0;
    border-radius:5px;
    padding:10px 0;
    width:100%;
    font-size:16px;
    color:white;
    font-weight:bold;
    :hover
    {
        cursor:pointer;
        background-color:#9be3e2;
    }
`
export default function LinksList(props)
{
    const colors = useContext(ThemeContext);
    const copyToClipboard = (event,shortenedLink) =>
    {
        navigator.clipboard.writeText(shortenedLink).then(()=>{
            event.target.innerText = 'Copied!';
            event.target.style.background = colors.darkViolet;
        },()=>{
            event.target.innerText = 'Failed!';
            event.target.style.background = "red";
        });
        setTimeout(()=>{
            event.target.innerText = 'Copy';
            event.target.style.background = "";
        },3000);
    }
    return(
        <List>
            {props.shortenedLinks.map(link=>(
            <LinkContainer key={link.shortened}>
                <LongLink>{link.previous}</LongLink>
                <ShortLink>{link.shortened}</ShortLink>
                <CopyButton onClick={(event)=>copyToClipboard(event,link.shortened)}>Copy</CopyButton>
            </LinkContainer>
            ))}
        </List>
    )
}