import styled from "styled-components"
import working from '../images/illustration-working.svg';
import LinksList from "./LinksList";
import ShortenerForm from "./ShortenerForm";
import bgBoost from '../images/bg-boost-mobile.svg';

const Main = styled.main`
    text-align:center;
`
const InWorkPicture = styled.img`
    max-width:100%;
`
const Header = styled.p`
    font-size:2rem;
    color:${props=>props.theme.darkBlue};
    font-weight:bold;
`
const BigHeader = styled(Header)`
    font-size:3rem;
`
const Text = styled.p`
    color:${props=>props.theme.grayishViolet};
`
const Button = styled.button`
    background-color:${props=>props.theme.cyan};
    border:0;
    border-radius:20px;
    padding:8px 20px;
    color:white;
    font-weight:bold;
`
const WhiteText = styled.p`
    color:white;
`
const AdvancedStatistics = styled.div`
    background-color:#f0f1f6;
`
const Statistic = styled.div`
    background-color:white;
    width:90%;
    margin: 0 auto;
`
const BottomContainer = styled.div`
    background:url(${bgBoost}) repeat-y;
    background-color:${props=>props.theme.darkViolet};
    padding: 3rem 0;
`
export default function Home()
{
    return(
        <Main>
            <InWorkPicture src={working} alt="employee at work"/>
            <BigHeader>More than just shorter links</BigHeader>
            <Text>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</Text>
            <Button>Get Started</Button>
            <ShortenerForm/>
            <LinksList/>
            <AdvancedStatistics>
                <Header>Advanced Statistics</Header>
                <Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
                <Statistic>
                    <Header>Brand Recognition</Header>
                    <Text>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</Text>
                </Statistic>
                <Statistic>
                    <Header>Detailed Records</Header>
                    <Text>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Text>
                </Statistic>
                <Statistic>
                    <Header>Fully Customizable</Header>
                    <Text>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Text>
                </Statistic>
            </AdvancedStatistics>
            <BottomContainer>
                <WhiteText>Boost your links today</WhiteText>
                <Button>Get Started</Button>
            </BottomContainer>
        </Main>
    )
}