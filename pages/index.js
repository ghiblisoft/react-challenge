//Setup page like mockup
import React from "react";
import ReactDOM from "react-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "~/components/Header/Header.jsx";
import Footer from "~/components/Footer/Footer.jsx";
import GridContainer from "~/components/Grid/GridContainer.jsx";
import GridItem from "~/components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import Button from '@material-ui/core/Button';

import landingPageStyle from "~/assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import Card from "~/components/Card/Card.jsx";
import CardBody from "~/components/Card/CardBody.jsx";

import imagesStyles from "~/assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "~/assets/jss/material-kit-pro-react.jsx";

import $ from 'jquery';
import {Link} from '../routes'
import {Router} from '../routes'
import axios from 'axios';
//import FrontRetrievePage from "~/views/ImageRetrievePage/FrontRetrievePage.jsx";
import HeadInfo from './head'
import Search from "./Main/Search/Search";
import CardNew from "./Main/CardNew/CardNew";

//import Main from "./Main/index";


/*
var MobileDetect = require('mobile-detect'),
    md = new MobileDetect(req.headers['user-agent']);
*/
class Index extends React.Component {




  constructor(props) {
    super(props);

    this.state = {
      players:[{name:""}],
      teams:[{name:""}],
      isMobile:true
    };

  //  this.handleClick = this.handleClick.bind(this);

   this.handleClick = this.handleClick.bind(this);
  }

  /*static getInitialProps ({ reduxStore, req }) {
      const isServer = !!req
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
      reduxStore.dispatch(serverRenderClock(isServer))

      return {}
  }*/
  componentWillMount()
  {
    this.setState({isMobile:true})
    this.setState({players:[{name:""}]})
//console.log("This is the mobile detect value "+md.mobile())
var mobile = require('is-mobile');

console.log("this is is mobile "+mobile());
this.setState({isMobile:mobile()})



   }
   handleWindowSizeChange = () => {

 };
   componentWillUnmount() {

   }
  componentDidMount() {

    var that=this



    axios.post('/retrievePlayers',{


        })
          .then(function (response) {
          //  console.log(response.data);
          //  console.log("This is the response "+response.data[0])
          //  console.log("This is the response 0 key "+response.data[0].Key)
          console.log("This is the response "+response)
          console.log("This is the response.data "+response.data)
          console.log("This is keys of response. data "+Object.keys(response.data))
  var teamObject=response.data
  console.log("This is team object slot 1 "+teamObject["1"])


              axios.get('http://localhost:3008/players')
                .then(function (response) {
                  console.log("response "+response);
                  console.log("respone data "+response.data)
                  console.log("This is the player name "+response.data[0].name)
                    console.log("This is the players object keys of response.data[0] "+Object.keys(response.data[0]))
  var playersArray=response.data

  for (var i=0;i<playersArray.length;i++)
  {

  var id=playersArray[i].id.toString()

  var teamName=teamObject[id]
  //console.log("This is the team name "+teamName)
//add team name to players array object at specific array slot
playersArray[i].teamName=teamName

//console.log("This is is players array team name at slot "+ i+" "+playersArray[i].teamName)
//add players array to state

  }
that.setState({players:playersArray})


                })
                .catch(function (error) {
                  console.log(error);
                });





          })
          .catch(function (error) {
            console.log("This is the error in retrieve players"+ error);
          });





  }


    handleClick() {
    console.log("Trying handle click")
    }


  render() {
//    const { classes, ...rest } = this.props;

    const siteLocation="front"
  //  const { width } = this.state;
    // const isMobile = width <= 500;
  //   console.log(" is mobile in front retrieve page"+isMobile )
  console.log("This is is mobile "+this.state.isMobile)
  function handleAbout(e) {
  //  e.preventDefault();
    console.log('The about was clicked ');
     Router.pushRoute('aboutus')
  }
  function handleContact(e) {
  //  e.preventDefault();
    console.log('The contact was clicked ');
     Router.pushRoute('contactus')
  }

  function handleClickNew(e) {
  //  e.preventDefault();
    console.log("Calling local handle click");
    // Router.pushRoute('contactus')
  }

     if (this.state.isMobile==true) {
       var isMobile="true"
       console.log("is mobile is true in front retrieve page")
       var divHeight="98vw"
       var divWidth="98vw"





     }
     else {
       var isMobile="false"
         console.log("is mobile is false in front retrieve page")
         var divHeight="70vw"
         var divWidth="70vw"



     }


var buttons=[]
/*
buttons.push(

<div>
<Button type="button">Cars For Sale</Button><Button type="button">Parts For Sale</Button>
</div>



)

*/

/*
for (var i=0;i < this.state.ids.length;i++)
{

var row=this.state.ids[i]



itemsNew.push(      [
      <div style={{color:"black",textAlign:"center"}}>



     <img src={row.thumbnailUrl} style={{height:"98vh",width:"98vw"}} onClick={() => handleThumbnailClick(row._id)}  /> <br/>

      <p onClick={() => handleThumbnailClick(row._id)} style={{fontSize:"150%",color:"black",textAlign:"center"}}> Year: {row.year} <br/> Make: {row.make} <br/>  Model:{row.model} <br/>
      Price: {row.price}</p>





  </div>
     ]

     )

}
*/

const itemsNew=[]
for (var i=0;i < this.state.players.length;i++)
{
//console.log("This is the players name "+this.state.players[i].name+" this is the team name "+this.state.players[i].teamName)
//var row=this.state.ids[i]



itemsNew.push(      [
      <div style={{}}>


  <CardNew name={this.state.players[i].name} image={this.state.players[i].image} college={this.state.players[i].college} position={this.state.players[i].position} teamName={this.state.players[i].teamName}  />
<br/>

  </div>
     ]

     )


}

    return (


      <div
        style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover'

        }}

        >

<HeadInfo/>
<header id=""  style={{backgroundColor:"white", margin:"0",padding:"0"}}>


  <div className="tp-header-in js-gmenu-wrapper" data-menu="false" >
		<p className="tp-header-logo"><a href="" className="tp-header-logo-anchor">
      <img src="https://i.ibb.co/pWsT1Kf/NBA-logo-squarish.jpg" alt=""/></a></p>

	</div>


	</header>
<div >



{/*<FrontRetrievePage siteLocation={"front"}/> */}
  {/*<MainNav/>*/}
  <div style={{margin: "0 auto", width:"20vw",height:"10vh"}}>


    <Search/>
    </div>
  <div style={{ height:"55vh",overflowY: "scroll",margin: "0 auto", width:"20vw"}}>


{itemsNew}
</div>





</div>
<div style={{position: "absolute",bottom: ".01vh", width: "100%"}}>
  <div style={{height:"5vh"}}>

    <div className={landingPageStyle.right}>
      &copy; {1900 + new Date().getYear()}, made by{" "}
      Peter Larrimore.

    </div>
  </div>
      </div>
      </div>
    );
  }



}




export default Index
