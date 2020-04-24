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
import LinkIcon from "@material-ui/icons/Link";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    minWidth: 100,
    height: 470,
  },
  media: {
    paddingTop: "50.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  CardHeader: {
    color: "#fff",
  },
}));

export default function MyCardFour() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="MyCard" className="headertext">
      <Card
        className={classes.root}
        style={{ backgroundColor: "#20232a", color: "#fff" }}
      >
        <CardHeader
          title="Ripple Transaction User Troubleshoot"
          style={{ backgroundColor: "#20232a", color: "#fff" }}
        />
        <CardMedia
          style={{ backgroundColor: "#20232a", color: "#fff" }}
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ backgroundColor: "#20232a", color: "#fff" }}
          ></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ backgroundColor: "#20232a", color: "#fff" }}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Click the link icon below to see article
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            href="https://github.com/github99er/RippleTransaction"
            target="_blank"
            aria-label="GitHub"
            style={{ backgroundColor: "#20232a", color: "#fff" }}
          >
            <LinkIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Methods:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>hell.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
