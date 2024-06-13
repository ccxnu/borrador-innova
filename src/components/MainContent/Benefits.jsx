import { Box, Typography, Grid, useTheme } from "@mui/material";

const Benefits = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container marginTop="100px" id="beneficios">
        <Grid container justifyContent="center">
          <Grid item container>
            <Grid
              container
              justifyContent={{ xs: "center", md: "space-between" }}
              spacing={2}
            >
              <Grid item xs={11} md={6}>
                <Box
                  sx={{
                    padding: 1,
                    bgcolor: theme.palette.primary.main,
                    height: "auto",
                    textAlign: "left",
                    borderRadius: "0px 10px 10px 0px",
                  }}
                  marginBottom="40px"
                >
                  <Typography
                    variant="body2"
                    fontSize="32px"
                    textAlign="right"
                    color={theme.palette.fourth.main}
                  >
                    <strong>Beneficios de Pertenecer al Clúster</strong>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent={{ xs: "center", md: "space-between" }}
                px={4}
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Acceso a Recursos y Conocimientos</strong>
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Las cooperativas afiliadas tendrán acceso a una amplia
                        gama de recursos y conocimientos, incluyendo programas
                        de capacitación, herramientas de gestión y asesoramiento
                        experto en áreas clave como tecnología, procesos,
                        marketing y finanzas.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Red de Colaboración</strong>
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Formar parte del clúster permitirá a las cooperativas
                        conectarse con otras organizaciones similares,
                        facilitando el intercambio de ideas, la colaboración en
                        proyectos conjuntos y el establecimiento de alianzas
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Visibilidad y Promoción</strong>
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Ser parte del clúster aumentará la visibilidad de las
                        cooperativas ante potenciales socios, clientes y
                        financiadores, ayudando a fortalecer su marca y su
                        posición en el mercado.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Asesoramiento y Mentoring</strong>
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Se ofrecerá asesoramiento personalizado y mentoring a
                        las cooperativas afiliadas, con el objetivo de apoyar su
                        crecimiento y desarrollo a largo plazo.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={6}>
                  <Box
                    sx={{
                      backgroundImage: "url(/static/Beneficios.png)",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      minHeight: "200px",
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          marginTop="100px"
          id="condiciones"
        >
          <Box
            marginBottom="40px"
            sx={{
              borderRadius: 0,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              padding: 1,
              flex: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="32px"
              color={theme.palette.fourth.main}
            >
              <strong>Condiciones de Afiliación</strong>
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent={{ xs: "center", md: "space-between" }}
                px={4}
                spacing={2}
              >
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Ser Una Cooperativa Registrada</strong>
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Para ser elegible para unirse al clúster, la
                        organización debe estar legalmente constituida como una
                        cooperativa en Ecuador.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>Participación Activa</strong>
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Se espera que las cooperativas afiliadas participen
                        activamente en las actividades y eventos del clúster,
                        contribuyendo con sus ideas, experiencias y recursos
                        para beneficio de la comunidad en su conjunto.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={5}>
                  <Box
                    sx={{
                      backgroundImage: "url(/static/Condiciones.png)",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      minHeight: "200px",
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>
                          Compromiso con la Innovación y el Desarrollo
                        </strong>
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Las cooperativas interesadas en unirse al clúster deben
                        demostrar un compromiso genuino con la innovación, el
                        desarrollo empresarial y la mejora continua de sus
                        operaciones.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "auto",
                      textAlign: "left",
                    }}
                    marginBottom="30px"
                  >
                    <img
                      src="/static/Check.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        color={theme.palette.tenth.main}
                        fontSize="20px"
                      >
                        <strong>
                          Cumplimiento de Normas y Ética Empresarial
                        </strong>
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.octh.main}
                        fontSize="20px"
                      >
                        Todas las cooperativas afiliadas deberán cumplir con las
                        normas éticas y empresariales establecidas por el
                        clúster, incluyendo el respeto a los derechos laborales,
                        ambientales y sociales.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={9} md={3} margin="auto">
                  <Box
                    sx={{
                      height: "auto",
                      textAlign: "center",
                    }}
                  >
                    <img src="/static/Check.png" width="40px" height="40px" />
                    <Typography
                      variant="body1"
                      color={theme.palette.tenth.main}
                      fontSize="20px"
                    >
                      <strong>Tipo de Membresia</strong>
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.octh.main}
                      fontSize="20px"
                    >
                      La membresía es gratuita, pero las cooperativas pueden
                      contribuir monetariamente para financiar proyectos
                      conjuntos.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container id="servicios">
          <Box
            sx={{
              marginTop: "100px",
              padding: 1,
              paddingInlineStart: 15,
              textAlign: "center",
              bgcolor: theme.palette.primary.main,
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <Typography
              variant="body2"
              fontSize="32px"
              color={theme.palette.fourth.main}
            >
              <strong>Servicios</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop="40px">
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-arround" }}
            px={4}
            spacing={7}
          >
            <Grid item xs={12} sm={7} md={6}>
              <Box
                sx={{
                  backgroundImage: "url(/static/Servicios.png)",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  minHeight: "200px",
                }}
              ></Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto",
                  textAlign: "left",
                }}
                marginBottom="30px"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="26px"
                  >
                    <strong>Plataforma Digital Compartida</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    Crear una plataforma en línea donde las cooperativas puedan
                    acceder a herramientas, recursos y soluciones tecnológicas.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: "auto",
                  textAlign: "left",
                }}
                marginBottom="30px"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="26px"
                  >
                    <strong>Capacitación y Talleres</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    Ofrecer programas de formación continua en nuevas
                    tecnologías emergentes, innovación, gestión, liderazgo, etc.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: "auto",
                  textAlign: "left",
                }}
                marginBottom="30px"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="26px"
                  >
                    <strong>Asesoría Personalizada</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    Proporcionar asesoramiento específico para cada cooperativa
                    en su camino hacia la innovación.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Benefits;
