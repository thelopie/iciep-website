import { Box, Container, Typography, Button, Paper, Fade, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BuildIcon from '@mui/icons-material/Build';
import InsightsIcon from '@mui/icons-material/Insights';

const Approach = () => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={800}>
      <Box>
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 8, md: 10 },
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
              background: 'radial-gradient(circle, rgba(228, 61, 48, 0.08) 0%, transparent 70%)',
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
            <Typography variant="h1" sx={{ color: 'white', mb: 3 }}>
              Our Approach
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
              We operate as an independent sponsor, structuring investments on a deal-by-deal basis
              in partnership with aligned capital providers. Our model provides flexibility in transaction
              structuring while maintaining a disciplined underwriting framework.
            </Typography>
          </Container>
        </Box>

        {/* Main Content - Single flowing section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            {/* Independent Sponsor Model & Operator-Led Ownership */}
            <Grid container spacing={4} sx={{ mb: { xs: 5, md: 6 } }}>
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
                    <AccountBalanceIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Independent Sponsor Model
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    Each investment is structured independently, allowing us to:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {[
                      'Align capital with opportunity',
                      'Tailor transaction structures appropriately',
                      'Maintain focus on long-term value creation',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8 }}>
                    We seek capital partners who share a long-term, partnership-oriented perspective.
                  </Typography>
                </Paper>
              </Grid>

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
                    <BuildIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Operator-Led Ownership
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    As founders and active owners, we take a hands-on role in:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {[
                      'Strategic direction',
                      'Financial discipline and reporting',
                      'Go-to-market refinement',
                      'Organizational development',
                      'Scalable infrastructure buildout',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8 }}>
                    Our involvement is practical and execution-focused.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Value Creation Framework & Long-Term Alignment */}
            <Grid container spacing={4}>
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
                    <InsightsIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                    Value Creation Framework
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    We concentrate on initiatives that strengthen durability and scalability:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {[
                      'Revenue model optimization',
                      'Operational process improvement',
                      'Talent alignment and accountability',
                      'Data-driven performance management',
                      'Strategic add-on opportunities where appropriate',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
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
                    Long-Term Alignment
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    We prioritize alignment with management teams and seek to build enduring businesses
                    within our sector focus.
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Our model allows for flexibility in transaction structuring while ensuring that
                    incentives remain aligned across all stakeholders throughout the life of an investment.
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
            <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
              Let's Talk
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

export default Approach;
