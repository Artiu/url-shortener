import styled from "styled-components"
import working from '../images/illustration-working.svg';
import LinksList from "./LinksList";
import ShortenerForm from "./ShortenerForm";
import bgBoost from '../images/bg-boost-mobile.svg';
import iconBrand from '../images/icon-brand-recognition.svg';
import iconDetailed from '../images/icon-detailed-records.svg';
import iconFully from '../images/icon-fully-customizable.svg';
import bgBoostDesktop from '../images/bg-boost-desktop.svg';

const Main = styled.main`
    text-align:center;
    overflow-x:hidden;
`
const InWorkPicture = styled.img`
    max-width:100%;
    position: relative;
    left:5%;
    @media (min-width:1000px)
    {
        max-width:35%;
        float:right;
    }
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
    @media (min-width:1000px)
    {
        padding-left:0;
        padding-right:10%;
    }
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
    @media (min-width:1000px)
    {
        padding:10px 30px;
        font-size:16px;
    }
    :hover
    {
        cursor:pointer;
        background-color:#9be3e2;
    }
`
const WhiteText = styled(Header)`
    color:white;
`
const AdvancedStatistics = styled.div`
    background-color:#f0f1f6;
    padding:calc(5.5rem + 20px) 0;
`
const Statistic = styled.div`
    background-color:white;
    width:90%;
    margin: 0 auto;
    margin-top:100px;
    border-radius:10px;
    position:relative;
    &.line::before{
        content:'';
        position:absolute;
        top:-100px;
        transform:translateX(-50%);
        width:10px;
        height:100px;
        background-color:${props=>props.theme.cyan};
    }
    @media(min-width:1000px)
    {
        display:inline-block;
        width:31%;
        height:300px;
        margin:0 10px;
        &.line::before{
            left:-20px;
            transform:translateY(-50%);
            width:20px;
            height:10px;
        }
        &:nth-child(2)
        {
            top:40px;
            ::before
            {
                top:calc(50% - 40px);
            }
        }
        &:nth-child(3)
        {
            top:80px;
            ::before
            {
                top:calc(50% - 80px);
            }
        }
    }
    @media (min-width:1300px)
    {
        width:25%;
        margin:0 20px;
        &.line::before{
            left:-40px;
            transform:translateY(-50%);
            width:40px;
        }
    }
`
const BottomContainer = styled.div`
    background:url(${bgBoost}) no-repeat;
    background-color:${props=>props.theme.darkViolet};
    background-size:cover;
    background-position:left center;
    padding: 3rem 0;
    @media(min-width:1000px)
    {
        background:url(${bgBoostDesktop}) no-repeat;
        background-color:${props=>props.theme.darkViolet};
        background-size:cover;
        background-position:left center;
    }
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
    @media(min-width:1000px)
    {
        margin-left:2rem;
    }
`
const HeaderContainer = styled.div`
    @media (min-width:1000px)
    {
        float:left;
        text-align:left;
        padding-left:10%;
        width:50%;
    }
`
const StatisticHeader = styled.div`
    @media (min-width:1000px)
    {
        width:30%;
        margin:0 auto;
    }
`
const Statistics = styled.div`
    margin:auto;
    @media(min-width:1000px)
    {
        padding:70px 0;
    }
`
const HeaderText = styled(Text)`
    padding-left:0;
    padding-right:10%;
`
export default function Home()
{
    return(
        <Main>
            <InWorkPicture src={working} alt="employee at work"/>
            <HeaderContainer>
                <BigHeader>More than just shorter links</BigHeader>
                <HeaderText>Build your brand’s recognition and get detailed insights 
                on how your links are performing.</HeaderText>
                <Button>Get Started</Button>
            </HeaderContainer>
            <ShortenerForm/>
            <LinksList/>
            <AdvancedStatistics>
                <StatisticHeader>
                    <Header>Advanced Statistics</Header>
                    <Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
                </StatisticHeader>
                <Statistics>
                    <Statistic>
                        <SmallImageContainer>
                            <SmallImage src={iconBrand}/>
                        </SmallImageContainer>
                        <Header>Brand Recognition</Header>
                        <Text>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</Text>
                    </Statistic>
                    <Statistic className="line">
                        <SmallImageContainer>
                            <SmallImage src={iconDetailed}/>
                        </SmallImageContainer>
                        <Header>Detailed Records</Header>
                        <Text>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Text>
                    </Statistic>
                    <Statistic className="line">
                        <SmallImageContainer>
                            <SmallImage src={iconFully}/>
                        </SmallImageContainer>
                        <Header>Fully Customizable</Header>
                        <Text>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Text>
                    </Statistic>
                </Statistics>
            </AdvancedStatistics>
            <BottomContainer>
                <WhiteText>Boost your links today</WhiteText>
                <Button>Get Started</Button>
            </BottomContainer>
        </Main>
    )
}