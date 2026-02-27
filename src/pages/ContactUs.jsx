import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Fade, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fade in timeout={800}>
      <Box>
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
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
            <Typography variant="h1" sx={{ color: 'white', mb: 3 }}>
              Get in Touch
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
              We'd love to hear from you. Reach out to discuss partnership opportunities.
            </Typography>
          </Container>
        </Box>

        {/* Contact Form & Info */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              {/* Contact Form */}
              <Grid item xs={12} md={7}>
                <Paper elevation={0} sx={{ p: { xs: 4, md: 5 }, border: '1px solid', borderColor: 'grey.200' }}>
                  <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 700 }}>
                    Send us a Message
                  </Typography>

                  {submitted && (
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        bgcolor: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid',
                        borderColor: 'success.main',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography sx={{ color: 'success.dark', fontWeight: 600 }}>
                        ✓ Thank you! Your message has been sent.
                      </Typography>
                    </Box>
                  )}

                  {error && (
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        bgcolor: 'rgba(211, 47, 47, 0.1)',
                        border: '1px solid',
                        borderColor: 'error.main',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography sx={{ color: 'error.dark', fontWeight: 600 }}>
                        {error}
                      </Typography>
                    </Box>
                  )}

                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      required
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Phone (Optional)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={6}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>
                </Paper>
              </Grid>

              {/* Contact Information */}
              <Grid item xs={12} md={5}>
                <Box sx={{ position: 'sticky', top: 100 }}>
                  <Typography variant="h5" sx={{ mb: 4, color: 'text.primary', fontWeight: 700 }}>
                    Contact Information
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      mb: 3,
                      bgcolor: 'rgba(192, 57, 43, 0.05)',
                      border: '1px solid rgba(192, 57, 43, 0.1)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '8px',
                          bgcolor: 'primary.main',
                          color: 'white',
                        }}
                      >
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
                          info@iciep.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '8px',
                          bgcolor: 'primary.main',
                          color: 'white',
                        }}
                      >
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                          Locations
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
                          Philadelphia, PA<br />
                          Chicago, IL
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      bgcolor: 'grey.50',
                      border: '1px solid',
                      borderColor: 'grey.200',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      We partner with management teams to unlock value and drive sustainable growth.
                      Contact us to explore how we can help your business reach its full potential.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactUs;
