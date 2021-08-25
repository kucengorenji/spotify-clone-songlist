import { Input, Button, Grid, Heading, Center } from "@chakra-ui/react"

import {useState} from 'react'

const SearchBar = (props) => {

    const [query, setQuery] = useState('')

    const handleChange = event => {
        setQuery(event.target.value)
    }

    const handleSearch = event => {
        event.preventDefault()
        query ? props.handleSearch(query) : alert('please fill the form')
    }
    
    return (
        <form onSubmit={handleSearch}>
            <Center>
                <Heading>
                    Search Song
                </Heading>
            </Center>
            
            <Grid m={4}>
                <Input m={3} type="text" name="query" placeholder="Search..." onChange={handleChange} value={query} />
                <Button colorScheme="teal" size="lg" type="submit" value="Search">Search</Button>
            </Grid>
        </form>
    )
}

export default SearchBar;