import React, {useContext,useState} from 'react'
import ProductsContext from '../Functions/ProductsContext';
import { Flex, Heading,Text ,Image,Box, HStack, Button, Container, Center , 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    useToast,
    NumberDecrementStepper} from "@chakra-ui/react";

    import {BiShoppingBag} from 'react-icons/bi'


const ProductCard = ({product}) => {
    //console.log(product) ../produit1.png
    const toast = useToast()
    const [quantity, setquantity] = useState(1)
    const {productsList,setProductsList} = useContext(ProductsContext);

    function addButtonClicked(){
        console.log("addButtonClicked"+product.id);
        setProductsList([...productsList,{...product,quantity:quantity}])
        console.log(productsList)
        toast({
            title: "produit ajouté.",
            description: `le produit ${product.name} a été ajouter à votre list`,
            status: "success",
            duration: 4000,
            isClosable: true,
          })
    }

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
                <NumberInput
                 defaultValue={1}
                 min={1} max={10} 
                 size='sm'
                 MaxW="20%" 
                 value={quantity}
                 onChange={(value)=>setquantity(value)}
                 >
                    <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Button onClick={addButtonClicked} leftIcon={<BiShoppingBag />} colorScheme="gray" variant="solid">
                     Ajouter au Panier
                 </Button>
            </HStack>
        </Flex>
       </Flex>
    )
}

export default ProductCard
