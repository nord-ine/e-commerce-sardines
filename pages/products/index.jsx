const { default: next } = require("next");
import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ProductCard from '../../components/ProductCard'
import { Flex, HStack, VStack,Text,Button,Center, StackDivider } from "@chakra-ui/react"


const getProductsQuery = gql`
{
    products(first:100){
        edges{
            node{
                id
                name
                descriptionJson
                productType{name}
                category{name}
                weight{value}
                thumbnail{url alt}
                pricing{priceRangeUndiscounted{start{net{amount}}}}
   				metadata{
                     key
                     value
                    }
                 }
   
        }
   }
}
`;


const Products = ()  => {

    function mapQueriedDataToProductObjects(){
        
    }

    const { loading, error, data } = useQuery(getProductsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  

    const productObjects = data.products.edges.map(product=>
        {
            return {
                id: product.node.id,
                name: product.node.name,
                description: JSON.parse(product.node.descriptionJson).blocks[0].text,
                category:product.node.category.name,
                productType:product.node.productType.name,
                price:product.node.pricing.priceRangeUndiscounted.start.net.amount,
                weight:product.node.weight.value,
                image:product.node.thumbnail,
                brand:product.node.metadata[0].value,
                numberOfBoxes:product.node.metadata[1].value,
                pricePerKg: product.node.metadata[2].value,
            }
        }
        
);
    //  JSON.parse(product.node.descriptionJson).blocks.text
    // console.log(data.products.edges)
   // console.log(productObjects)

    // console.log(JSON.parse( productObjects[0].description).blocks[0].text)
    // productObjects.map(o=><div key={o.id}> {JSON.parse()  }</div>)
    // console.log(data)
    // console.log(productObjects)
    return (
        <>
            <HStack bg="white.50" h="100%" divider={<StackDivider borderColor="purple.200"/>}>
                <Center  p={6} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="xs" bg="blue.100" m="40px">
                    <Flex direction="column" alignItems="center">
                        <Text as="h3" fontSize="md" textAlign="center">the filter component goes here</Text>
                         <Button
                          colorScheme="teal" 
                          w="50%"
                          _hover={
                              {
                                  backgroundColor:"blue.200",
                                  color:"red.500"
                              }
                            }
                          >
                             click
                        </Button>
                    </Flex>
                      
                </Center>  
            <VStack spacing="20px">
                {productObjects.map(productObject=><ProductCard key={productObject.id} product={productObject}/>)}
            </VStack>
            </HStack>
           
           
        </>
    )
}

export default Products
