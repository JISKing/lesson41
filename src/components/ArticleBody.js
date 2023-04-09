import React, { Component } from "react";
import LangContext from "./lang-context";

class ArticleBody extends Component{
  render(){
   return (
    <LangContext.Consumer>
     {
      (context) => {
       return (
       <div className="article__body">
        <h3 className="article__description">
         {context.description}
        </h3>
        <p className="article__description--text">
          {context.description_text}
        </p>
       </div>
       )}}
     </LangContext.Consumer>)}}

export default ArticleBody;
