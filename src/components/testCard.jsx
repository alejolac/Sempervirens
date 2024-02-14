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
        const maxLength = 80; 
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...'; 
        }
        return text;
    }

    function handleTitleValue() {
        const maxLength = 50; // Establece la longitud máxima deseada para el título
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...'; // Si la longitud supera el máximo, trunca y agrega puntos suspensivos
        }
        return title;
    }

    return (
        <Card style={{ margin: "0 auto" }} sx={{ maxWidth: 235 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="265"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        className='text-card-title'
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ height: 50, overflow: 'hidden' }} 
                    >
                        {handleTitleValue()}
                    </Typography>
                    <Typography
                        className='text-card-desc'
                        variant={screenWidth >= 965 ? "body1" : "body2"}
                        color="text.secondary"
                    >
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