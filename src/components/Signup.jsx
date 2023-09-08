import React from 'react'
import { Heading,Input,Container,VStack,HStack,Button,Text,Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Avatar } from '@chakra-ui/react'
const Signup = () => {
  return (
    <Container maxW={'container.xl'}
        h={'100vh'}
        p={'16'}
    >
        <form>
        <VStack alignItems={'stretch'}
        spacing={'4'}
        w={['full','96']}
        m={'auto'}
        my={'16'}
        >
            <Heading textAlign={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
            
            <Input 
            placeholder={'Name'}
            type={'text'}
            required={true}
            focusBorderColor='purple.500'
            /><Input 
            placeholder={'Email'}
            type={'email'}
            required={true}
            focusBorderColor='purple.500'
            />
            <Input 
            placeholder={'New Password'}
            type={'password'}
            required={true}
            focusBorderColor='purple.500'
            />
            <Input 
            placeholder={'Confirm Password'}
            type={'password'}
            required={true}
            focusBorderColor='purple.500'
            />
            
            <Button colorScheme={'purple'} type={'submit'}>
                Sign Up
            </Button>
            <Text textAlign={'right'}>
                Already Have an Account? {' '}
                <Button variant={'link'} colorScheme={'purple'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>

            </Text>
        
        </VStack>
        </form>
    </Container>
  )
}

export default Signup
