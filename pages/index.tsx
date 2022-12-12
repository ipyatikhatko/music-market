import { Flex } from '@chakra-ui/layout'
import { Box, Breadcrumb, Text, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Container, Menu, MenuButton, MenuList, MenuItem, Button, InputGroup, InputRightAddon, Input, InputRightElement, Spacer, Icon, Divider, Wrap, Badge, VStack, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Search2Icon, } from '@chakra-ui/icons'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <Container maxW='container.lg'>
        <Flex py={8} gap={4} my={4} borderRadius={12} height={12}>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Text fontSize='lg'>Logo</Text>
          </Box>
          <Box width='full' display='flex' justifyItems='center' alignItems='center'>          
            <Flex gap={4} justify='space-between' align='center' flex={5}>
              <InputGroup flex={7}>
                <Input borderRadius={20} placeholder='Search offers...' />
                <InputRightElement>
                  <Search2Icon/>
                </InputRightElement>
              </InputGroup>
              <Button flex={1} borderRadius={100} borderWidth={2} variant='secondary' colorScheme='blackAlpha'>
                Sell gear
              </Button>
              <Flex direction='column' align='center' justify='center' flex={1}>
                <Icon fontSize='xl' as={FiHeart}/>
                <Text fontSize='xs'>Watch list</Text>
              </Flex>         
              <Flex direction='column' align='center' justify='center' flex={1}>
                <Icon fontSize='xl' as={FiShoppingCart}/>
                <Text fontSize='xs'>Cart</Text>
              </Flex>
            </Flex>
            <Spacer/>
            <Box flexDir='column' alignItems='center' justifyContent='center'>
              <Text fontSize='xs'>Sign up</Text>
              <Text fontSize='xs'>Log In</Text>
            </Box>   
          </Box>
        </Flex>
      </Container>
      <Divider/>
      <Container maxW='container.lg' pt={5}>
        <Flex>
          <VStack w={300} flex={1} alignItems='flex-start' justifyContent='flex-start'>
            <Text fontSize='2xl'>Guitars:</Text>
                <Wrap>
              {['fender', 'gibson', 'esp', ].map(tag => (
                <Button w={100} p={2} borderRadius={100} height='auto' key={tag}>
                  <Text fontSize='sm'>#{tag}</Text>
                </Button>
              ))}
            </Wrap>
          </VStack>
          <VStack w={300} flex={1} alignItems='flex-start' justifyContent='flex-start'>
            <Text fontSize='2xl'>Basses:</Text>
                <Wrap>
              {['fender', 'gibson', 'esp', 'Warwick'].map(tag => (
                <Button w={100} p={2} borderRadius={100} height='auto' key={tag}>
                  <Text fontSize='sm'>#{tag}</Text>
                </Button>
              ))}
            </Wrap>
          </VStack>
          <VStack w={300} flex={1} alignItems='flex-start' justifyContent='flex-start'>
            <Text fontSize='2xl'>Effects:</Text>
                <Wrap>
              {['wah-wah', 'distortion', 'chorus', 'delay', 'reverb', 'tuner' ].map(tag => (
                <Button w={100} p={2} borderRadius={100} height='auto' key={tag}>
                  <Text fontSize='sm'>#{tag}</Text>
                </Button>
              ))}
            </Wrap>
          </VStack>
        </Flex>
      </Container>
    </>
  )
}
