import styled from "styled-components";
import bgShortenMobile from '../images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';

const Form = styled.form`
    width:90%;
    margin:0 auto;
    padding:1rem;
    background:url(${bgShortenMobile}) no-repeat;
    background-position:top right;
    background-color:${props=>props.theme.darkViolet};
    border-radius:10px;
    position:relative;
    top:calc(2.5rem + 20px);
    @media (min-width:1450px)
    {
        width:80%;
        display:grid;
        grid-template-columns: 1fr 30%;
        column-gap: 20px;
        background:url(${bgShortenDesktop}) no-repeat;
        background-size: cover;
        background-color:${props=>props.theme.darkViolet};
        top:calc(1rem + 20px);
        clear:both;
    }
`
const Input = styled.input.attrs({type:"text", placeholder:"Shorten a link here..."})`
    width:100%;
    padding:10px 5px;
    border-radius:5px;
    border:0;
    @media (min-width:1450px)
    {
        padding:0 5px;
    }
`
const Submit = styled.input.attrs({type:"submit", value:"Shorten It!"})`
    width:100%;
    padding:10px 0;
    margin-top:1rem;
    background-color:${props=>props.theme.cyan};
    border:0;
    font-size:20px;
    color:white;
    border-radius:5px;
    font-weight:bold;
    @media (min-width:1450px)
    {
        margin-top:0;
    }
`

export default function ShortenerForm()
{
    return(
        <Form>
            <Input/>
            <Submit/>
        </Form>
    )
}