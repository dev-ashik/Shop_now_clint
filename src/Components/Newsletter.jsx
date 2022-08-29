import React from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 14vmin;
    margin-bottom: 20px
`
const Desc = styled.div`
    font-size: 24px;
    font-width: 300;
    margin-bottom: 20px;

    ${tablet({
        textAlign: "center"
    })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border 1px solid lightgray;

    ${tablet({
        width: "80%"
    })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <SendOutlinedIcon/>
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;