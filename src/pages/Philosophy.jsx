import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimelineIcon from '@mui/icons-material/Timeline';

const Philosophy = () => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={800}>
      <Box>
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192, 57, 43, 0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.15em',
                mb: 2,
                display: 'block',
              }}
            >
              PHILOSOPHY
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 3,
              }}
            >
              Our Philosophy
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'grey.400',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Building partnerships that transform businesses and unlock exceptional value
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              {/* Left - Content */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '12px',
                    bgcolor: 'rgba(192, 57, 43, 0.08)',
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  <LightbulbIcon sx={{ fontSize: 40 }} />
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Unlock Your Capital
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                  }}
                >
                  ICI Equity Partners transforms the capabilities of businesses we
                  invest in, unlocking opportunities for expanded market share,
                  innovative products, new markets, and diversified sales channels.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                  }}
                >
                  We work closely with management teams to identify and capitalize
                  on growth opportunities that drive sustainable, long-term value creation.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate('/approach')}
                >
                  Our Approach
                </Button>
              </Grid>

              {/* Right - Visual Card */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '12px',
                      bgcolor: 'rgba(192, 57, 43, 0.08)',
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    <TimelineIcon sx={{ fontSize: 40 }} />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      color: 'text.primary',
                      fontWeight: 700,
                    }}
                  >
                    Growth to Exit
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    We partner with management teams who envision a strategic sale
                    or IPO as the ultimate outcome.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    Our goal is to prepare your business for a successful exit that
                    maximizes value for all stakeholders through:
                  </Typography>

                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Best-in-class governance', 'Operational excellence', 'Strategic positioning', 'Maximized valuation'].map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                        <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            py: { xs: 8, md: 10 },
            bgcolor: 'grey.50',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: 'text.primary',
              }}
            >
              Partnership-Driven Success
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.8,
              }}
            >
              Our philosophy is rooted in the belief that successful investments
              require more than capital—they require genuine partnership, strategic
              vision, and operational excellence.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/investments')}
            >
              View Our Work
            </Button>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Philosophy;
