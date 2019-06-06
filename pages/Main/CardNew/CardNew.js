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
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

/*const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const style = {
  ...cardsStyle
};
*/




class CardNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players:[{name:""}],
      teams:[{name:""}]
    };

  //  this.handleClick = this.handleClick.bind(this);

//   this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount()
  {

    this.setState({players:[{name:""}]})
  }

  componentDidMount()
  {




var that=this

axios.get('/retrievePlayers')
  .then(function (response) {
    console.log("response "+response);
    console.log("respone data "+response.data)


  })
  .catch(function (error) {
    console.log("This is the error in retrieve players "+error);
  });

  axios.post('/retrievePlayers',{


      })
        .then(function (response) {
        //  console.log(response.data);
        //  console.log("This is the response "+response.data[0])
        //  console.log("This is the response 0 key "+response.data[0].Key)
        console.log("This is the response "+response)
        console.log("This is the response.data "+response.data)
        console.log("This is keys of response. data "+Object.keys(response.data))


        })
        .catch(function (error) {
          console.log("This is the error in retrieve players"+ error);
        });





    axios.get('http://localhost:3008/players')
      .then(function (response) {
        console.log("response "+response);
        console.log("respone data "+response.data)
        console.log("This is the player name "+response.data[0].name)
          console.log("This is the players object keys of response.data[0] "+Object.keys(response.data[0]))

var players=response.data




  that.setState({players:response.data})
      })
      .catch(function (error) {
        console.log(error);
      });



  }

    render() {
  //
//  const classes = useStyles();


//this.setState({players:[{"name":""}]})

//var fetch = require("fetch").fetchUrl;

//  let url = 'localhost:3008/players';



    return (
        <div >
          {this.state.players[0].name}
                <Paper style={{ maxWidth: "20vw" }} >
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

}
export default CardNew;
