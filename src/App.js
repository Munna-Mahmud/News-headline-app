import React from "react";
import Header from "./Components/Header";
import NewsList from "./Components/NewsList";
import { newsCatagory } from './News/index';

const fakeData = [
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: 'published date and time',
    source: {
      name: 'CNN',
    },

  },
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: 'published date and time',
    source: {
      name: 'CNN',

    },
  },
];


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header catagory={newsCatagory.sports}></Header>
            <NewsList news={fakeData}></NewsList>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
