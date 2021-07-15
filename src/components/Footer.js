import styled from "styled-components";
import logo from '../images/logoWhite.svg';
import fbIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import twitterIcon from '../images/icon-twitter.svg';

const StyledFooter = styled.footer`
    color:white;
    background-color:${props=>props.theme.veryDarkViolet};
    text-align:center;
    @media (min-width:1450px)
    {
        display:grid;
        grid-template-columns:40% 10% 10% 10% 25%;
        text-align:left;
        padding:30px;
    }
`
const Header = styled.p`
    font-weight:bold;
    padding:1rem 0;
    @media (min-width:1450px)
    {
        padding:0;
    }
`
const Text = styled.p`
    color:${props=>props.theme.gray};
    padding:0.2rem 0;
    @media (min-width:1450px)
    {
        padding:0;
    }
`
const SocialIcon = styled.img`
    padding:10px;
`
const Image = styled.img`
    padding:2rem 0;
    @media (min-width:1450px)
    {
        padding:0;
        margin-left:20%;
        margin-top:5px;
    }
`
const SocialIconsContainer = styled.div`
    padding:2rem 0;
    @media (min-width:1450px)
    {
        padding:0;
    }
`
const Container = styled.div``
export default function Footer()
{
    return(
        <StyledFooter>
            <Image src={logo} alt="logo"/>
            <Container>
                <Header>Features</Header>
                <Text>Link Shortening</Text>
                <Text>Branded Links</Text>
                <Text>Analytics</Text>
            </Container>
            <Container>
                <Header>Resources</Header>
                <Text>Blog</Text>
                <Text>Developers</Text>
                <Text>Support</Text>
            </Container>
            <Container>
                <Header>Company</Header>
                <Text>About</Text>
                <Text>Our Team</Text>
                <Text>Careers</Text>
                <Text>Contact</Text>
            </Container>
            <SocialIconsContainer>
                <SocialIcon src={fbIcon}/>
                <SocialIcon src={twitterIcon}/>
                <SocialIcon src={pinterestIcon}/>
                <SocialIcon src={instagramIcon}/>
            </SocialIconsContainer>
        </StyledFooter>
    )
}