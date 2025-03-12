
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Country from './components/Country'
const BASE_URL = "https://restcountries.com/v3.1"
const Cities = [
  "Helsinki",
  "Oslo"
]

const App = () => {
  const searchRef = useRef()
  const [countries, setCountries] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const fetchData = async (url) => {
    const data = await fetch(`${BASE_URL}${url}`)
    const res = await data.json()
    return res
  }

  const search = () => {
    const q = searchRef.current.value
    const filteredList = countries.filter((c)=> c.name.common.toLowerCase().search(q.toLowerCase()) !== -1)
    console.log(filteredList)
    setSearchResults(filteredList)
  }

  const clearSearch = () => {
    searchRef.current.value = ""
    setSearchResults([])
  }

  useEffect(() => {
    fetchData("/all").then((res) => setCountries(res))
  }, [])

  return (
    <>
      <h1>Countries</h1>
      {
        searchResults.length > 0 ? searchResults.map((country) => <Country key={country.name.common} name={country.name.common} flag={country.flag} />) : null
      }
      {
        (countries.length > 0 && searchResults.length === 0) ? countries.slice(0, 10).map((country) => <Country key={country.name.common} name={country.name.common} flag={country.flag} />) : null
      }
      <input ref={searchRef} placeholder='Please search here'></input>
      <button onClick={search}>Search</button>
      <button onClick={clearSearch}>Clear Search Results</button>

      <select>
        {
          Cities.map((city) => <option key={city} onClick={() => alert(city)}>{city}</option>)
        }
      </select>
    </>
  )
}

export default App
