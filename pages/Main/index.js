import React, { Component } from "react";
import Search from "./Search/Search";
import CardNew from "./CardNew/CardNew";
//import styles from "./styles";

class Main extends Component {
    render() {
        return (
            <div >
                <div >NBA Interview</div>
                <Search  />
                <CardNew />
            </div>
        );
    }
}

export default Main;
