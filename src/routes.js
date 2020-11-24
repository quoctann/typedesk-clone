// Define routes components
import Test from './components/Test'
import Home from './components/Home'
import Features from './components/Features'
export const routes = [
    { path: '/', name: 'homepage', component: Home },
    { path: '/test', name: 'test', component: Test },
    { path: '/features', name: 'features', component: Features },
]