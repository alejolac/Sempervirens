import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaControlCard({data}) {

  function handleDescriptionValue(text) {
    let newVal = text.split(" ");
    if (newVal.length > 6) return (newVal.slice(0, 6).join(" "))
    return text
  } 

  return (
    <Card className="card-phone" sx={{ display: "flex", width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={import.meta.env.BASE_URL+"productos/" + data.image[0]}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {handleDescriptionValue(data.description)}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            className="mt-2"
          >
            $ {data.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
