import { Box, Container, Typography, Button, Paper, Grid, Fade } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const featureCards = [
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 36 }} />,
    title: 'Partner from Growth to Exit',
    description:
      'We implement responsible policies and best-in-class practices that prepare your business for long-term success and a strategic exit.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 36 }} />,
    title: 'Unlock Sustainable Growth',
    description:
      'Our proactive, opportunistic approach identifies and capitalizes on opportunities for sustainable growth across all areas of your business.',
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 36 }} />,
    title: 'Maximize Enterprise Value',
    description:
      'Through operational improvements and strategic initiatives, we enhance performance and increase revenue to maximize enterprise value.',
  },
];

const Approach = () => {
  return (
    <Fade in timeout={800}>
      <Box>
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192, 57, 43, 0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
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
              APPROACH
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 3,
              }}
            >
              Our Approach
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
              Active investment with hands-on operational excellence
            </Typography>
          </Container>
        </Box>

        {/* Active Investor Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    background: 'linear-gradient(135deg, rgba(192, 57, 43, 0.05) 0%, rgba(192, 57, 43, 0.02) 100%)',
                    border: '1px solid',
                    borderColor: 'rgba(192, 57, 43, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 3,
                      color: 'text.primary',
                    }}
                  >
                    An Active Investor
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                    }}
                  >
                    We go beyond financial support, committing time, resources, and expertise
                    to every portfolio company to ensure they have the tools needed to succeed.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                    }}
                  >
                    We establish robust governance frameworks, make strategic investments
                    in technology and capabilities, and pursue value-accretive acquisitions
                    that strengthen market position.
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      mt: 4,
                      bgcolor: 'grey.50',
                      border: '1px solid',
                      borderColor: 'grey.200',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      Find Your Growth
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      Ready to unlock your company's full potential? Let's discuss how
                      our hands-on approach can drive transformative growth.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Feature Cards Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'grey.50',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                How We Create Value
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Our comprehensive approach ensures sustainable growth and
                maximized returns at every stage.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {featureCards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 5,
                      height: '100%',
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-12px)',
                        boxShadow: '0 24px 48px -12px rgba(192, 57, 43, 0.18)',
                      },
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
                      {card.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: 'text.primary',
                        fontWeight: 700,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Final CTA Section */}
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              width: 350,
              height: 350,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192, 57, 43, 0.12) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: 'white',
              }}
            >
              Find Your Exit
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                color: 'grey.400',
                fontSize: '1.125rem',
                lineHeight: 1.8,
              }}
            >
              Ready to unlock the full potential of your business? Let's discuss
              how ICI Equity Partners can help you achieve your growth and exit objectives.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                View Philosophy
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Approach;
