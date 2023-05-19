import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from '../video-card/VideoCard'
import ChannelCard from '../channelCard/ChannelCard'
const Videos = ({ video }) => {
  return (
    <Stack width={'90%'} margin={'0 auto'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={2}>
     {video.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard video={item} />}
				</Box>
			))}
    </Stack>
  )
}

export default Videos