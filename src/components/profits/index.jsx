import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataContext } from "../hooks";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: '20px',
          bottom: 0,
          color:'#fff !important',
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" className=" text-level-1-text" component="div">
        <p className=" font-bold text-lg">  {`${Math.round(props.value)}% `}</p>
          Goal 
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  const { apidata } = useContext(DataContext);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" rounded-lg p-3 flex justify-between items-center">
      {apidata.slice(0, 1).map((prof) => (
        <div key={prof.id}>
          <p className=" text-sm text-level-2-text mb-3">{prof.profittitle}</p>
          <h1 className="text-3xl font-bold mb-3">${prof.profittotal}%</h1>
          <p style={{ color: prof.profitchange ? "green" : "red" }}>
            {prof.profitchange ? (
              <ArrowDropUpTwoToneIcon />
            ) : (
              <ArrowDropDownTwoToneIcon />
            )}
            {prof.profitchange}%
          </p>
        </div>
      ))}

      <CircularProgressWithLabel width={800} value={75} />
    </div>
  );
}
