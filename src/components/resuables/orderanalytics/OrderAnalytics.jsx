import React from 'react';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';

const OrderAnalytics = ({ oatitle, oatheme, oaicontheme, Oaicon, oascore, oastatus, oachange }) => {
  const iconStyles = {
    color: oaicontheme,
    background: oatheme,
  };

  return (
    <div className='orderanalytics p-3 rounded-lg bg-primaryclr w-1/4 '>
      <div type='button' className=' p-2 rounded-lg w-max' style={iconStyles}>
        <Oaicon />
      </div>
      <p className=' my-2 text-sm'>{oatitle}</p>
      <div className='flex justify-between items-baseline'>
        <h1 className=' text-2xl font-bold'>{oascore}</h1>
        <p style={{ color: oastatus ? 'green' : 'red' }}>{oastatus ? <ArrowDropUpTwoToneIcon/>:<ArrowDropDownTwoToneIcon/>}{oachange}</p>
      </div>
    </div>
  );
};

export default OrderAnalytics;
