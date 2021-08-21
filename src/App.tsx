import IndexPage from './Pages'

import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <IndexPage />
    </ChakraProvider>
  )
}

export default App;