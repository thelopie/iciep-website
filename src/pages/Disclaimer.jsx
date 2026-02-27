import { Box, Container, Typography, Fade, Paper } from '@mui/material';

const Disclaimer = () => {
  return (
    <Fade in timeout={800}>
      <Box>
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
              Disclaimer
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
              <Typography variant="h4" sx={{ mt: 3, mb: 3, color: 'text.primary' }}>
                Interpretation and Definitions
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                The disclaimer establishes that capitalized terms have specific meanings throughout the document:
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 3, color: 'text.secondary' }}>
                <li><strong>Company:</strong> ICI Equity Partners LLC, based in Philadelphia, PA</li>
                <li><strong>You:</strong> The individual or entity accessing the service</li>
                <li><strong>Website:</strong> http://www.iciep.com</li>
                <li><strong>Service:</strong> Refers to the website itself</li>
              </Box>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Primary Disclaimer Statement
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The company states that website information serves general purposes only. We disclaim responsibility
                for content errors and reserve the right to modify materials without notice. The service warranty
                excludes harmful components, and we provide no guarantees regarding virus-free operations.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                External Links Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                ICI Equity Partners does not maintain affiliated external websites and cannot verify their accuracy,
                relevance, timeliness, or completeness.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Errors and Omissions Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                Despite precautions, errors may occur due to changing laws and regulations, creating potential
                delays or inaccuracies in provided information.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Fair Use Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The company may utilize copyrighted material under fair use protections per U.S. Copyright law
                Section 107. Users requiring broader usage rights must obtain copyright owner permission.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Views Expressed Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                The site may contain author opinions not representing official company policy. User comments
                remain their sole responsibility.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                No Responsibility Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                Information is provided without legal, accounting, or tax advice implications and should not
                substitute professional consultation.
              </Typography>

              <Typography variant="h4" sx={{ mt: 5, mb: 3, color: 'text.primary' }}>
                Use at Your Own Risk Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                All information is provided "as-is" without completion or accuracy guarantees, with no liability
                for decisions based on provided content.
              </Typography>

              <Box
                sx={{
                  mt: 6,
                  p: 3,
                  bgcolor: 'rgba(192, 57, 43, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(192, 57, 43, 0.1)',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  For questions regarding this disclaimer, please visit our{' '}
                  <a href="/contact-us" style={{ color: '#C0392B', textDecoration: 'none' }}>
                    contact page
                  </a>{' '}
                  or email us at info@iciep.com.
                </Typography>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
};

export default Disclaimer;
