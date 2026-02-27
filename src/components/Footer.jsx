import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Contact Us', href: '/contact-us' },
];

const socialLinks = [
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/ici-equity-partners', label: 'LinkedIn' },
  { icon: <TwitterIcon />, href: 'https://twitter.com/iciequity', label: 'Twitter' },
  { icon: <InstagramIcon />, href: 'http://instagram.com/iciequity/', label: 'Instagram' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Social Media Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: 'text.secondary',
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          {/* Footer Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, sm: 4 },
            }}
          >
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
              textAlign: 'center',
            }}
          >
            Copyright © 2021 ICI Equity Partners LLC. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
