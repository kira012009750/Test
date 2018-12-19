
 var NewsAPI = require('newsapi');
 var newsapi = new NewsAPI('709306ff869641d2b43ab576041a0baa');

function all(handler){
    newsapi.v2.topHeadlines({
        language: 'en',
        sortBy: 'relevancy',
    }).then(response => {
        handler({status:200,msn:"This are the news",news:response});
    }).catch(error =>{
        handler({status:500,msn:"There was a mistake",error:error});
    });
}

function sources(handler){
    newsapi.v2.sources({
        language: 'en',
      }).then(response => {
        handler({status:200,msn:"This are the sources",sources:response});
    }).catch(error =>{
        handler({status:500,msn:"There was a mistake",error:error});
    });
}

function allUsa(handler){
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

function findBySource(form,handler){
    console.log("FORM",form);
    newsapi.v2.topHeadlines({
        language: 'en',
        sources: form.source,
        sortBy: 'relevancy',
    }).then(response => {
        console.log("SEARCH-BY-SOURCE",response);
        handler({status:200,msn:"This are the news",news:response});
    }).catch(error =>{
        handler({status:500,msn:"There was a mistake",error:error});
    });
}

function findByKeyWord(form,handler){
    console.log("FORM",form);
    newsapi.v2.topHeadlines({
        language: 'en',
        q: form.word,
        sortBy: 'relevancy',
    }).then(response => {
        console.log("SEARCH-BY-KEYWORD",response);
        handler({status:200,msn:"This are the news",news:response});
    }).catch(error =>{
        handler({status:500,msn:"There was a mistake",error:error});
    });
}

module.exports = {
    all:all,
    allUsa:allUsa,
    findBySource:findBySource,
    findByKeyWord:findByKeyWord,
    sources:sources,
};
