const { default: next } = require("next");
import React from 'react'
import { useQuery, gql } from '@apollo/client';


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
                image:product.node.thumbnail
            }
        }
        
);
     //JSON.parse(product.node.descriptionJson).blocks.text
    //console.log(data.products.edges)
    //console.log(productObjects)

    //console.log(JSON.parse( productObjects[0].description).blocks[0].text)
    //productObjects.map(o=><div key={o.id}> {JSON.parse()  }</div>)
    console.log(data)
    console.log(productObjects)
    return (
        <div>
            
            
   
        </div>
    )
}

export default Products
