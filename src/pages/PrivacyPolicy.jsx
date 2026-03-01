import { useEffect } from 'react';
import { Box, Container, Typography, Fade, Paper } from '@mui/material';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('render-event'));
    }
  }, []);

  return (
    <Fade in timeout={800}>
      <Box>
        <SEO pathname="/privacy-policy" />
        {/* Hero Banner */}
        <Box
          sx={{
            py: { xs: 8, md: 10 },
            bgcolor: 'secondary.main',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '3rem' } }}>
              Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
              Last Updated: July 14, 2020
            </Typography>
          </Container>
        </Box>

        {/* Content */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
          <Container maxWidth="md">
            <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, border: '1px solid', borderColor: 'grey.200' }}>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                ICI Equity Partners LLC outlines how we collect, use, and disclose personal information when you
                interact with our website and services.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Definitions
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                <strong>Company:</strong> ICI Equity Partners LLC, Philadelphia, PA
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                <strong>Service:</strong> The website at www.iciep.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                <strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                <strong>Cookies:</strong> Small files placed on devices containing browsing history details
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Types of Data Collected
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'text.primary' }}>
                Personal Data
              </Typography>
              <Box component="ul" sx={{ mb: 3, pl: 3, color: 'text.secondary' }}>
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Usage data</li>
              </Box>

              <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'text.primary' }}>
                Usage Data
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li>IP addresses</li>
                <li>Browser type and version</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Device identifiers</li>
                <li>Mobile device information</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Tracking Technologies
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                We use cookies and similar tracking technologies. You can instruct your browser to refuse cookies,
                though some site features may become unavailable.
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'text.primary' }}>
                Cookie Types
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li>Necessary/Essential Cookies (Session)</li>
                <li>Cookies Policy/Notice Acceptance (Persistent)</li>
                <li>Functionality Cookies (Persistent)</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Uses of Personal Data
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li>Service provision and maintenance</li>
                <li>Account management</li>
                <li>Contract performance</li>
                <li>User contact and communication</li>
                <li>Marketing information (unless opted out)</li>
                <li>Request management</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Data Sharing
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                Information may be shared with:
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li>Service providers</li>
                <li>Business partners</li>
                <li>Affiliates</li>
                <li>Other users in public areas</li>
                <li>Third parties during business transfers</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Data Retention
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                Personal data is retained only for as long as is necessary for stated purposes and legal compliance.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Security
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                No method of transmission over the Internet, or method of electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your personal data, we cannot
                guarantee its absolute security.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Children's Privacy
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The service doesn't knowingly collect data from anyone under 13 years old. If you are a parent or
                guardian and you are aware that your child has provided us with personal data, please contact us.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                www.iciep.com/contact-us
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default PrivacyPolicy;
