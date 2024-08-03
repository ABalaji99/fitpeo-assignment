import React from 'react'

const OrderAnalytics = ({oatitle ,Oaicon , oascore , oastatus , oachange}) => {
  return (
    <div className='orderanalytics bg-primaryclr w-1/4 '>
      <Oaicon/>
      <p>{oatitle}</p>
      <div className='d-flex'>
        <h1>{oascore}</h1>
        <p style={{color:oastatus ? 'green':'red'}}>{oachange}</p>
      </div>
    </div>
  )
}

export default OrderAnalytics