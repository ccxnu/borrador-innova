import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent1 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container marginTop="100px">
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item container xs={12} md={6} direction="column" spacing={2}>
            <Grid item>
              <Box
                sx={{
                  padding: 1,
                  bgcolor: theme.palette.primary.main,
                  textAlign: "right",
                  borderRadius: 2,
                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  fontSize="26px"
                  color={theme.palette.fourth.main}
                >
                  <strong>Beneficios de Pertenecer al Cluster</strong>
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  paddingInlineStart: "60px",
                  textAlign: "justify",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Acceso a Recursos y Conocimientos:</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="16px">
                  Las cooperativas afiliadas tendrán acceso a una amplia gama de
                  recursos y conocimientos, incluyendo programas de
                  capacitación, herramientas de gestión, y asesoramiento experto
                  en áreas clave como tecnología, procesos, marketing, y
                  finanzas.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 1,
                  paddingInlineStart: "60px",
                  textAlign: "justify",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Red de Colaboración:</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="16px">
                  Formar parte del cluster permitirá a las cooperativas
                  conectarse con otras organizaciones similares, facilitando el
                  intercambio de ideas, la colaboración en proyectos conjuntos y
                  el establecimiento de alianzas estratégicas.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  paddingInlineStart: "60px",
                  textAlign: "justify",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Visibilidad y Promoción:</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="16px">
                  Ser parte del cluster aumentará la visibilidad de las
                  cooperativas ante potenciales socios, clientes y
                  financiadores, ayudando a fortalecer su marca y su posición en
                  el mercado.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 1,
                  paddingInlineStart: "60px",
                  textAlign: "justify",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Asesoramiento y Mentoring:</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="16px">
                  Se ofrecerá asesoramiento personalizado y mentoring a las
                  cooperativas afiliadas, con el objetivo de apoyar su
                  crecimiento y desarrollo a largo plazo.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img src="/static/Beneficios.png" width="650px" height="526px" />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" marginTop="100px">
          <Box
            marginBottom="40px"
            sx={{
              borderRadius: 0,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              width: "100%",
              maxWidth: "1400px",
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="26px"
              color={theme.palette.fourth.main}
            >
              <strong>Condiciones de Afiliación</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item container xs={12} md={4} direction="column" spacing={9}>
            <Grid item>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  textAlign: "left",
                  paddingInlineStart: "100px",
                }}
              >
                <Typography variant="body1" color="third" fontSize="20px">
                  <strong>Ser Una Cooperativa Registrada</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="18px">
                  Para ser elegible para unirse al cluster, la organización debe
                  estar legalmente constituida como una cooperativa en Ecuador.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  height: "auto",
                  textAlign: "left",
                  paddingInlineStart: "100px",
                }}
              >
                <Typography variant="body1" fontSize="20px">
                  <strong>Participación Activa</strong>
                  <Typography variant="body1" fontSize="18px">
                    Se espera que las cooperativas afiliadas participen
                    activamente en las actividades y eventos del cluster,
                    contribuyendo con sus ideas, experiencias y recursos para
                    beneficio de la comunidad en su conjunto.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4} justifyContent="center">
            <Box>
            <img src="/static/Condiciones.png" width="400px" height="400px" />
            </Box>
          </Grid>
          <Grid item container xs={12} md={4} direction="column" spacing={9}>
            <Grid item>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  textAlign: "left",
                  paddingInlineStart: "35px",
                }}
              >
                <Typography variant="body1" fontSize="20px">
                  <strong>Compromiso con la Innovación y el Desarrollo</strong>
                  <Typography variant="body1" fontSize="18px">
                    Las cooperativas interesadas en unirse al cluster deben
                    demostrar un compromiso genuino con la innovación, el
                    desarrollo empresarial y la mejora continua de sus
                    operaciones.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  textAlign: "left",
                  paddingInlineStart: "35px",
                }}
              >
                <Typography variant="body1" fontSize="20px">
                  <strong>Compromiso con la Innovación y el Desarrollo</strong>
                  <Typography variant="body1" fontSize="18px">
                    Las cooperativas interesadas en unirse al cluster deben
                    demostrar un compromiso genuino con la innovación, el
                    desarrollo empresarial y la mejora continua de sus
                    operaciones.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="initial">
          <Box
            sx={{
              marginTop: "100px",
              padding: 1,
              borderRadius: "0",
              textAlign: "center",
              bgcolor: theme.palette.primary.main,
              marginBottom: "40px",
              width: "20%",
            }}
          >
            <Typography variant="body2" fontSize="30px" color="secondary">
              <strong>Servicios</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={5}>
          <Grid item container xs={12} md={6} justifyContent="flex-end">
            <img src="/static/servicios.png" width="550px" height="400px" />
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-start">
            <Grid item container>
              <Box
                sx={{
                  width: 590,
                  height: 100,
                  marginBottom: "50px",
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Plataforma Digital Compartida:</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  Crear una plataforma en línea donde las cooperativas puedan
                  acceder a herramientas, recursos y soluciones tecnológicas.
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 590,
                  height: 125,
                  marginBottom: "50px",
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Transparencia</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  La información y los avances deben ser transparentes para
                  todos los miembros del cluster.
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  width: 600,
                  height: 100,
                  marginBottom: "200px",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Inclusión</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Todas las cooperativas, independientemente de su tamaño o
                  ubicación, pueden participar.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent1;
