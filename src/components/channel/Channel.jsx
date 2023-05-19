import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Box, Container } from '@mui/material'
import { ApiService } from '../../service/api.service'
import { ChannelCard , Videos} from '../'

const Channel = () => {
  const [channelDetail, setChannelDetail] = React.useState();
  const [videos, setVideos] = React.useState([])
  const { id } = useParams()
  console.log(channelDetail);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?.part=snippet&id=${id}`)
        console.log(dataChannelDetail);
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
        console.log(dataVideo);
        setVideos(dataVideo?.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
  console.log(id);
  return (
    <Box minHeight={'95vh'} mt={'1vh'}>
      <Box width={'100%'} height={'300px'} zIndex={10} 
      sx={{
        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        objectFit:'cover',
        backgroundRepeat:'no-repeat',
        
        }}/>
      <Box>
        <ChannelCard video={channelDetail} marginTop ={'-100px'}/>
      </Box>
      <Container maxWidth={'90%'}>
        <Videos  video={videos}/>
      </Container>
    </Box>
  )
}

export default Channel