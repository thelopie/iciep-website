import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = ({ sx = {} }) => {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          ...sx,
        }}
      >
        {/* Red Circle with ICI */}
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '0.05em',
            }}
          >
            ICI
          </Typography>
        </Box>

        {/* Stacked Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              lineHeight: 1.2,
            }}
          >
            EQUITY
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              lineHeight: 1.2,
            }}
          >
            PARTNERS
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Logo;
