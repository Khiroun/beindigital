import { AppBar, Button, Grid, List, ListItem, SwipeableDrawer, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu'
import Link from "next/link";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  appBar: {
    background: "none",
  },
  appBarWrapper: {
    width: "100%",
    margin: "0 auto",
    backgroundColor: "rgba(50,50,50,0.9)",
  },
  icon: {
    fontSize: "1.2rem",
    fontFamily: "Rubik",
    fontWeight: "1000",
    color: theme.palette.secondary.main,
  },
  appTitle: {
    flexGrow: 1,
  },
  menu: {
    display: "flex",
  },
  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  }
}));

export default function Nav() {
  const styles = useStyles();
  const [drawerActivate, setDrawerActivate] = useState(false)
  const [drawer, setDrawer] = useState(false)
  useEffect(()=>{
    if(typeof window !== "undefined"){
      if(window.innerWidth <= 790){
        setDrawerActivate(true)
      }
      window.addEventListener('resize',()=>{
        if(window.innerWidth <= 790){
          setDrawerActivate(true)
        }
        else{
          setDrawerActivate(false)
        }
      });
    }
  }, [])
  const destroyDrawer = ()=>{
    return (
      <AppBar className={styles.appBar} elevation={0}>
        <Toolbar className={styles.appBarWrapper}>
          <span>
            <Link href="/">
              <img
                src="assets/img/Logo.png"
                alt="bein-digital meilleure agence do communication digitale en Algérie logo"
                height='40px'
              />
            </Link>
          </span>
          <span className={styles.menu}>
            <Link href="/">
              <Button className={styles.icon}>Accueil</Button>
            </Link>
            <Link href="digital">
              <Button className={styles.icon}>Digital</Button>
            </Link>
            <Link href="formations">
              <Button className={styles.icon}>Formation</Button>
            </Link>
            <Link href="communication">
              <Button className={styles.icon}>Communication</Button>
            </Link>
            <Link href="evenements">
              <Button className={styles.icon}>Evenements</Button>
            </Link>
            <Link href="contact">
              <Button className={styles.icon}>Contact</Button>
            </Link>
          </span>
        </Toolbar>
      </AppBar>
    );  
  }

  const createDrawer = ()=>{
    return <div>
      <AppBar className={styles.appBar}>
      <Toolbar className={styles.appBarWrapper}>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {styles.sideBarIcon}
                onClick={()=>{setDrawer(true)}} />

              
            </Grid>
          </Toolbar>
      </AppBar>
      <SwipeableDrawer
         open={drawer}
         onClose={()=>{setDrawer(false)}}
         onOpen={()=>{setDrawer(true)}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(false)}}>
            
            <List>
               <ListItem key = {1} button divider><Link href="/">
              <Button className={styles.icon}>Accueil</Button>
            </Link></ListItem>
               <ListItem key = {2} button divider>
               <Link href="digital">
              <Button className={styles.icon}>Digital</Button>
            </Link>
           
               </ListItem>
               <ListItem key = {3} button divider>
               <Link href="formations">
              <Button className={styles.icon}>Formation</Button>
            </Link>
            
               </ListItem>
               <ListItem button divider>
               <Link href="communication">
              <Button className={styles.icon}>Communication</Button>
            </Link>
            
            
               </ListItem>
               <ListItem button divider>
               <Link href="evenements">
              <Button className={styles.icon}>Evenements</Button>
            </Link>
               </ListItem>
               <ListItem button divider>
               <Link href="contact">
              <Button className={styles.icon}>Contact</Button>
            </Link>
            
               </ListItem>
             </List>

         </div>
       </SwipeableDrawer>
    </div>
  }

  return (
    <div>
      {drawerActivate? createDrawer() : destroyDrawer()}
    </div>
  );
}
