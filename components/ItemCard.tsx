import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Stack, Image, Heading, Text, IconButton } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FiHeart, FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import { MarketItem } from '../pages'

type ItemCardProps = {
	item: MarketItem;
}

const ItemCard: FC<ItemCardProps> = (props) => {
	const { label, image, price } = props.item;
  return (
    <Card maxW='xs'>
			<CardBody p={0}>
				<Image
					src={image}
					alt={label}
					boxSize='200px'
					// h={200}
    			objectFit='cover'
					borderRadius='lg'
					borderBottomRadius={0}
				/>
				<Stack p={2} spacing={2}>
					<Heading fontSize='sm' color='gray.600'>{label}</Heading>
					<Text color='green' fontSize='md'>
							${price}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter p={0}>
				<ButtonGroup isAttached w='full' display='flex'>
					<Button 
						borderTopRadius={0} 
						size='sm' 
						color='gray.600'
						flex={3}
					>
						Buy now
					</Button>
					<IconButton 
						borderTopRadius={0} 
						size='sm' 
						color='orange' 
						aria-label='cart' 
						icon={<FiShoppingCart/>}
						flex={1}
					/>
					<IconButton 
						borderTopRadius={0} 
						size='sm' 
						color='red' 
						aria-label='heart' 
						icon={<FiHeart/>}
						flex={1}
					/>
				</ButtonGroup>
			</CardFooter>
    </Card>
  )
}

export default ItemCard