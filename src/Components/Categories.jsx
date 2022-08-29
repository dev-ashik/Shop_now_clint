import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: 20px;
    justify-content: space-between;

    ${mobile({
        padding: "0"
    })}
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))
            }
        </Container>
    );
};

export default Categories;