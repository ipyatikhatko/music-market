import { Container, Divider, VStack, Text, Box, HStack, Flex } from '@chakra-ui/react'
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import PopularCategories from '../components/PopularCategories';

export interface MarketItem {
  label: string;
	image: string;
	price: number;
}

const mockItems: MarketItem[] = [
  {
    label: 'Fender Jazzmaster',
    image: 'https://images.unsplash.com/photo-1546921888-e443f8c96a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 860.99,
  },
  {
    label: 'Gibson ES-335',
    image: 'https://images.unsplash.com/photo-1585664590430-e8e61d8ce91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 1640.99,
  },
  {
    label: 'Fender Stratocaster',
    image: 'https://images.unsplash.com/photo-1606043357323-69163e39abfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    price: 1260.99,
  },
  {
    label: 'Fender Telecaster',
    image: 'https://images.unsplash.com/photo-1587519914586-0141ede999a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80',
    price: 1139.99,
  }
]

export default function Home() {
  return (
    <>
      <Header/>
      <Divider/>
      <Container maxW='container.lg'>
        <PopularCategories/>
        <Box mt={10}>
          <Flex direction='column' justify='flex-start'>
            <Text fontSize='3xl'>
              New items
            </Text>
            <Flex w='full' display='flex' justify='space-between'>
              {mockItems.map(item => (
                <ItemCard key={item.label} item={item}/>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  )
}
