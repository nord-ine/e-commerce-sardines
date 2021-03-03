import React from 'react'
import { Flex, Heading,Text ,Image,Box, HStack, Button, Container, Center , 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper} from "@chakra-ui/react"

    import {BiShoppingBag} from 'react-icons/bi'


const ProductCard = ({product}) => {
    //console.log(product) ../produit1.png
    return (
       <Flex direction="row" w="80%" h="20%" borderWidth="2px" borderRadius="lg"  overflow="hidden" boxShadow="sm" _hover={{
        transition: "all 0.10s ease-out",
        boxShadow:" 0px 4px 8px rgba(38, 38, 38, 0.2)",
        borderWidth:"3px",
        borderColor:"cyan.100"
       }}>
        <Container maxW="sm" maxH="sm" centerContent>
        <Image src={product.image.url} alt={product.image.alt}  boxSize="90%" objectFit="contain" p="10px"/>
        </Container>
        <Flex  direction="column" alignItems="right" w="80%" p="10px">
            <Heading as="h3" size="md" color="green.600" my="10px">{product.name}</Heading>
            <Text fontSize="sm">{product.description}</Text>
            <Text fontSize="md" my="10px"> Lot de {product.numberOfBoxes} boite ({product.pricePerKg}€/Kg) </Text>
            <HStack spacing="20px" py="20px">
                <Text fontSize="md"> <b>Prix</b>: {product.price} €  </Text>
                <NumberInput defaultValue={1} min={1} max={10} size='sm' MaxW="20%">
                    <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Button leftIcon={<BiShoppingBag />} colorScheme="gray" variant="solid">
                     Ajouter au Panier
                 </Button>
            </HStack>
        </Flex>
       </Flex>
    )
}

export default ProductCard
