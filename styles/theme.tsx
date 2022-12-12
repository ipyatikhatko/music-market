import { extendTheme, Theme } from '@chakra-ui/react'

const theme: Partial<Theme> = extendTheme((t: Theme) => ({
	...t,
  fonts: {
    heading: `"Averia Libre", cursive`,
    body: `"Averia Libre", cursive`,
  },
  components: {
		...t.components,
  }
}))

export default theme