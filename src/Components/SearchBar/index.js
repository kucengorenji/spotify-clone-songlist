import style from './style.module.css'

import {useState} from 'react'

const SearchBar = (props) => {

    const [query, setQuery] = useState('')

    const handleChange = event => {
        setQuery(event.target.value)
    }

    const handleSearch = event => {
        event.preventDefault()
        query ? props.handleSearch(query) : alert('fill search-form first.')
    }
    
    return (
        <form className={style.wrapper} onSubmit={handleSearch}>
            <input type="text" name="query" placeholder="Search..." onChange={handleChange} value={query} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchBar;