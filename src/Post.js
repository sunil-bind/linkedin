import React from 'react'
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Posts({name,description,message,photUrl}) {
  return (
    <div className="post">
        <div className="post__header">
        <Avatar />
        <div className='post__info'>
            <h2>
                {name}
            </h2>
            <p>{description}</p>
        </div>
        </div>
        <div className='post__body'>
            <p>
                {message}
            </p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOffAltIcon}  title='like' color='gray'/>
            <InputOption Icon={CommentIcon}  title='comment' color='gray'/>
            <InputOption Icon={ShareIcon}  title='share' color='gray'/>
            <InputOption Icon={SendIcon}  title='send' color='gray'/>
        </div>
    </div>
  )
}

export default Posts