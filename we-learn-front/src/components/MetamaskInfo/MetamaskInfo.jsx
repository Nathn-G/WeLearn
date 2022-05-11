import React, { useEffect, useState } from "react";
import axios from 'axios'

const API = import.meta.env.VITE_REACT_URL

class Address extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        nb_lrn: 0,
        nb_bnb: 0,
      };
    }
  
    async componentDidMount() {
        await axios.get(API + '/wallet_info?wallet=' + this.props.userAddress).then(res => {
           console.log(res);
           this.setState({ nb_lrn : res.data.data.lrn, nb_bnb : res.data.data.bnb })
        })
    }

    render() {
      return (
        <>
        <span className="nav-tokens">
          {this.state.nb_lrn}
          <img className="nav-tokens-img"
            src="/src/images/LRNlogo.png"
            alt="LRN"      
            />
        </span>
        <span className="nav-tokens">
          {this.state.nb_bnb}
          <img className="nav-tokens-img"
            src="/src/images/bnb.png"
            alt="BNB"      
            />
        </span>
        </>
      );
    }
}

export default Address;