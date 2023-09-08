import React from 'react'
import {Box,Button,Heading,Stack,VStack,HStack,Input,Text} from '@chakra-ui/react';
import { Row } from 'react-bootstrap';
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <>
    <Box bgColor={'blackAlpha.900'} 
    minH={'40'} p="16" color={'white'}

    >
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}
            >
                <Heading  size="md" textTransform={'uppercase'} textAlign={'center'}>
                    Subscribe to  get updates
                </Heading>
                <HStack //borderBottom={'1px solid yellow'}
                
                >
                    <Input 
                    placeholder='Enter Email Here...'
                    color={'dodgerblue'}
                    border={'none'}
                    borderRadius="none"
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    <Button p={"0"}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            
            <VStack w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Video HUB
                </Heading>
                <Text>All Rights Received</Text>

            </VStack>
            <VStack w={'full'}>
                 <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                 </Heading>
                 <Button variant={'link'} colorScheme={'purple'}>
                    <a href="/">YouTube</a>
                 </Button>
                 <Button variant={'link'} colorScheme={'purple'}>
                    <a href="/">Instagram</a>
                 </Button>
                 <Button variant={'link'} colorScheme={'purple'}>
                    <a href="/">GitHub</a>
                 </Button>
            </VStack>




        </Stack>
    </Box>
    
    
    
    
    </>
   
  )
}

export default Footer
