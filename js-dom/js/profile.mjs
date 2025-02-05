
class UserProfileService {
  constructor() {
    this.articles = new Map();
    // this.project = new Map();
    // this.talks = new Map();
    //..
  }

  addArticle(account,article) {
    if (this.articles.has(account.email)){
      this.articles.get(account.email).push(article);
    }
    else{
      this.articles.set(account.email,[article])
    }
    
  }

  listArticles() {
    return this.articlesStore.listArticles();
  }
  getArticles(account){
    const articles = this.articles.get(account.email)
    return articles
  }

  /**
   * Find the latest article
   */
  latestArticle() {}

  /**
   * (1)Function to return the article based on the link
   * @param {*} link
   */
  getArticle(link) {
    // to get the article
    // analyticsService.push({'view', link, 'article'})
  }

  /**
   * (4)Find the most viewed article
   */
  getMostViewedArticle() {}
}
export default UserProfileService;
