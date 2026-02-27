import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Value Creation',
      description: 'Transforming capabilities to unlock market opportunities and sustainable growth.'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
      title: 'Strategic Partnership',
      description: 'Long-term commitment with management teams who share our vision.'
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Exit Focused',
      description: 'Preparing businesses for successful IPOs or strategic acquisitions.'
    }
  ];

  return (
    <Fade in timeout={800}>
      <Box>
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
              background: 'radial-gradient(circle at 20% 50%, rgba(192, 57, 43, 0.1) 0%, transparent 50%)',
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
              <Grid item xs={12} md={6}>
                <Box sx={{ maxWidth: '600px' }}>
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
                    Building Value,<br />
                    Driving <Box component="span" sx={{ color: 'primary.main' }}>Growth</Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'grey.300',
                      mb: 4,
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                    }}
                  >
                    An operationally-focused private equity investor partnering with
                    North American companies to unlock their full potential through
                    strategic capital and operational excellence.
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => navigate('/philosophy')}
                    >
                      Our Philosophy
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/approach')}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      Our Approach
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Right side - Glass Card */}
              <Grid item xs={12} md={6}>
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
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      mb: 3,
                      fontWeight: 700,
                    }}
                  >
                    Investment Focus
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Manufacturing', 'Distribution & Retail', 'Financial Services', 'Life Sciences & Healthcare', 'Higher Education'].map((sector, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          borderRadius: '12px',
                          bgcolor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(192, 57, 43, 0.1)',
                            borderColor: 'rgba(192, 57, 43, 0.3)',
                            transform: 'translateX(8px)',
                          },
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
                        <Typography sx={{ color: 'grey.300', fontSize: '1rem' }}>
                          {sector}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                  fontWeight: 700,
                }}
              >
                Why Partner with ICI?
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
                We combine strategic capital with hands-on operational expertise
                to transform businesses and maximize value.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
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
                        boxShadow: '0 20px 40px -10px rgba(192, 57, 43, 0.15)',
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
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Home;
