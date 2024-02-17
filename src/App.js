import React, { useState, useEffect } from 'react'
import Header from './components/header/Header';
import { fetchDataFromApi } from './utils/fetchDataFromApi';
import Users from "../src/components/users/Users"

const App = () => {

  // USE STATE
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchName, setSearchName] = useState("")
  const [filteredArray, setFilteredArray] = useState([])

  // USE EFFECT
  useEffect(() => {
      setLoading(true)
      setError(null)
      fetchDataFromApi("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((data) => {
        setLoading(false)
        setUsers(data)
        setFilteredArray(data)
      })
      .catch(() => {
        setLoading(false)
        setError("Unable to fetch data")
      })
  }, [])

  //Event Handling Function => Triggers when user clicks on search icon.
  const onSearchName = (event) => {
    event.preventDefault()
    setUsers(filteredArray.filter(user => user.first_name.toLowerCase().includes(searchName.toLowerCase())))
    setSearchName("")
  }

  if(loading)return;

  if(error)return <h2 style={{textAlign:"center", marginTop:"30px", color:"red"}}>{error}</h2>
  
  return (
    <>
      <Header name={searchName} setName={setSearchName} submitHandler={onSearchName}/>

      {users.length > 0 ? 
      <main>
          <Users title="administrators" users={users}/>
          <Users title="members" users={users}/>
      </main> : 
      <h2 style={{textAlign:"center", marginTop:"30px", color:"red"}}>No users are available</h2>}
    </>
  )
}

export default App;