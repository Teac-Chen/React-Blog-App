import Home from 'views/Home/index';
import About from 'views/About/index';

// const _import = require('./_import.js');

const routers = [
  {url: '/', name: 'Home', key: 'home', icon: 'home', component: Home, default: true},
  {url: '/about', name: 'About', key: 'about', icon: 'bell', component: About},
]

export default routers