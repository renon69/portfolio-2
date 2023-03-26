import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex as='nav' p='10px' alignItems='center' >
        <Heading as='h1'>Renon Task</Heading>
        <Spacer />

        <HStack spacing='20px'>
          <Box bg='gray.200' p='10px'>R</Box>
          <Text>renon@gmail.com</Text>
          <Button colorScheme='green'>Logout</Button>
        </HStack>
    </Flex>
  )
}

export default Navbar