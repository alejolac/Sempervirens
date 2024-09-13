import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// URL POSTA
/* https://sempervirens.vercel.app */

const MyForm = () => {
    // Estado para los valores del formulario
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        asunto: '',
        descripcion: '',
    });

    // Estado para los errores de validación
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        asunto: '',
        descripcion: '',
    });

    const [state, setState] = useState({
        open: false,
        text: "",
        vertical: 'bottom',
        horizontal: 'right',
      });

    const { vertical, horizontal, open, text } = state;

    const handleClick = (newState) => {
    console.log(newState);
    setState({ ...newState, open: true });
    };

    const handleClose = () => {
    setState({ ...state, open: false });
    };

    const action = (
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
      );

    const cleanValues = () => {
        setFormValues({
            name: '',
            email: '',
            asunto: '',
            descripcion: '',
        })
    }

    // Maneja el cambio de los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Función de validación
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formValues.name) {
            tempErrors.name = 'El nombre es requerido';
            isValid = false;
        }

        if (!formValues.email) {
            tempErrors.email = 'El correo electrónico es requerido';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            tempErrors.email = 'El correo electrónico no es válido';
            isValid = false;
        }

        if (!formValues.asunto) {
            tempErrors.asunto = 'El asunto es requerido';
            isValid = false;
        }

        if (!formValues.descripcion) {
            tempErrors.descripcion = 'La descripcion es requerida';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail()            
            cleanValues()
            console.log('Formulario enviado:', formValues);
        } else {
            console.log('Errores en el formulario');
        }
    };

    async function sendEmail() {
        try {
            const response = await fetch('https://sempervirens.vercel.app/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'alejobuc@gmail.com',
                    from: 'sender@example.com',
                    subject: formValues.asunto,
                    text: `Nombre: ${formValues.name}, Correo de contacto: ${formValues.email} y Descripcion: ${formValues.descripcion}`,
                }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const text = await response.text(); // Lee el contenido como texto
            if (text) {
                const data = JSON.parse(text); // Intenta convertir a JSON
                console.log('Email sent successfully:', data);
                handleClick({vertical: 'bottom', horizontal: 'right', text: "Datos Enviados Correctamente"})
            } else {
                console.log('No response body, email sent successfully');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            handleClick({vertical: 'bottom', horizontal: 'right', text: "Hubo un error al enviar los datos, intente mas tarde"})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='contact-form-head'>
                <div className='contact-form-data'>
                    <TextField
                        id="standard-basic"
                        label="Nombre"
                        variant="standard"
                        color="success"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        error={!!errors.name}  // Muestra el error si existe
                        helperText={errors.name} // Muestra el mensaje de error
                        fullWidth
                    />
                    <TextField
                        id="standard-email"
                        label="Correo Electrónico"
                        variant="standard"
                        color="success"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                    />
                    <TextField
                        id="standard-asunto"
                        label="Asunto"
                        variant="standard"
                        color="success"
                        name="asunto"
                        value={formValues.asunto}
                        onChange={handleChange}
                        error={!!errors.asunto}
                        helperText={errors.asunto}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        id="standard-descripcion"
                        label="Descripcion"
                        color="success"
                        name="descripcion"
                        multiline
                        rows={4}
                        value={formValues.descripcion}
                        onChange={handleChange}
                        error={!!errors.descripcion}
                        helperText={errors.descripcion}
                        fullWidth
                    />
                </div>
                <Button type="submit" variant="contained" color="success">
                    Enviar
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={text}
                key={vertical + horizontal}
                autoHideDuration={3200}
                transitionComponent="SlideTransition"
                action={action}
            />
        </form>
    );
};

export default MyForm;
