import { Center, Heading, VStack,Button,Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup } from '@chakra-ui/react';
import React from 'react'
import { useRouter } from 'next/router';

import {useContext,useEffect,useState} from 'react';
import ProductsContext from '../Functions/ProductsContext';
import ProductItem from '../components/ProductItem/ProductItem'

const ProductCartPage = () => {

    const {productsList,setProductList} = useContext(ProductsContext);
    const router = useRouter()

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const t = computeTotal();
        setTotal(t);
    }, [productsList])

    function computeTotal(){
        let sum = 0;
        productsList.forEach(p => {
            sum+=p.price * p.quantity;
        });

        return sum;
    }

    function validateCart(){
        router.push('/Payment');
    }

    return (
        <VStack >
            <Heading as="h2" marginBottom="50px">votre Panier </Heading>
            <VStack >
                {productsList.map((product)=><ProductItem key={product.id} product={product}/>)}
            </VStack>
            <Stat>
                <StatLabel>Total</StatLabel>
                <StatNumber>{total} €</StatNumber>
            </Stat>
            <Button onClick={validateCart}  colorScheme="teal" variant="solid">valider le panier</Button>
        </VStack>
        
    )
}

export default ProductCartPage
