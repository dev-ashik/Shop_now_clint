import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;

    ${tablet({
        padding: "10px"
    })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-witht: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({
        display: "none"
    })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3 3 30rem;
`
const Product = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 7px 0;
`
const ProductDetail = styled.div`
    flex: 3;    
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 150px;
`
const Details = styled.div`
    flex: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    // margin: 0 auto;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${tablet({
        margin: "5px 15px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${tablet({
        marginBottom: "20px"
    })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`

const Summary = styled.div`
    flex: 1 1 20rem;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 20rem
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR GAB</Title>
                <Top>
                    <TopButton>CONTINURE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Gab(2)</TopText>
                        <TopText>Your wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 65481634565</ProductId>
                                    <ProductColor color="blue"></ProductColor>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>ID:</b> 65481634565</ProductId>
                                    <ProductColor color="black"></ProductColor>
                                    <ProductSize><b>Size:</b> m</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>ID:</b> 65481634565</ProductId>
                                    <ProductColor color="black"></ProductColor>
                                    <ProductSize><b>Size:</b> m</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;