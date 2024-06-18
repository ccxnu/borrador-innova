import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Modal, Backdrop, Fade, useTheme, useMediaQuery } from '@mui/material';

const User = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      message: data.get('message')
    };

    let formIsValid = true;

    if (formData.firstName.trim() === '') {
      setFirstNameError(true);
      formIsValid = false;
    } else {
      setFirstNameError(false);
    }

    if (formData.lastName.trim() === '') {
      setLastNameError(true);
      formIsValid = false;
    } else {
      setLastNameError(false);
    }

    if (formData.email.trim() === '') {
      setEmailError(true);
      formIsValid = false;
    } else {
      setEmailError(false);
    }

    if (formData.phoneNumber.trim() === '') {
      setPhoneNumberError(true);
      formIsValid = false;
    } else {
      setPhoneNumberError(false);
    }

    if (formIsValid) {
      console.log(formData);
      handleOpenModal();
    } else {
      console.log('Formulario inválido. Por favor completa todos los campos requeridos.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh', // Ajustamos la altura mínima del contenedor principal
        justifyContent: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.third.main}, ${theme.palette.twelveth.main}, ${theme.palette.primary.main})`,
        padding: '20px',
      }}
    >
      <img
        src="/static/Logo.png"
        width={isMd ? "200px" : "120px"}
        height={isMd ? "auto" : "auto"}
        alt="Logo"
      />
      <Box
        sx={{
          backgroundColor: theme.palette.fifth.main,
          borderRadius: '20px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          p: 4,
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center', mb: 3, color: theme.palette.fourth.main }}>
          Solicitar Información
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="firstName"
              label="Nombre"
              name="firstName"
              autoComplete="given-name"
              variant="outlined"
              placeholder="Ingresa tu nombre"
              error={firstNameError}
              helperText={firstNameError ? "Campo obligatorio" : ""}
              inputProps={{ maxLength: 50 }}
              onBlur={(event) => {
                if (event.target.value.trim() === '') {
                  setFirstNameError(true);
                }
              }}
              onFocus={() => setFirstNameError(false)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="family-name"
              variant="outlined"
              placeholder="Ingresa tu apellido"
              error={lastNameError}
              helperText={lastNameError ? "Campo obligatorio" : ""}
              inputProps={{ maxLength: 50 }}
              onBlur={(event) => {
                if (event.target.value.trim() === '') {
                  setLastNameError(true);
                }
              }}
              onFocus={() => setLastNameError(false)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              variant="outlined"
              placeholder="Ingresa tu correo electrónico"
              error={emailError}
              helperText={emailError ? "Campo obligatorio" : ""}
              onBlur={(event) => {
                if (event.target.value.trim() === '') {
                  setEmailError(true);
                }
              }}
              onFocus={() => setEmailError(false)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="phoneNumber"
              label="Número de Celular"
              name="phoneNumber"
              type="tel"
              inputProps={{ maxLength: 10 }}
              autoComplete="tel"
              variant="outlined"
              placeholder="Ingresa tu número de celular"
              error={phoneNumberError}
              helperText={phoneNumberError ? "Campo obligatorio" : ""}
              onBlur={(event) => {
                if (event.target.value.trim() === '') {
                  setPhoneNumberError(true);
                }
              }}
              onFocus={() => setPhoneNumberError(false)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              placeholder="Escribe tu comentario"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ fontSize: '16px', color: theme.palette.fourth.main }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              backgroundColor: '#fff',
              boxShadow: 24,
              p: 4,
              borderRadius: 8,
              maxWidth: '80%',
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" id="modal-title" gutterBottom>
              ¡Solicitud de Información Enviada!
            </Typography>
            <Typography variant="body1" id="modal-description">
              Gracias por completar el formulario. Nos pondremos en contacto contigo pronto.
            </Typography>
            <Button onClick={handleCloseModal} variant="contained" color="primary" sx={{ mt: 2 }}>
              Cerrar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default User;
