import React,{useState} from 'react'
import {AppBar ,Drawer,Link} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '100px 100px 100px 100px',
    backgroundColor: alpha('#0002', 0.1),
    '&:focus-within': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
      borderColor:'#555',
    },
    marginRight: theme.spacing(2),
    // marginLeft: 0,
    flexGrow:1,
    borderWidth:1,
    borderColor:'#000',
    borderStyle:'solid',    
    width: 'auto',
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'fill',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    marginInline:'auto',
    height:'100%',
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
    },
  }));
  



export default function NavBarSection() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';


    
    const Links = ['Developent','Business','Finance & Accountingg','IT & Software','Office Productivity',
                    'Personal Development','Design','Marketing','Health & Fitness','Music']
    const LinksMenu = (style)=>
                Links.map(l=>
                    <Link href={"/"+l} 
                          underline="hover"
                          title={l} 
                          noWrap
                          variant='subtitle1' 
                          {...style} 
                          >
                            {l}
                    </Link>
                    )


    const DesctopSize = () => (
        <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
            <img width="75px" style={styles.LogoLarge} src="./src/logo-udemy.svg" />
            <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginBlock:'auto',marginInline:'1%' }}
            >
                Categorys
            </Typography>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for anything"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginBlock:'auto',marginInline:'1%' }}
            >
                Udemy Business
            </Typography>
            <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginBlock:'auto',marginInline:'1%' }}
            >
                Instructor
            </Typography>
            <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginBlock:'auto',marginInline:'1%' }}
            >
                My learning
            </Typography>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="success">
                    <FavoriteBorderIcon />
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                <NotificationsNoneIcon />
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
            >
                <AccountCircle />
            </IconButton>
        </Box>
    );

    const [open, setopen] = useState(false)
    

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const MobileSize = () => (
        <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100vw' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={()=>setopen(!open)}
            >
                <MenuIcon />
            </IconButton>
            <img width="75px" style={styles.Logo} src="./src/logo-udemy.svg" />
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <SearchIcon />
            </IconButton>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <ShoppingCartIcon />
            </IconButton>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={styles.container}>
                <Toolbar>
                    <MobileSize />
                    <DesctopSize />
                </Toolbar>
                {
                    useMediaQuery(useTheme().breakpoints.up('md'))?<div style={{borderBottom:'1px solid #b4b4b4',width:'99.9vw',marginInline:"-2%"}}/>:<></>
                }
                <Toolbar sx={{flexDirection:'row',flexGrow: 1,display: { xs: 'none', md: 'flex'} } }>
                        <LinksMenu style={{marginBlock:"auto",marginInline:'0.7%'}} />
                </Toolbar>
            </AppBar>
            <React.Fragment key='left'>
            <Drawer
                    anchor='left'
                    open={open}
                    onClose={()=>setopen(!open)}
                    sx={{'& .MuiPaper-root':{width:'40%',paddingTop:'50px'}}}
                    children={
                        <LinksMenu style={{marginBlock:"2%",marginInline:'auto'}} />
                    }/>
            </React.Fragment>
        </Box>
    );
}

const styles = {
    container: {
        padding: '0px 2%',
        backgroundColor: '#fff',
        color: "black",

    }
    , Logo: {
        width: '75px',
        margin: 'auto'
    }
    , LogoLarge: {
        width: '100px',
    }
}
