import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Approach', path: '/approach' },
  { label: 'Investments', path: '/investments' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo sx={{ transform: 'scale(0.9)' }} />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            bgcolor: 'grey.100',
            '&:hover': { bgcolor: 'grey.200' }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={NavLink}
              to={link.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: '12px',
                py: 1.5,
                '&.active': {
                  bgcolor: 'rgba(192, 57, 43, 0.08)',
                  color: 'primary.main',
                  fontWeight: 600,
                },
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => { handleContactClick(); handleDrawerToggle(); }}
            sx={{ borderRadius: '12px', py: 1.5 }}
          >
            Contact Us
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'white',
          color: 'text.primary',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            py: 2,
            px: { xs: 2, sm: 4, md: 6 },
            maxWidth: '1400px',
            mx: 'auto',
            width: '100%',
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Box>

          {/* Right: Nav Links + Contact Button (Desktop) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  {({ isActive }) => (
                    <Box
                      sx={{
                        position: 'relative',
                        color: isActive ? 'primary.main' : 'text.secondary',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.9375rem',
                        py: 0.5,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: '2px',
                          bgcolor: 'primary.main',
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)',
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  )}
                </NavLink>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={handleContactClick}
                sx={{ ml: 2 }}
              >
                Contact Us
              </Button>
            </Box>
          )}

          {/* Mobile: Hamburger Menu */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: 'text.primary',
                bgcolor: 'grey.100',
                '&:hover': { bgcolor: 'grey.200' }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
