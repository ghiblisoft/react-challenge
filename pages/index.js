import React, { Component } from 'react';
import Link from 'next/link';


class App extends Component {
  render() {
    return (
      <div className="">
        <div className="">
        <Link href="/Home"><div className="menu">Home</div></Link>
              <Link href="/About"><div className="menu">About</div></Link>
              <Link href="/Contact"><div className="menu">Contact</div></Link>

        </div>
      </div>
    );
  }
}

export default App;
