import styled from "styled-components";
import bgShortenMobile from '../images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';
import { useState } from "react";

const Form = styled.form`
    width:90%;
    margin:0 auto;
    padding:1rem;
    background:url(${bgShortenMobile}) no-repeat;
    background-position:top right;
    background-color:${props=>props.theme.darkViolet};
    border-radius:10px;
    position:relative;
    top:calc(2.5rem + 32px);
    @media (min-width:1000px)
    {
        width:80%;
        display:grid;
        grid-template-columns: 1fr 20%;
        column-gap: 20px;
        background:url(${bgShortenDesktop}) no-repeat;
        background-position:top center;
        background-size: cover;
        background-color:${props=>props.theme.darkViolet};
        top:56px;
        clear:both;
        padding:2rem;
    }
`
const Input = styled.input.attrs({type:"url", placeholder:"Shorten a link here...", required:"required"})`
    font-size:18px;
    width:100%;
    padding:15px 20px;
    border-radius:5px;
    border:0;
`
const Submit = styled.input.attrs({type:"submit", value:"Shorten It!"})`
    width:100%;
    padding:15px 0;
    margin-top:1rem;
    background-color:${props=>props.theme.cyan};
    border:0;
    font-size:18px;
    color:white;
    border-radius:5px;
    font-weight:bold;
    @media (min-width:1000px)
    {
        margin-top:0;
    }
    :hover
    {
        cursor:pointer;
        background-color:#9be3e2;
    }
`

export default function ShortenerForm(props)
{
    const [linkToShorten, setLinkToShorten] = useState('');
    const formSubmitted = (event) =>
    {
        event.preventDefault();
        fetch("https://api.shrtco.de/v2/shorten?url="+linkToShorten)
        .then((response)=>response.json())
        .then((response)=>{
            props.addShortenedLink({shortened:response.result.full_short_link,previous:response.result.original_link})
        })
        .catch(()=>{
            alert('Submitted link is invalid or servers are down');
        });
        setLinkToShorten('');
    }
    return(
        <Form onSubmit={formSubmitted}>
            <Input value={linkToShorten} onChange={(event)=>setLinkToShorten(event.target.value)}/>
            <Submit/>
        </Form>
    )
}