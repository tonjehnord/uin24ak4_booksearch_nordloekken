import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {

  const [book, setBook] = useState([])
  const [query, setQuery] = useState("")

  const getData = async() => {
    try{
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      const data = await response.json()
      setBook(data.results)
    }catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(() => {
    console.log("Query changed:", query)
    getData()
  }, [query])

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
