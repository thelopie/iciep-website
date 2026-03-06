import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Focus = () => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={800}>
      <Box>
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 8, md: 10 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(228, 61, 48, 0.1) 0%, transparent 70%)',
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
              FOCUS
            </Typography>
            <Typography variant="h1" sx={{ color: 'white', mb: 3 }}>
              Our Focus
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'grey.400',
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              We invest exclusively in businesses that serve private equity firms and their portfolio companies.
              Our sector specialization allows us to evaluate opportunities with speed, conviction, and operational insight.
            </Typography>
          </Container>
        </Box>

        {/* Main Content - Single flowing section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            {/* Sector Concentration */}
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.15em',
                mb: 4,
                display: 'block',
                textAlign: 'center',
              }}
            >
              SECTOR CONCENTRATION
            </Typography>

            <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
              {/* Technology for Private Equity */}
              <Grid item xs={12} md={6}>
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
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '10px',
                      bgcolor: 'rgba(228, 61, 48, 0.08)',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Technology for Private Equity
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    Software platforms that support:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {[
                      'Portfolio monitoring and reporting',
                      'Fund operations and workflow automation',
                      'Compliance and governance',
                      'Data aggregation and analytics',
                      'Operational performance tracking',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8 }}>
                    We prioritize mission-critical systems embedded in investment and portfolio processes.
                  </Typography>
                </Paper>
              </Grid>

              {/* Professional Services */}
              <Grid item xs={12} md={6}>
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
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px -10px rgba(228, 61, 48, 0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '10px',
                      bgcolor: 'rgba(228, 61, 48, 0.08)',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    <MiscellaneousServicesIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Professional Services for PE & Portfolio Companies
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    Specialized service providers that deliver measurable operational and financial impact, including:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {[
                      'Finance and accounting solutions',
                      'Operational performance improvement',
                      'Strategic advisory and execution support',
                      'Technology-enabled outsourced services',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8 }}>
                    We focus on businesses with durable client relationships and recurring revenue characteristics.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Investment Profile & Why This Niche */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
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
                  INVESTMENT PROFILE
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
                  {[
                    'Lower middle market',
                    'Flexible structures including minority investments',
                    'Founder transitions and platform builds',
                    'Recurring or highly repeat business models',
                    'Strong customer retention within the PE ecosystem',
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 1.5,
                        borderRadius: '10px',
                        bgcolor: 'grey.50',
                        border: '1px solid',
                        borderColor: 'grey.200',
                      }}
                    >
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(228, 61, 48, 0.05) 0%, rgba(228, 61, 48, 0.02) 100%)',
                    border: '1px solid rgba(228, 61, 48, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Why This Niche
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    Private equity firms increasingly rely on specialized products and services to drive
                    portfolio performance and manage complexity.
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    We believe this ecosystem presents a compelling opportunity for focused ownership
                    and disciplined value creation.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact CTA */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
              Ready to Connect?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, color: 'grey.400', fontSize: '1.125rem', lineHeight: 1.8 }}
            >
              For investment opportunities or partnership inquiries, please contact us.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Focus;
