import { Box,Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ApiService} from '../../service/api.service'
import { colors } from '../../constanta/colors'
import {Videos} from '../'
const Search = () => {
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
  console.log(videos);
  return (
   <Box p={2} sx={{height:'90vh'}}>
    <Container maxWidth={"90%"}>
      <Typography variant='h4' fontWeight={'bold'} mb={2}>
          Search result for <span style={{color:colors.secondary}}>{id}</span> videos
      </Typography>
      {<Videos video={videos}/>}
    </Container>
   </Box>
  )
}

export default Search