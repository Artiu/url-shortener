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
`
const Header = styled.p`
    font-weight:bold;
    padding:1rem 0;
`
const Text = styled.p`
    color:${props=>props.theme.gray};
    padding:0.2rem 0;
`
const SocialIcon = styled.img`
    padding:10px;
`
const Image = styled.img`
    padding:2rem 0;
`
const SocialIconsContainer = styled.div`
    padding:2rem 0;
`
export default function Footer()
{
    return(
        <StyledFooter>
            <Image src={logo} alt="logo"/>
            <Header>Features</Header>
            <Text>Link Shortening</Text>
            <Text>Branded Links</Text>
            <Text>Analytics</Text>
            <Header>Resources</Header>
            <Text>Blog</Text>
            <Text>Developers</Text>
            <Text>Support</Text>
            <Header>Company</Header>
            <Text>About</Text>
            <Text>Our Team</Text>
            <Text>Careers</Text>
            <Text>Contact</Text>
            <SocialIconsContainer>
                <SocialIcon src={fbIcon}/>
                <SocialIcon src={twitterIcon}/>
                <SocialIcon src={pinterestIcon}/>
                <SocialIcon src={instagramIcon}/>
            </SocialIconsContainer>
        </StyledFooter>
    )
}