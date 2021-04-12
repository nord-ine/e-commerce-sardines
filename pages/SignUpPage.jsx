import { Center,VStack,Heading,Text,Input, FormControl,Button,
    FormLabel,
    FormErrorMessage,
    HStack,} from "@chakra-ui/react"

import {FiLogIn} from 'react-icons/fi'
import React from 'react'
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';

const SIGN_UP = gql`
mutation (
    $email:String!,
    $password:String!
  ) {
    accountRegister(
      input: { email: $email, password: $password }
    ) {
      accountErrors {
        field
        code
      }
      user {
        email
        isActive
      }
    }
  }`;

const SignUpPage = () => {
    const { handleSubmit, errors, register, formState,watch } = useForm();

    const [signUp] = useMutation(SIGN_UP,
        {ignoreResults:false,
        onCompleted:(data)=>checkMutation(data)
    });

    function submit(Submiteddata){
        console.log(Submiteddata)
        signUp({ variables:{
            email: Submiteddata.email,
            password: Submiteddata.password 
        }})  
    }
    function checkMutation(returnedData){
        console.log(returnedData.accountRegister)
        
        if(returnedData.accountRegister.user!=null){
            
        }
        else if(returnedData.accountRegister.user==null){
            
        }
    }

 
    function validatePassword(value){
        //make the validation of the password a bit stricter (include number and a capital letter)
        //console.log(errors.password)
        if (value.length<8) return "entrez un mot de passe de plus de 8 charactères"
        else if  (value!==watch('confirmPassword')) return "rentrez deux mot de passe identique"
        else return true; 
    }
    
    return (
        <Center>
         <VStack direction="column" align="center" spacing="4px" w="50%" p="5px" m="5px" borderWidth="2px" borderRadius="lg"  overflow="hidden" boxShadow="sm" _hover={{
        transition: "all 0.10s ease-out",
        boxShadow:" 0px 4px 8px rgba(38, 38, 38, 0.2)",
        borderWidth:"3px",
        borderColor:"cyan.100"
       }}>
            <Heading as="h3" fontSize="md" my="4px"> Créer un Compte</Heading>
            <Text mb="6px">Information personnelles</Text>
            <HStack>
            </HStack>
            <form align="center" onSubmit={handleSubmit(submit)}>
            <FormControl id="email" isInvalid={errors.email} isRequired>
                <FormLabel>addresse mail</FormLabel>
                <Input type="email" name="email" placeholder="votre e-mail" ref={register({ required: true })}/>
                <FormErrorMessage>
                   {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password} isRequired >
                <FormLabel>mot de passe</FormLabel>
                <Input type="password" name="password"  placeholder="votre password" ref={register({ required: true ,validate:validatePassword})}/>
                <FormErrorMessage>
              {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl id="Confirm-password"  isRequired >
                <FormLabel> confirmez votre mot de passe</FormLabel>
                <Input type="password" name="confirmPassword"  placeholder="votre password" ref={register({ required: true,validate:validatePassword })}/>
            </FormControl>
            <Button type="submit" isLoading={formState.isSubmitting} leftIcon={<FiLogIn />} colorScheme="gray" variant="solid" size="md" mt="7px">
                     Submit
            </Button>
            </form>
          </VStack>
        </Center>
    )
}

export default SignUpPage
