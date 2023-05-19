import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import ReactPlayer from 'react-player';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material'
import { Loader, Videos } from '../';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideo, setRelatedVideo] = useState([])
  const { id } = useParams()
  useEffect(() => {

    const getData = async () => {
      try {

        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setVideoDetail(data.items[0])
        setRelatedVideo(relatedData.items)

      }
      catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id]);
  console.log(videoDetail);
  console.log(relatedVideo);
  if (!videoDetail?.snippet) return <Loader />

  return (
    <Box minHeight={'90vh'} margin={'0 auto'} width={'90%'} >
      <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box width={'75%'} height={'500px'}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} height={"100%"} />
          {videoDetail.snippet.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
              deleteIcon={<Tag />}
              onDelete={() => { }}
              variant='outlined'
            />
          ))}
          <Typography variant='h5' fontWeight={'bold'} p={2}>
            {videoDetail?.snippet.title}
          </Typography>
          <Typography variant='subtitle2' sx={{ opacity: .7, textAlign: 'justify' }} p={2}>
            {videoDetail?.snippet.description}
          </Typography>
          <Stack direction='row' gap={'20px'} alignItems={'center'} py={1} px={2}>
            <Stack sx={{ opacity: .7 }} direction='row' gap={'3px'} alignItems={'center'}>
              <Visibility />
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
            </Stack>
            <Stack sx={{ opacity: .7 }} direction='row' gap={'3px'} alignItems={'center'}>
              <FavoriteOutlined />
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
            </Stack>
            <Stack sx={{ opacity: .7 }} direction='row' gap={'3px'} alignItems={'center'}>
              <MarkChatRead />
              {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comment
            </Stack>
          </Stack>
          <Stack direction={'row'} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack direction={'row'} alignItems={'center'} gap={'5px'} marginTop={"5px"}>
                <Avatar src={videoDetail.snippet.thumbnails.default.url}
                  alt={videoDetail.snippet.channelTitle} />
                <Typography variant='subtitle2' color={'gray'}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box width={{ xs: '100%', md: '25%' }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
          overflow={'scroll'}
          maxHeight={'120vh'}>
          <Videos video={relatedVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail