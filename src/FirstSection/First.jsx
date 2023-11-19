import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  InputAdornment,
  Link,
  Hidden,
  Grid,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import styles from "./style.module.css";

const FirstSection = () => {
  return (
    <Grid container justifyContent="space-between" spacing={5}>
      <Grid item xs={12} md={6} className={styles.details}>
        <Stack alignItems="center" justifyContent={"center"} spacing={5}>
          <Box >Button</Box>
          <Box>header</Box>
          <Box>description</Box>
          <Box>Button</Box>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        alignItems="center"
        justifyContent={"center"}
        className={styles.details2}
      >
        <Stack direction={"row"} spacing={5}>
          <Hidden mdDown>
            <Box style={{ backgroundColor: "#AA998F" }}>Discount</Box>
          </Hidden>
          <Box style={{ backgroundColor: "#D1BE9C", height: "444.617px" }}>
            Photo
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
