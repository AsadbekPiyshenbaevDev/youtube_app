import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const ChannelCard = ({ video ,marginTop}) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop:marginTop
        }}>
            <Link to={`/channel/${video?.id.channelId ?video?.id.channelId :video?.id } `}>

                <CardContent>
                    <CardMedia
                        image={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
                    <Typography variant='h6' >
                        {video?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                    </Typography>
                    {video?.statistics?.subscriberCount && (
                        <Typography sx={{ fontSize: '14px', color: 'gray', fontWeight: '500' }} >
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')}{' '}Subscriber
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard