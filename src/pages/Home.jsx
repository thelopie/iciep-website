import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SEO from '../components/SEO';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={800}>
      <Box>
        <SEO pathname="/" />
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: '700px', md: '800px' },
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          }}
        >
          {/* Animated gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(228, 61, 48, 0.1) 0%, transparent 50%)',
              animation: 'pulse 8s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.5 },
                '50%': { opacity: 0.8 },
              },
            }}
          />

          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, sm: 4, md: 6 } }}>
            <Grid container spacing={6} alignItems="center">
              {/* Left side - Content */}
              <Grid item xs={12} md={7}>
                <Box sx={{ maxWidth: '680px' }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      letterSpacing: '0.15em',
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    ICI EQUITY PARTNERS
                  </Typography>

                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      mb: 3,
                      fontWeight: 800,
                    }}
                  >
                    Building and Investing in{' '}
                    <Box component="span" sx={{ color: 'primary.main' }}>businesses that power</Box>{' '}
                    Private Equity.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'grey.300',
                      mb: 4,
                      fontSize: '1.25rem',
                      lineHeight: 1.8,
                    }}
                  >
                    We partner with management teams to build and scale businesses that serve
                    private equity firms and their portfolio companies.
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => navigate('/focus')}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Explore Our Focus
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Right side - Key Principles */}
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: { xs: 4, md: 5 },
                    borderRadius: '24px',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {[
                      'Exclusively focused on the private equity ecosystem',
                      'Investments structured on a deal-by-deal basis with aligned capital partners',
                      'Operator-led approach to long-term value creation',
                    ].map((text, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2.5,
                          borderRadius: '12px',
                          bgcolor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            flexShrink: 0,
                          }}
                        />
                        <Typography sx={{ color: 'grey.300', fontSize: '1.05rem' }}>
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Focus Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                OUR FOCUS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                  fontWeight: 700,
                }}
              >
                We invest exclusively in businesses that support private equity funds and their portfolio companies.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '12px',
                      bgcolor: 'rgba(228, 61, 48, 0.08)',
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                    SaaS for Private Equity
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Mission-critical software that enhances investment operations, portfolio monitoring,
                    compliance, reporting, and workflow automation.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '12px',
                      bgcolor: 'rgba(228, 61, 48, 0.08)',
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    <MiscellaneousServicesIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                    Professional Services for PE & Portcos
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Specialized service providers that improve financial visibility, operational performance,
                    and execution across portfolio companies.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '12px',
                      bgcolor: 'rgba(228, 61, 48, 0.08)',
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    <GpsFixedIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                    Control-Oriented Investments
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Lower middle market opportunities with recurring revenue characteristics,
                    strong customer retention, and durable market positioning.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/focus')}
                endIcon={<ArrowForwardIcon />}
              >
                View Focus
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Portfolio Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'grey.50',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                PORTFOLIO
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                  fontWeight: 700,
                }}
              >
                We are owners and active partners in the businesses we build and invest&nbsp;in.
              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 5 },
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.12)',
                    },
                  }}
                  onClick={() => navigate('/portfolio')}
                >
                  <Box
                    component="img"
                    src="/images/mainsail-logo.png"
                    alt="Mainsail Analytics"
                    sx={{
                      height: { xs: 45, md: 55 },
                      width: 'auto',
                      mb: 3,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    A SaaS platform that harnesses the power of machine learning and generative AI
                    to deliver purpose-built solutions for private equity-backed businesses.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    As founders and operators, we work closely with management to refine strategy,
                    strengthen operations, and support sustainable growth.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/portfolio')}
                endIcon={<ArrowForwardIcon />}
              >
                View Portfolio
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Approach Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                variant="h2"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  fontWeight: 700,
                  maxWidth: '900px',
                  mx: 'auto',
                }}
              >
                We operate as an independent sponsor, structuring investments on a deal-by-deal basis
                in partnership with aligned capital providers.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                Our model allows for flexibility, alignment, and disciplined underwriting while maintaining
                an active, hands-on ownership approach.
              </Typography>
            </Box>

            <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
              {[
                'Operator-led ownership',
                'Sector-focused sourcing',
                'Long-term alignment with management',
                'Scalable value creation initiatives',
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/approach')}
                endIcon={<ArrowForwardIcon />}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Contact CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
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
              background: 'radial-gradient(circle, rgba(228, 61, 48, 0.12) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
              CONTACT
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, color: 'white' }}>
              Get in Touch
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
              For investment opportunities or partnership inquiries, please contact us.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Home;
