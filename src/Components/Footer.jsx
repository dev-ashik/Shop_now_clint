import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    padding: 20px;
`
const Logo = styled.h1`
    color: darkblue;
`
const LogoRight = styled.span`
    color: teal;
    font-weight: 500;
`

const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocailIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.bg};
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    min-width: 15rem;

    ${mobile({
        backgroundColor: "#eee"
    })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    
    ${mobile({
        backgroundColor: "lightgray"
    })}
`
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shop<LogoRight>Now</LogoRight></Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis facere voluptatum autem nostrum deleniti possimus facilis placeat perferendis consequatur?</Desc>
                <SocialContainer>
                    <SocailIcon bg="3B5999">
                        <FacebookIcon/>
                    </SocailIcon>
                    <SocailIcon bg="E4405F">
                        <InstagramIcon/>
                    </SocailIcon>
                    <SocailIcon bg="55ACEE">
                        <TwitterIcon/>
                    </SocailIcon>
                    <SocailIcon bg="E60023">
                        <PinterestIcon/>
                    </SocailIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlists</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <PlaceIcon style={{marginRight: "10px"}}/>Kunming, Yunnan, China
                </ContactItem>
                <ContactItem>
                   <LocalPhoneIcon style={{marginRight: "10px"}}/>+0 000 0000
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight: "10px"}}/>ashik.swfu@outlook.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};

export default Footer;