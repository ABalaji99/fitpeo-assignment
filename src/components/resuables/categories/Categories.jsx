import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Categories = ({CatIcon , catTitle}) => {

  return(
    <div className='flex justify-between align-middle'>
    <CatIcon/>
    <h1>{catTitle}</h1>
    <NavigateNextIcon/>
  </div>
  )
   

}



export default Categories