import {useState} from 'react'
import { MainLayout } from "../components/MainLayout"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value)
    }
    
    return(
        <>
            <SearchBar handleSearch={handleSearch}/>
            <MainLayout keyword={searchKeyword}/>
        </>
    )
}