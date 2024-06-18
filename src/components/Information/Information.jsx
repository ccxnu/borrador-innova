import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Modal,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Information = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    resetForm();
  };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/[^\d+]/g, '');
    setPhoneNumber(inputPhoneNumber);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    try {
      // Aquí se hace el envío del formulario a Formspree
      const response = await fetch('https://formspree.io/f/mwkgggew', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        handleOpenModal();
        resetForm();
      } else {
        console.error('Error en el envío del formulario');
      }
    } catch (error) {
      console.error('Error en el envío del formulario:', error);
    }
  };

  const resetForm = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPhoneNumberError(false);
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('message').value = '';
    setPhoneNumber('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
        justifyContent: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.third.main}, ${theme.palette.twelveth.main}, ${theme.palette.primary.main})`,
        padding: '40px',
      }}
    >
      <img
        src="/static/Logo.png"
        width={isMd ? '200px' : '120px'}
        height={isMd ? 'auto' : 'auto'}
        alt="Logo"
      />
      <Box
        sx={{
          backgroundColor: theme.palette.fifth.main,
          borderRadius: '20px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          p: 2,
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            bgcolor: theme.palette.primary.main,
            borderRadius: "10px 10px 0 0",
            pt: 2,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ textAlign: 'center', mb: 3, color: theme.palette.fourth.main }}
          >
            <strong>Solicitar Información</strong>
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
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
                helperText={firstNameError ? 'Campo obligatorio' : ''}
                inputProps={{ maxLength: 50 }}
                onBlur={(event) => {
                  if (event.target.value.trim() === '') {
                    setFirstNameError(true);
                  } else {
                    setFirstNameError(false);
                  }
                }}
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
                helperText={lastNameError ? 'Campo obligatorio' : ''}
                inputProps={{ maxLength: 50 }}
                onBlur={(event) => {
                  if (event.target.value.trim() === '') {
                    setLastNameError(true);
                  } else {
                    setLastNameError(false);
                  }
                }}
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
                helperText={emailError ? 'Correo electrónico inválido' : ''}
                onBlur={(event) => {
                  const email = event.target.value.trim();
                  setEmailError(!validateEmail(email));
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
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                inputProps={{ maxLength: 15 }}
                autoComplete="tel"
                variant="outlined"
                placeholder="Ingresa tu número de celular"
                error={phoneNumberError}
                helperText={phoneNumberError ? 'Campo obligatorio' : ''}
                onBlur={(event) => {
                  if (event.target.value.trim() === '') {
                    setPhoneNumberError(true);
                  } else {
                    setPhoneNumberError(false);
                  }
                }}
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
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="nineth"
                  sx={{ mt: 2, width: '200px', color: theme.palette.fifth.main }}
                >
                  <strong>Enviar</strong>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: theme.palette.primary.main,
              boxShadow: 24,
              p: 4,
              borderRadius: 8,
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" id="modal-title" gutterBottom>
              ¡Solicitud de Información Enviada!
            </Typography>
            <Typography variant="body1" id="modal-description">
              Gracias por completar el formulario. Nos pondremos en contacto contigo pronto.
            </Typography>
            <Button onClick={handleCloseModal} variant="contained" color="fourth" sx={{ mt: 2, color: theme.palette.fifth.main }}>
              Cerrar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Information;
