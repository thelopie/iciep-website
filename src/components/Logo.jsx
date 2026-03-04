import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = ({ sx = {} }) => {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
      <Box
        component="img"
        src="/images/ici-logo-color.png"
        alt="ICI Equity Partners"
        sx={{
          height: { xs: 94, md: 115 },
          width: 'auto',
          ...sx,
        }}
      />
    </Link>
  );
};

export default Logo;
