import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
  const [searchTerm, setsearchTerm] = useState('')
  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    if (searchTerm) {
      Navigate (`/search/${searchTerm}`)
      setsearchTerm('');
    }
  }

  return <>
      <form class="d-flex" onSubmit={handleSubmit}>
        <input class="form-control me-5 px-5" type="search" placeholder="Search..." value={searchTerm} 
        onChange={(e)=> setsearchTerm(e.target.value)} aria-label="Search"/>
      </form>
  
  </>
}
