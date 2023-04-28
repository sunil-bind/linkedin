import React from 'react'
import './Widges.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
function Widgets() {

    const newsArtical = (heading, subtitle) =>(
        <div className='widgets__artical'>
            <div className='widgets__articalLeft'>
                <FiberManualRecordIcon />
                </div>
            <div className='widgets__articalRight'>
            <h4> {heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>
                Linkedin News
            </h2>
            <InfoIcon />
        </div>
        {newsArtical('papa react is back','top news - 90099 readers')}
        {newsArtical('papa react is back','top news - 90099 readers')}
        {newsArtical('papa react is back','top news - 90099 readers')}
    </div>
  )
}

export default Widgets