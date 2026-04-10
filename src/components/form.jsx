import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress, Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

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

    const [snackbar, setSnackbar] = useState({ open: false, text: '', severity: 'success' });
    const [loading, setLoading] = React.useState(false);

    const handleClose = () => setSnackbar(s => ({ ...s, open: false }));

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) sendEmail();
    };

    async function sendEmail() {
        setLoading(true);
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `[Sempervirens] ${formValues.asunto}`,
                    name: formValues.name,
                    email: formValues.email,
                    message: formValues.descripcion,
                }),
            });
            const data = await response.json();
            if (data.success) {
                setSnackbar({ open: true, text: '¡Mensaje enviado correctamente!', severity: 'success' });
            } else {
                throw new Error(data.message);
            }
        } catch {
            setSnackbar({ open: true, text: 'Hubo un error al enviar el mensaje, intente más tarde.', severity: 'error' });
        } finally {
            cleanValues();
            setLoading(false);
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
                        type='email'
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
                <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        disabled={loading}
                        fullWidth
                    >
                        Enviar
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: "green",
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={snackbar.open}
                onClose={handleClose}
                autoHideDuration={4000}
            >
                <Alert onClose={handleClose} severity={snackbar.severity} variant="filled">
                    {snackbar.text}
                </Alert>
            </Snackbar>
        </form>
    );
};

export default MyForm;
