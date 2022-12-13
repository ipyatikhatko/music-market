import React from 'react'
import { Box, Flex, Text, Container, Button, InputGroup, Input, InputRightElement, Spacer, Icon, useMediaQuery } from '@chakra-ui/react'
import { Search2Icon, } from '@chakra-ui/icons'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
type Props = {}

const Header = (props: Props) => {

	const [isMobile, isTablet, isDesktop] = useMediaQuery([
    '(min-width: 320px)',
    '(min-width: 768px)',
    '(min-width: 1440px)',
    
  ])

  return (
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
						{isTablet && (
							<>
								<Button flex={1} borderRadius={100} borderWidth={2} variant='outline' colorScheme='blackAlpha'>
									Sell gear
								</Button>
								<Flex direction='column' align='center' justify='center' flex={1}>
									<Icon fontSize='xl' as={FiHeart}/>
									<Text fontSize='xs'>Watch list</Text>
								</Flex> 
							</>
						)}
						       
						<Flex direction='column' align='center' justify='center' flex={1}>
							<Icon fontSize='xl' as={FiShoppingCart}/>
							<Text fontSize='xs'>Cart</Text>
						</Flex>
					</Flex>
					{isDesktop && (
						<>
							<Spacer/>
							<Box flexDir='column' alignItems='center' justifyContent='center'>
								<Text fontSize='xs' _hover={{ color: 'red' }}>Sign up</Text>
								<Text fontSize='xs'>Log In</Text>
							</Box>   
						</>
					)}
				</Box>
			</Flex>
		</Container>
  )
}

export default Header