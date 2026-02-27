import { Box, Container, Typography, Paper, Fade } from '@mui/material';
import PendingIcon from '@mui/icons-material/Pending';

const Investments = () => {
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
              background: 'radial-gradient(circle, rgba(192, 57, 43, 0.08) 0%, transparent 70%)',
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
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 3,
              }}
            >
              Our Investments
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
              Building exceptional companies across key industry sectors
            </Typography>
          </Container>
        </Box>

        {/* Placeholder Content */}
        <Box
          sx={{
            py: { xs: 10, md: 16 },
            bgcolor: 'background.default',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 5, md: 8 },
                textAlign: 'center',
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  p: 3,
                  borderRadius: '16px',
                  bgcolor: 'rgba(192, 57, 43, 0.08)',
                  color: 'primary.main',
                  mb: 4,
                }}
              >
                <PendingIcon sx={{ fontSize: 64 }} />
              </Box>

              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Portfolio Showcase<br />Coming Soon
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                We're currently building out our portfolio showcase to highlight
                the exceptional companies we've partnered with and the success
                stories we've helped create.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 3,
                  mt: 6,
                  pt: 4,
                  borderTop: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                    $500M+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Capital Deployed
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                    25+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Portfolio Companies
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                    15+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Successful Exits
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Investments;
