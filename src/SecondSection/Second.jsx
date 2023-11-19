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

const SecondSection = () => {
  return (
    <Grid container justifyContent="space-between" spacing={5}>
    
      <Grid item xs={12} md={2} className={styles.details}>
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          justifyContent={"center"}
          spacing={5}
        >
          <Box>photo1</Box>
          <Box>photo2</Box>
          <Box>photo3</Box>
          <Box>photo4</Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} className={styles.details}>
        <Box style={{ backgroundColor: "#8BB8A8" }}>Mainphoto</Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        alignItems="center"
        className={styles.detailsBook}
      >
        <Stack spacing={5}>
          <Box>Header</Box>
          <Box>descriptions</Box>
          <Box>Button</Box>

          <Box>Information</Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
