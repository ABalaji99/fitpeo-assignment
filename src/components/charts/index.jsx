import * as React from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';

const otherSetting = {
  height: 180,
  yAxis: [{ label: '', max: 15000 }],
  grid: { horizontal: true },
  sx: {
    backgroundColor: '#1f2029', // Background color similar to the image
    [`& .${axisClasses.left} .${axisClasses.label}, & .${axisClasses.bottom} .${axisClasses.label}`]: {
      fill: 'white', // Axis label text color
    },
    [`& .${axisClasses.left} .${axisClasses.axisLine}, & .${axisClasses.bottom} .${axisClasses.axisLine}`]: {
      stroke: 'white', // Axis line color
    },
    [`& .${axisClasses.left} .${axisClasses.tick}, & .${axisClasses.bottom} .${axisClasses.tick}`]: {
      stroke: 'white', // Tick color
      fill: 'white', // Tick text color
    },
    '& .MuiGrid-root': {
      borderColor: 'white', // Grid line color
    },
  },
};

const dataset = [
  { day: 5, activity: 5000 },
  { day: 6, activity: 3000 },
  { day: 7, activity: 10000 },
  { day: 8, activity: 7000 },
  { day: 9, activity: 8000 },
  { day: 10, activity: 9000 },
  { day: 11, activity: 11000 },
  { day: 12, activity: 12000 },
  { day: 13, activity: 3000 },
  { day: 14, activity: 4000 },
  { day: 15, activity: 6000 },
  { day: 16, activity: 7000 },
  { day: 17, activity: 10000 },
  { day: 18, activity: 14000 },
  { day: 19, activity: 15000 },
  { day: 20, activity: 9000 },
  { day: 21, activity: 13000 },
  { day: 22, activity: 11000 },
  { day: 23, activity: 7000 },
  { day: 24, activity: 6000 },
  { day: 25, activity: 10000 },
  { day: 26, activity: 4000 },
  { day: 27, activity: 8000 },
];

export default function ActivityChart() {
  return (
    <>
      <div className='flex justify-between items-center px-4 py-2 bg-primaryclr rounded-lg'>
        <h1 className='text-white text-xl'>Activity</h1>
        <select className='bg-primaryclr text-white border border-gray-500 rounded px-2 py-1 appearance-none relative'>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <BarChart
        className='bg-primaryclr p-4 rounded-lg'
        borderRadius={10}
        dataset={dataset}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'day',
            valueFormatter: (day) => `${day}`,
          },
        ]}
        series={[{ dataKey: 'activity', valueFormatter: (value) => `${value}` }]}
        {...otherSetting}
      />
    </>
  );
}
