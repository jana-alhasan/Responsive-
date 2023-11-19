import { AppBar,Toolbar,Typography } from "@material-ui/core";
import styles from "./style.module.css";

const Header = () => {
  return ( 
    <AppBar>
      <Toolbar className={styles.bg}>
      </Toolbar>
    </AppBar>
   );
}
 
export default Header;