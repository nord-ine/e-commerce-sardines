import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import { Flex, Heading,Text,Input, FormControl,Button,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    VStack, } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { gql, useMutation } from '@apollo/client';
import {useState} from 'react'
import { useRouter } from 'next/router';


const LOGIN = gql`
mutation login(
    $email:String!,
    $password:String!
  ) 
{
    tokenCreate(email: $email, password: $password )
    {
      token
      refreshToken
      csrfToken
      user {
        email
      }
      errors {
        field
        message
      }
    }
}`;


const LoginPage = () => {
  const router = useRouter()
  const { handleSubmit, errors, register, formState,watch } = useForm();
  const [loginError, setloginError] = useState(false);

  const [login] = useMutation(LOGIN,
    {ignoreResults:false,
    onCompleted:(data)=>checkMutation(data)
});

function submit(Submiteddata){
  console.log(Submiteddata);
  login({ variables:{
    email: Submiteddata.email,
    password: Submiteddata.password 
  }});
}

function checkMutation(returnedData){
   //console.log(returnedData.tokenCreate.token)
   if(returnedData.tokenCreate.token==null){
      setloginError(true);
   }
   else{
     setloginError(false);
     const tokenObject = JSON.stringify(returnedData.tokenCreate)
     if (typeof window !== 'undefined') 
     {
      localStorage.setItem("token",tokenObject);

     }
     router.push("/Profile");
   }
}
  
    return (
      <Flex direction="row"  justifyContent="center" >
          <VStack direction="column" align="center" spacing="4px" w="50%" p="5px" m="5px" borderWidth="2px" borderRadius="lg"  overflow="hidden" boxShadow="sm" _hover={{
        transition: "all 0.10s ease-out",
        boxShadow:" 0px 4px 8px rgba(38, 38, 38, 0.2)",
        borderWidth:"3px",
        borderColor:"cyan.100"
       }}>
            <Heading as="h3" fontSize="md" my="4px"> Votre compte a été bien crée</Heading>
            <form align="center" onSubmit={handleSubmit(submit)}>
            {loginError && <Text color="red">L email et le mot de passe n'ont pas été reconnus </Text>}
            <FormControl id="email" isInvalid={errors.email} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" placeholder="votre e-mail" ref={register({ required: true})}/>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>mot de passe</FormLabel>
                <Input type="password" name="password"  placeholder="votre password" ref={register({required: true})}/>
            </FormControl>
            <Button leftIcon={<FiLogIn />} colorScheme="gray" variant="solid" size="md" mt="7px" type="submit" isLoading={formState.isSubmitting}>
                     connectez vous
            </Button>
            </form>
          </VStack>
      </Flex>

 
    )
}

export default LoginPage
