import { Collapse, IconButton, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const myUseStyles = (bg) => {
  const tmpStyles = makeStyles((theme) => ({
    goDownIcon: {
      color: "#42a5f5",
      fontSize: "4rem",
    },
    container: {
      width: "100%",
      textAlign: "center",
      minHeight: "80vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(assets/${bg})`,
      marginBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        minHeight: '60vh',
        marginBottom: "1.5rem"
      },
    },
  }));
  return tmpStyles;
};

const Hero = ({ renderTitle, bg }) => {
  const styles = myUseStyles(bg)();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={styles.container}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={90}
      >
        <div
          style={{
            backgroundColor: "rgba(200,200,200, 0.4)",
          }}
        >
          {renderTitle()}
        </div>
        <Scroll to="main" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={styles.goDownIcon} />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
};

export default Hero;
