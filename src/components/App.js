import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import InfoComponent from './InfoComponent.jsx';
import Sidebar from './Sidebar.jsx';
import SocialMedia from './SocialMedia.jsx';
import { Home } from './Views/Home.jsx';
import { Products } from './Views/Products/Products.jsx';
import { Location } from './Views/Location.jsx';
import { Specials } from './Views/Specials.jsx';
import { Sundries} from './Views/Sundries.jsx';
import { Events } from './Views/Events.jsx';
import { ColorMatching } from './Views/ColorMatching.jsx';



import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"><h1>Header</h1></div>
        <Sidebar />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
