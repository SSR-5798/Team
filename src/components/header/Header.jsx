import React from 'react'
import "./header.scss"
import { IoSearch } from "react-icons/io5";

const Header = ({name, setName, submitHandler}) => {

  return (
    <div className='header'>
        <div className='header-content'>
            <span>Team</span>
            <div className='input-channel'>
                <IoSearch onClick={submitHandler}/>
                <input type="text" placeholder='Search' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default Header;