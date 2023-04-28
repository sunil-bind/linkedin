import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOptions.css"

function Headerptions({avatar,Icon,title,onClick}) {
  return (
    <div onClick={onClick} className="headerOptions">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar &&  (<Avatar className="headerOption__icon" src={avatar}/>)}
        <h3 className="headerption_title">{title}</h3>
    </div>
  )
}

export default Headerptions