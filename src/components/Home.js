import styled from "styled-components"
import working from '../images/illustration-working.svg';
import LinksList from "./LinksList";
import ShortenerForm from "./ShortenerForm";
import bgBoost from '../images/bg-boost-mobile.svg';
import iconBrand from '../images/icon-brand-recognition.svg';
import iconDetailed from '../images/icon-detailed-records.svg';
import iconFully from '../images/icon-fully-customizable.svg';

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
    padding:0 5%;
    line-height:1.2;
    margin-top:5%;
`
const Text = styled.p`
    color:${props=>props.theme.grayishViolet};
    padding:1rem 5%;
`
export const Button = styled.button`
    background-color:${props=>props.theme.cyan};
    border:0;
    border-radius:30px;
    padding:15px 60px;
    font-size:20px;
    color:white;
    font-weight:bold;
    margin-top:10px;
`
const WhiteText = styled(Header)`
    color:white;
`
const AdvancedStatistics = styled.div`
    background-color:#f0f1f6;
    padding-top:calc(5.5rem + 20px);
`
const Statistic = styled.div`
    background-color:white;
    width:90%;
    margin: 0 auto;
    margin-top:100px;
    border-radius:10px;
    z-index:2;
`
const BottomContainer = styled.div`
    background:url(${bgBoost}) repeat-y;
    background-color:${props=>props.theme.darkViolet};
    padding: 3rem 0;
`
const SmallImage = styled.img`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
`
const SmallImageContainer = styled.div`
    position:relative;
    top:-40px;
    margin:auto;
    width:80px;
    height:80px;
    background-color:${props=>props.theme.darkViolet};
    border-radius:100%;
    &.line::before{
        content:'';
        position:absolute;
        top:-60px;
        transform:translateX(-50%);
        width:10px;
        height:60px;
        background-color:${props=>props.theme.cyan};
    }
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
                    <SmallImageContainer>
                        <SmallImage src={iconBrand}/>
                    </SmallImageContainer>
                    <Header>Brand Recognition</Header>
                    <Text>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</Text>
                </Statistic>
                <Statistic>
                    <SmallImageContainer className="line">
                        <SmallImage src={iconDetailed}/>
                    </SmallImageContainer>
                    <Header>Detailed Records</Header>
                    <Text>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Text>
                </Statistic>
                <Statistic>
                    <SmallImageContainer className="line">
                        <SmallImage src={iconFully}/>
                    </SmallImageContainer>
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