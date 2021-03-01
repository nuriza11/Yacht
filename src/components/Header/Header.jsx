import React, { useContext, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { authContext } from '../../contexts/AuthContext';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const { loginUser, getLoginUser } = useContext(authContext);

  useEffect(() => {
    getLoginUser()
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', '[]');
    }
    if (loginUser[0]) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      currentUser.push(loginUser[0])
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
  }, [loginUser])

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    localStorage.setItem('currentUser', JSON.stringify([]))
    getLoginUser()
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/register">
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
      {loginUser.length ? <Link to="/">
        <MenuItem onClick={handleMenuClose}>LogOut</MenuItem>
      </Link> : <Link to="/login">
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>}

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }}>
        <Toolbar>
          <Link to='/'>
            <img style={{ width: '50px', height: '50px', borderRadius: '100%' }} src='https://image.freepik.com/free-vector/simple-sailing-yacht-silhouette-logo-design-inspiration_57043-361.jpg' />
          </Link>
          <Button className="current__user-header" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {loginUser[0]?.email}
          </Button>
          <Typography className={classes.title} variant="h6" noWrap style={{ color: '#0e233a', fontWeight: 600 }}>
          </Typography>
          <div className={classes.grow} />
          <div className="hamburger-menu " style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="menu__toggle" />
            <label htmlFor="menu__toggle" className="menu__btn">
              <span></span>
            </label>
            <ul className="navbar__menu menu__box">
              <li className="navbar__item"></li>
              <a href="tel:+772" className="navbar__item-tel">+(996)772-89-33-12</a>
              <Link className="charter-link" to='/charters'>
                <li className="navbar__item">CHARTERS</li>
              </Link>
              <Link className="shop-link" to='/products'>
                <li className="navbar__item">SHOP</li>
              </Link>
              <Link to='/wishes'>
                <li className="navbar__item icons"><FavoriteIcon /></li>
              </Link>
              <Link className="shopping-cart-link" to='/shopping-cart'>
                <li className="navbar__item icons__navbar"><ShoppingCartIcon />
                </li>
              </Link>
              <li className="login__form">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton></li>
            </ul>
          </div>
          <div className={classes.sectionDesktop}>
          </div>
          <div className={classes.sectionMobile}>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}