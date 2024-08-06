import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import user1 from '../utils/user2.jpeg'
import user2 from '../utils/user3.jpeg'
import user3 from '../utils/user4.jpeg'
import user4 from '../utils/user5.jpg'



function createData(customer, orderNo, amount, status, avatar) {
  return { customer, orderNo, amount, status, avatar };
}

const rows = [
  createData('Wade Warren', '15487258', '$124.00', 'Delivered', user1),
  createData('Jane Cooper', '48965786', '$365.02', 'Delivered', user2),
  createData('Guy Hawkins', '78958215', '$45.88', 'Canceled', user3),
  createData('Kristin Watson', '20965732', '$85.00', 'Pending', user4),
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Canceled':
      return 'error';
    default:
      return 'default';
  }
};

export default function RecentOrders() {
  return (
    <div className='bg-primaryclr rounded-xl p-3 '> <h1 className=' mb-3 text-level-1-text text-xl font-bold'>Recent Orders</h1>
    <TableContainer component={Paper} className='bg-primaryclr' >
     
      <Table className='text-level-2-text' sx={{ minWidth: 650 , color:"#fff" , background:"rgb(30 31 40)"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='' sx={{color:"#fff"}}>Customer</TableCell>
            <TableCell sx={{color:"#fff"}}>Order No.</TableCell>
            <TableCell align="right" sx={{color:"#fff"}}>Amount</TableCell>
            <TableCell align="right" sx={{color:"#fff"}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderNo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{color:"#fff"}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={row.customer} src={row.avatar} />
                  <span sx={{color:"#fff"}} style={{ marginLeft: '10px' }}>{row.customer}</span>
                </div>
              </TableCell>
              <TableCell sx={{color:"#fff"}}>{row.orderNo}</TableCell>
              <TableCell sx={{color:"#fff"}} align="right">{row.amount}</TableCell>
              <TableCell sx={{color:"#fff"}} align="right">
                <Chip  sx={{color:"#fff"}}label={row.status} color={getStatusColor(row.status)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
