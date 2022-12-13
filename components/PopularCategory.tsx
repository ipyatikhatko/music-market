import { Button, VStack, Wrap, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

type PopularCategoryProps = {
	label: string;
	tags: string[];
}

const PopularCategory: FC<PopularCategoryProps> = ({ label, tags }) => {
  return (
    <VStack 
			// w={300} 
			flex={1} 
			alignItems='flex-start' 
			justifyContent='flex-start'>
        <Button borderRadius={0} variant='link' color='blackAlpha.700'>
					<Text fontSize={['md', '2xl']}>{label}</Text>
				</Button>
					<Wrap>
            {tags.map(tag => (
							<Button 
								colorScheme='blackAlpha' 
								p={1} 
								borderRadius={0}
								height='auto' 
								key={tag}>
								<Text fontSize='sm'>#{tag}</Text>
							</Button>
						))}
        </Wrap>
    </VStack>
  )
}

export default PopularCategory