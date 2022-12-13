import React from 'react'
import { Text, Flex, Box } from '@chakra-ui/react'
import backgroundImage from '../assets/background_home.jpg';
import PopularCategory from './PopularCategory';

type Props = {}

const PopularCategories = (props: Props) => {
  return (
    <Box
			py={4}
			bgImage={
				`
				linear-gradient(to right, #FFF 20%, transparent 80%, #FFF 100%),
				linear-gradient(to left, #FFF 20%, transparent 80%, #FFF 100%),
				url(${backgroundImage.src})
				`
			} 
			bgPosition="left"
			bgRepeat="no-repeat"
			bgSize='cover'
		>
			<Text fontSize={['2xl','5xl']}>Popular categories</Text>
			<Flex direction={['column', 'row']} gap={[4, 0]}>
				<PopularCategory 
					label='Guitars' 
					tags={['fender', 'gibson', 'esp', 'Warwick']}
				/>
				<PopularCategory 
					label='Basses' 
					tags={['fender', 'gibson', 'esp', 'Warwick']}
				/>
				<PopularCategory 
					label='Effects' 
					tags={['wah-wah', 'distortion', 'delay', 'reverb']}
				/>
			</Flex>
		</Box>
  )
}

export default PopularCategories