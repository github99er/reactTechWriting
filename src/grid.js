import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { GitHub } from "@material-ui/icons";
import { AppBar, Toolbar, Button, Fab } from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import MyCard from "./Card";
import MyCardTwo from "./CardTwo";
import MyCardThree from "./CardThree";
import MyCardFour from "./CardFour";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    alignContent: "center",
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(10),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(0));
  };

  return (
    <Grid
      container
      className="myGrid"
      spacing={10}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={2}>
        <Paper>
          <MyCard />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <MyCardTwo />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <MyCardFour />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <MyCardThree />
        </Paper>
      </Grid>
    </Grid>
  );
}
