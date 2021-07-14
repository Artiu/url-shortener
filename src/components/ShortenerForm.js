import styled from "styled-components";
import bgShortenMobile from '../images/bg-shorten-mobile.svg'

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
`
const Input = styled.input.attrs({type:"text", placeholder:"Shorten a link here..."})`
    width:100%;
    padding:10px 5px;
    border-radius:5px;
    border:0;
`
const Submit = styled.input.attrs({type:"submit", value:"Shorten It!"})`
    width:100%;
    padding:10px 0;
    margin-top:1rem;
    background-color:${props=>props.theme.cyan};
    border:0;
    color:white;
    border-radius:5px;
    font-weight:bold;
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