import IndexPage from './Pages'

import { ChakraProvider } from "@chakra-ui/react"

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <IndexPage />
    </ChakraProvider>
  )
}

export default App;