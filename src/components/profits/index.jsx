import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataContext } from "../hooks";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}% Goal completed`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  const {apidata} = useContext(DataContext)

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
    <div className="flex justify-between align-middle">
      
        {
            apidata.slice(0,1).map((prof)=>(
                <div key={prof.id}>
                    <p>{prof.profittitle}</p>
                    <h1 style={{color:prof.profitstatus?'green':'red'}}>${prof.profittotal}%</h1>
                    <p>{prof.profitchange}%</p>
                </div>
            ))
        }
     
      <CircularProgressWithLabel width={800} value={75} />
    </div>
  );
}
