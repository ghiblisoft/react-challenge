import React from "react";
import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "~/components/Card/Card.jsx";
import CardBody from "~/components/Card/CardBody.jsx";
import CardHeader from "~/components/Card/CardHeader.jsx";
import CardFooter from "~/components/Card/CardFooter.jsx";
import Button from "~/components/CustomButtons/Button.jsx";
import { makeStyles } from '@material-ui/core/styles';

import cardsStyle from "~/assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const style = {
  ...cardsStyle
};
const CardNew = props => {
  const classes = useStyles();
    return (
        <div >
                <Paper style={{ maxWidth: "20vw" }} className={classes.root}>
          <Card profile  raised color="primary">

    <CardHeader image>
      <a href="#pablo" onClick={e => e.preventDefault()}>
        <img
          src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
          alt="..."
        />
      </a>
      <div
        className={cardsStyle.coloredShadow}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
          opacity: "1"
        }}
      />
    </CardHeader>
    <CardBody>
      <h4 className={cardsStyle.cardTitle}>Alec Thompson</h4>
      <h6 className={`${cardsStyle.cardCategory} ${cardsStyle.cardDescription}`}>
        CEO / CO-FOUNDER
      </h6>
    </CardBody>
    <CardFooter profile className={cardsStyle.justifyContentCenter}>

    </CardFooter>

  </Card>
    </Paper>
            <div style={styles.name}>Gordon "Snake" Hayward</div>
            <img src="http://localhost:3008/gordon_hayward.png" alt="player_image" />

            <div>Boston Celtics</div>
        </div>
    );
};

export default CardNew;
