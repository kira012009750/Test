
 var NewsAPI = require('newsapi');
 var newsapi = new NewsAPI('709306ff869641d2b43ab576041a0baa');

function list(handler){
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us',
        sortBy: 'relevancy',
    }).then(response => {
        handler({status:200,msn:"This are the news",news:response});
    }).catch(error =>{
        handler({status:500,msn:"There was a mistake",error:error});
    });
}

module.exports = {
    list:list,
};
