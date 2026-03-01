import { useEffect } from 'react';
import { Box, Container, Typography, Fade, Paper } from '@mui/material';
import SEO from '../components/SEO';

const TermsConditions = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('render-event'));
    }
  }, []);

  return (
    <Fade in timeout={800}>
      <Box>
        <SEO pathname="/terms-and-conditions" />
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
              Terms & Conditions
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
                This document establishes rules for using the ICI Equity Partners website (https://www.iciep.com).
                By accessing the site, you accept these terms.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Definitions
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The agreement defines "Client," "You," and "Your" as website visitors, while "Company,"
                "Ourselves," "We," "Our," and "Us" refer to ICI Equity Partners. All parties agree to comply
                with prevailing United States law.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Cookies
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The site uses cookies to enhance functionality. Users consent to cookie usage by accessing the
                website, in accordance with the Privacy Policy.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Intellectual Property
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                ICI Equity Partners and its licensors own all intellectual property rights on the site. Users
                may access content for personal use only and cannot:
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li>Republish material from the site</li>
                <li>Sell, rent, or sublicense content</li>
                <li>Reproduce or duplicate material</li>
                <li>Redistribute website content</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                User Comments
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                While the company doesn't pre-filter comments, it reserves the right to remove inappropriate or
                offensive content. Users warrant they have rights to post comments and that such posts don't
                violate intellectual property laws or contain unlawful material.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Hyperlinking Policy
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                Government agencies, search engines, and news organizations may link to the site without approval.
                Other organizations must request permission and meet specific criteria before linking.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Content Liability
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The company accepts no responsibility for website content. Users agree to defend the company
                against claims arising from their website activities.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The company excludes warranties regarding website accuracy, completeness, or availability.
                Liability limitations don't apply to death, personal injury, or fraudulent misrepresentation.
              </Typography>

              <Box
                sx={{
                  mt: 6,
                  p: 3,
                  bgcolor: 'grey.50',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  If you have any questions about these Terms and Conditions, please contact us through our
                  website or at info@iciep.com.
                </Typography>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default TermsConditions;
