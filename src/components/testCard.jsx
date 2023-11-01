import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imgImport from "../../public/img1.jpg"

export default function ActionAreaCard({ img, title, text, price }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    console.log(img, title, text, price);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    function handleDescriptionValue() {
        let newVal = text.split(" ");
        if (newVal.length > 10) return (newVal.slice(0, 10).join(" "))
        return text
    }

    return (
        <Card style={{margin: "0 auto"}} sx={{ maxWidth: 235 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="265"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant={screenWidth >= 965 ? "body1" : "body2"} color="text.secondary">
                        {handleDescriptionValue()}
                    </Typography>
                    <Typography className='mt-2' variant="h5" color="black">
                        $ {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}