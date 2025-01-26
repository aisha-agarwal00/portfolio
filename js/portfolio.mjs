// Classes for the portfolio entities
import analysis, { Event } from "./analytics.mjs";

//about
class Person {
  constructor(babyName, jobTitle, description, profileImg) {
    this.name = babyName;
    this.title = jobTitle;
    this.description = description;
    this.profileImg = profileImg;
  }

  log() {
    console.log(this.title);
  }
}

export class Article {
  constructor(blogImg, dateOfPublish, category, title, description, link) {
    this.blogImg = blogImg;
    this.dateOfPublish = dateOfPublish;
    this.category = category;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

class ArticleStore {
  constructor(articlesArray) {
    this.articles = articlesArray;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  addMultipleArticles(articles) {
    this.articles.concat(articles);
  }

  deleteArticle(link) {
    this.articles = this.articles.filter((a) => a.link != link);
  }
  updateArticle(newArticle) {
    //
  }

  listArticles() {
    return this.articles;
  }
}

class PortfolioService {
  constructor(articlesList, projectsList, talksList) {
    this.articlesStore = new ArticleStore(articlesList);
    // this.projectsStore = new ProjectsStore(projectsList);
    // this.talksStore = new TalksStore(talksList);
    //..
  }

  addArticle(article) {
    this.articlesStore.addArticle(article);
  }

  listArticles() {
    return this.articlesStore.listArticles();
  }

  /**
   * Find the latest article
   */
  latestArticle() {

  }

  /**
   * (1)Function to return the article based on the link
   * @param {*} link
   */
  getArticle(link) {
    analysis.pushEvent(new Event('view', link, 'article'))
    return this.listArticles().find(a => a.link != link)
    // to get the article
    // analyticsService.push({'view', link, 'article'})
  }

  /**
   * (4)Find the most viewed article
   */
  getMostViewedArticle() {
    const articlesArray= this.listArticles();
    const maxArticleViewCount= {count:0, article:articlesArray[0]}
    for (let i in articlesArray){
      if (analysis.countEventsLinks("view","article",articlesArray[i].link) > maxArticleViewCount.count){
        maxArticleViewCount.count= analysis.countEventsLinks("view","article",articlesArray[i].link)
        maxArticleViewCount.article= articlesArray[i]
      }
    }
    return maxArticleViewCount.article
    
  }
}

const service = new PortfolioService([], [], []);
export default service;

