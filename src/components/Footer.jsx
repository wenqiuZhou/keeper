import React from "react";
import ReactDom from "react-dom";

const date=new Date();
const year=date.getFullYear()

function Footer(){
    return <footer><p> CopyRight@{year}</p></footer>
}

export default Footer;