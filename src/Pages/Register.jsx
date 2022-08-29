import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://media.istockphoto.com/photos/cheerful-woman-dancing-over-pink-studio-wall-picture-id1201627266?b=1&k=20&m=1201627266&s=612x612&w=0&h=tFyu4fvwCKUKqTVUcmqlN-wrZq2WNLRzhs_aEupGCMM=");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 30rem;
    background-color: white;
    margin: 2rem;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal date in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;