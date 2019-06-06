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

    /*axios.post('/retrieveIsMobile',{


      })
        .then(function (response) {
          console.log("This is the response "+response)
          console.log("This is the object keys "+Object.keys(response))
          console.log("This is the response data "+response.data);

        })
        .catch(function (error) {
          console.log("This is the error "+error);
        });*/

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




    return (


      <div
        style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover'

        }}

        >
    {/*  <Header
        brand=""
        links={<HomePageLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "secondary"
        }}
      />
*/}
<HeadInfo/>
<header id=""  style={{backgroundColor:"white", margin:"0",padding:"0"}}>


	<div className="tp-header-in js-gmenu-wrapper" data-menu="false">
		<p className="tp-header-logo">NBA Interview<a href="" className="tp-header-logo-anchor"><img src="" alt=""/></a></p>
<div style={{float:"right"}}>




</div>
	</div>


	</header>
<div >

<div style={{width:divWidth, margin:"0 auto"}}>

{/*<FrontRetrievePage siteLocation={"front"}/> */}
  {/*<MainNav/>*/}
  <Search/>
  <CardNew/>

</div>



</div>

        <Footer
          style={{heigh:"10vh"}}
          content={
            <div style={{heigh:"10vh"}}>

              <div className={landingPageStyle.right}>
                &copy; {1900 + new Date().getYear()}, made by{" "}
                Peter Larrimore.

              </div>
            </div>
          }
        />
      </div>
    );
  }



}


/*const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})*/

export default Index
