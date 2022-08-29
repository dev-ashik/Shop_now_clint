import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderIteim } from '../data';
import { mobile, tablet } from '../responsive';
import { height, padding } from '@mui/system';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: fles;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);

`

const Slide = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #${props=> props.bg};
    position: relative;
`
const ImgContainer = styled.div`
    flex: 1 1 20rem;
    height: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1 1 20rem;
    padding: 0 4%;

    ${tablet({
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -20%)",

        zIndex: "1000",
        textAlign: "center",
        padding: "0",
        
    })}
`

const Title = styled.h1`
    font-size: 70px;

    ${tablet({
        fontSize: "12vmin",
        color: "white"
    })}
`
const Desc = styled.p`
    margin: 50px 0px; 
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

    ${tablet({
        color: "white",
        padding: "0 2rem"
    })}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    ${tablet({
        color: "white",
        backgroundColor: "teal"
    })}
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                sliderIteim.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    );
};

export default Slider;