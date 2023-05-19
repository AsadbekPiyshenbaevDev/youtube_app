import { Card, CardContent, CardMedia, Typography, Stack, Avatar } from '@mui/material'
import { colors } from '../../constanta/colors'
import moment from 'moment'
import { Link } from 'react-router-dom'
import React from 'react'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({ video }) => {
    return (
        <Card sx={{ width: { xs: "100%", sm: '360px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={`video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{ width: { xs: "100%", sm: '360px', md: '320px' }, height: '180px' }}

                />
            </Link>
            <CardContent sx={{ background: colors.primary, height: '300px', position: 'relative' }}>
                <Link to={`video/${video.id.videoId}`}>
                    <Typography my={5} sx={{ opacity: '.4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{ opacity: '.6' }}>
                        {video?.snippet?.description.slice(0, 50)}
                    </Typography>
                </Link>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography variant='subtitle2' color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard