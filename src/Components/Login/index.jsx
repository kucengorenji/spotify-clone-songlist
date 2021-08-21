import { Center, Button } from "@chakra-ui/react"


import { authSpotify } from '../../Api/Auth';

export default function Login() {
    return(
        <Center bg="white" h="100vh">
            <Button colorScheme="green" onClick={authSpotify}>Login</Button>
        </Center>
    )
}