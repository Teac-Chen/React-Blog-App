// import _import from './_import';
import Home from 'views/Home';
import About from 'views/About';

const routers = [
  {url: '/', name: 'Home', component: Home, default: true},
  {url: '/about', name: 'About', component: About},
]

export default routers