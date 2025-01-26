import portfolioService, { Article } from "./portfolio.mjs";

const a1= new Article("path1","2nd jan","meetig","hdu","title","read post1")
const a2= new Article("path2","2nd jan","meetig","hdu","title","read blog2")
const a3=new Article("path3","2nd jan","meetig","hdu","title","read blog3")
const a4=new Article("path4","2nd jan","meetig","hdu","title","read file4")

portfolioService.addArticle(a1)
portfolioService.addArticle(a2)
portfolioService.addArticle(a3)
portfolioService.addArticle(a4)

portfolioService.getArticle(a1.link)
portfolioService.getArticle(a2.link)
portfolioService.getArticle(a2.link)
portfolioService.getArticle(a3.link)
portfolioService.getArticle(a3.link)
portfolioService.getArticle(a3.link)
portfolioService.getArticle(a1.link)

console.log(portfolioService.getMostViewedArticle())
