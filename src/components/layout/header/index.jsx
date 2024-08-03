import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const HeadNav = () => {
  return (
   <header className=' p-3 bg-primaryclr text-level-2-text flex justify-between align-middle'>
      <input type="search" name="search" placeholder='search' id="search" />
      <div>
        <button className=' p-1 rounded'><EmailOutlinedIcon/></button>
        <button className=' p-1 rounded'><SettingsOutlinedIcon/></button>
        <button className=' p-1 rounded'><NotificationsNoneOutlinedIcon/></button>
        <button className=' rounded'></button>
      </div>
   </header>
  )
}

export default HeadNav