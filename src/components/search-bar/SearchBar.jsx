import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constanta/colors'

const SearchBar = () => {
  const navigate = useNavigate()
  const [val, setVal] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    if (val) {
      navigate(`/search/${val}`)
      setVal('')
    }
  }
  return (
    <Paper component={"form"} onSubmit={submitHandler} sx={{ border: `1px solid ${colors.secondary}`, boxShadow: "none", pl: 2, mr: 5 }}>
      <input type="text" placeholder='Search...' className='search-bar' onChange={e => setVal(e.target.value)} />
      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar