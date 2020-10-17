import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
//import Article from "./Article/Article";
//import DynamicArticle from "./DynamicArticle/DynamicArticle";

import ArticleList from "./ArticleList/ArticleList";
import { isEmpty } from "lodash";

function App() {
    const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
        const response = await fetch(
            "http://demo1390455.mockable.io/articles"
        );
        const responseJson = await response.json();
        console.log("RESPONSE", responseJson)
        setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


    const myList =  Object.values(fetchedData) 

    const articles = myList.map((listItem) =>

        listItem
    );

    return isEmpty(fetchedData) ? <div>You have no data!</div> : (
    <div className="App">
      <Switch>
              <Route>
                  <ArticleList articles={articles} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
