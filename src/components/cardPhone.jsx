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
        sx={{ width: 115, height: 115, flexShrink: 0, objectFit: 'cover' }}
        image={import.meta.env.BASE_URL+"productos/" + data.image[0]}
        alt={data.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: "12px 14px !important" }}>
          <Typography component="div" variant="body1" fontWeight={700} sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.3,
            fontSize: '0.95rem',
          }}>
            {data.name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            sx={{ mt: 0.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {handleDescriptionValue(data.description)}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ mt: 1, fontWeight: 700, color: '#0f4229' }}
          >
            $ {data.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
