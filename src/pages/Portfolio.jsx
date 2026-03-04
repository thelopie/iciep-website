import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Portfolio = () => {
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
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(228, 61, 48, 0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
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
              PORTFOLIO
            </Typography>
            <Typography variant="h1" sx={{ color: 'white', mb: 3 }}>
              Our Portfolio
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
              We are owners and active partners in the businesses we build and invest&nbsp;in.
            </Typography>
          </Container>
        </Box>

        {/* Mainsail Analytics */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              {/* Main Info */}
              <Grid item xs={12} md={7}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 5 },
                    border: '1px solid',
                    borderColor: 'grey.200',
                    height: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/mainsail-logo.png"
                    alt="Mainsail Analytics"
                    sx={{
                      height: { xs: 50, md: 60 },
                      width: 'auto',
                      mb: 3,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                    }}
                  >
                    Mainsail Analytics is a SaaS platform that enables private equity firms and portfolio
                    companies to unlock measurable value. Their proprietary AI product solutions deliver
                    real-time procurement intelligence (VirtualCPO), sharper deal insights (Deal Focus),
                    and portfolio-wide clarity (FundVUE).
                  </Typography>

                  <Button
                    variant="outlined"
                    size="large"
                    href="https://www.mainsailanalytics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                  >
                    Visit Mainsail Analytics
                  </Button>
                </Paper>
              </Grid>

              {/* Our Role & Focus Areas */}
              <Grid item xs={12} md={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      bgcolor: 'rgba(228, 61, 48, 0.05)',
                      border: '1px solid rgba(228, 61, 48, 0.1)',
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                      Our Role
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Founder-led, control-oriented investment.
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Active involvement in strategic direction and operational development.
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      bgcolor: 'grey.50',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      flex: 1,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                      Focus Areas of Engagement
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {[
                        'Platform development',
                        'Financial reporting infrastructure',
                        'Customer expansion initiatives',
                        'Operational scalability',
                      ].map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                          <Typography sx={{ color: 'text.secondary' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            py: { xs: 8, md: 10 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ mb: 3, color: 'white' }}>
              Partnership Inquiries
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'grey.400', fontSize: '1.125rem', lineHeight: 1.8 }}
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

export default Portfolio;
