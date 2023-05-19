import React from 'react'
import { Stack, Box } from "@mui/material"
import { logo, asad } from '../../constanta'
import { Link } from 'react-router-dom'
import { colors } from '../../constanta/colors'
import { SearchBar } from '../index'

const Navbar = () => {
  return <Stack direction={"row"} alignContent={"center"} justifyContent={"space-between"} p={2} sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.primary }}>
    <Link to={'/'}>
      <img src={logo} alt={asad} height={30} width={100} />
    </Link>
    <SearchBar />
    <Box />
  </Stack>
}

export default Navbar