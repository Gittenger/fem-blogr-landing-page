import HomePageContent from './HomePageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
}

export const { HomePage } = pages
