import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Title = styled.h1`
    margin: 2px;
`
const FilterContainer = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const FilterText = styled.span`
    font-size: 20px;
    font-width: 600;
    margin: 5px 20px 5px 0;
`
const SelectConatiner = styled.div`
    
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

    ${mobile({
        width: "80%",
        marginRight: "0",
        margin: "5px 0"
    })}
`
const Option = styled.option`
    padding: 10px !important;
    margin-bottom: 20px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <SelectConatiner>
                        <Select defaultValue={"white"}>
                            <Option disabled selected>Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select defaultValue={"XS"}>
                            <Option disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </SelectConatiner>
                </Filter>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue={"Price"}>
                        <Option selected>Newset</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;