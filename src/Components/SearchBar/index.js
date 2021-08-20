import {useState} from 'react'
import style from './style.module.css'

const SearchBar = props => {
    const [query, setQuery] = useState('')

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault()
        query ? props.handleSearch(query) : alert('Pwease input the query')
    }
    
    return (
        <form className={style.wrapper} onSubmit={handleSearch}>
            <input type="text" name="query" placeholder="Search..." onChange={handleChange} value={query} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchBar