import { Center, Heading, HStack,Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    VStack,Tag,TagLabel,Button, Text} from '@chakra-ui/react'
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {useContext,useEffect} from 'react';
import ProductsContext from '../../Functions/ProductsContext';

const ProductItem = ({product}) => {

    const {productsList,setProductsList} = useContext(ProductsContext);

    function ondeleteButtonClick(){
        const newProductList = productsList.filter(p=>p.id!=product.id)
        setProductsList(newProductList);
    }

    function changeQuantity(value){
        console.log(value);
        const newProductList = productsList.filter(p=>p.id!=product.id)
        setProductsList([{...product,quantity:value},...newProductList])
        //setProductsList(newProductList);
    }
    return (
        <VStack marginBottom="30px" color="green.600">
            <Text as="h5">{product.name}</Text>
            <HStack>
                <Image src={product.image.url} alt={product.image.alt}  boxSize="30%" objectFit="contain" p="10px"/>
                <NumberInput
                 defaultValue={1}
                 min={1} max={10} 
                 size='sm'
                 MaxW="20%" 
                 value={product.quantity}
                 onChange={(value)=>changeQuantity(value)}
                 >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Tag size="lg" variant="subtle" colorScheme="teal">
                    <TagLabel>{product.quantity} × {product.price}$</TagLabel>
                </Tag>
                <Button onClick={ondeleteButtonClick} leftIcon={<AiFillDelete />} colorScheme="teal" variant="solid">supprimer</Button>
            </HStack>
        </VStack>
 
    )
}

export default ProductItem
