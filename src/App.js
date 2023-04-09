import React, { Component } from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  title: "NVIDIA NEWS",
  article__title: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  article__btn: "Read",
  current_lang: "EN",
};
let UA = {
  title: "NVIDIA НОВИНИ",
  article__title: "NVIDIA прискорила AI на Azure",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  article__btn: "Читати",
  current_lang: "UA",
};

let langBtns;
class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: localStorage.getItem("lang") === "UA" ? UA : EN,//тут устанавливается EN по дефолту
    };
    this.SetLangEN = this.SetLangEN.bind(this);
    this.SetLangUA = this.SetLangUA.bind(this);
  }

  componentDidMount() {
    langBtns = document.querySelectorAll(".lang-btn");
    langBtns[1].classList.add("active");
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      if (savedLang === "EN") {
        this.SetLangEN();
      } else if (savedLang === "UA") {
        this.SetLangUA();
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove("active"));
      this.state.lang.current_lang === "UA"
        ? langBtns[0].classList.add("active")
        : langBtns[1].classList.add("active");
      localStorage.setItem("lang", this.state.lang.current_lang);
    }
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <div className="wrapper">
          <h1 className="title">{this.state.lang.title}</h1>
          <Article>
            <div className="article__title">
              <h2>{this.state.lang.article__title}</h2>
            </div>
          </Article>
          <div className="lang">
            <button onClick={this.SetLangUA} className="lang-btn">
              UA
            </button>
            <button onClick={this.SetLangEN} className="lang-btn">
              EN
            </button>
          </div>
        </div>
      </LangContext.Provider>
    );
  }
}

export default App;
