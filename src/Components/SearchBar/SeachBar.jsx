import React, { useEffect, useContext, useState } from 'react'
import './SearchBar.css'
import { UserContext } from "../../contexts/UserContext";

const SeachBar = () => {

  const { users, selectedUser, setSelectedUser } = useContext(UserContext);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = users.filter((value) => {
      return value.uid.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (!searchWord) {
      setFilteredUsers([])
    } else {
      setFilteredUsers(newFilter)
    }
  }

  const handleSelected = (e) => {
    
    setSelectedUser(e.target.innerText)
    if(selectedUser){
      setFilteredUsers([])
    }

  }

  return (

    <div className='search'>
      <div className="searchInputs">
        <input
          type='text'
          placeholder='Search for your sadboi colleague'
          className="input input-bordered w-[50rem] h-[2rem]"
          onChange={handleFilter}
        />
      </div>
      {filteredUsers.length !== 0 && (
        <div className=' input input-bordered w-[50rem] h-[2rem] userResult'>
          {filteredUsers.slice(0, 15).map((value, key) => {
            return (
              <p key={key} className='userItem' onClick={handleSelected}>{value.uid}</p>
            )
          })}
        </div>
      )}
    </div>

  )
}

export default SeachBar