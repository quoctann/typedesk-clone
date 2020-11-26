// Define routes components
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Usecases from './components/Usecases'
import Welcome from './components/Welcome'
export const routes = [
    { path: '/', name: 'homepage', component: Home },
    { path: '/features', name: 'features', component: Features },
    { path: '/pricing', name: 'pricing', component: Pricing },
    { path: '/usecases', name: 'usecases', component: Usecases },
    { path: '/welcome', name: 'welcome', component: Welcome },
]