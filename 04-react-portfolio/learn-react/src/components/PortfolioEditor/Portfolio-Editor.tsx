import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../useContext/appContext';
import { Aboutform } from './About/aboutform';
import { Tab } from './tabs';
import { ITabProps } from './tabs';
import { Articleform } from './Articles/articleForm';

const PortfolioEditor = () => {
  const {state} = useContext(AppContext);

  const tabsData: ITabProps[] = [
    { 
        icon: "/images/about.svg", 
        title: "About", 
        form: <Aboutform  firstname={state.about.firstname}  lastname={state.about.lastname} name={state.about.name} img={state.about.img} contact={state.about.contact} description={state.about.description}/>
    },
    {
        icon: "/images/article.svg", 
        title: "Articles", 
        form: <Articleform index={state.articleIndex}/>
    },
    {
        icon: "/images/project.svg", 
        title: "Projects", 
        form: <Articleform index={state.articleIndex}/>,
    },
    {
        icon: "/images/talk.svg", 
        title: "Talks", 
        form: <Articleform index={state.articleIndex}/>,
    }
    
];

return <Tab items={tabsData} />;
};




export default PortfolioEditor
