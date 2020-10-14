import React from 'react';
import './App.css';
import Menu from './component/menu';
import Article from './component/article';
import Formulaire from './component/formulaire';

function App() {
  const lstMenu = [
    {text: 'W O O D',    link: '/'},
    {text: 'About',      link: 'about'},
    {text: 'Furnitures', link: 'furnitures'},
    {text: 'Shop',       link: 'shop'},
    {text: 'Contact',    link: 'contact'}
  ];

  const article = [
    { 
      title: 'About Us', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat dignissim iaculis. Nam quam turpis, pharetra quis leo ut, scelerisque convallis mauris. Nam at nunc non odio rutrum tempor. Integer quis lobortis sem, ac mollis risus. Maecenas finibus ligula convallis, aliquet elit ullamcorper, dignissim nunc. Aliquam erat volutpat. Integer eget semper odio, in blandit nibh. Pellentesque vitae tincidunt quam. Suspendisse pellentesque, elit ut varius pellentesque, felis nulla dapibus erat, id eleifend ipsum felis eu lectus. Cras feugiat mi est, et mattis urna facilisis et.', 
      button: {text: 'Learn More', link: 'about'}
    },
    { 
      title: 'Shop', 
      content: 'Donec aliquet risus vel ex fermentum sodales. Integer imperdiet vitae turpis non luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vitae urna egestas, sollicitudin purus at, tincidunt quam. Nulla facilisi. In vestibulum quam eget sem lacinia semper a sit amet mi. Nulla dapibus at ligula feugiat pharetra. Sed in consectetur enim, non pulvinar ex. Integer congue ac justo et luctus. Nullam leo quam, sagittis vitae tempus a, dignissim sit amet eros. Nam id imperdiet libero, in placerat ligula. Aenean ac elit nec libero ullamcorper aliquet sed blandit ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac commodo odio, ac euismod ipsum.', 
      button: {text: 'Go Shopping', link: 'shop'}
    }
  ];

  return (
    <div className="App">
      <header>
        <div className="hleft"></div>
        <div className="hright"></div>
        <Menu className="hmenu" list={lstMenu}/>
        <div className="hlogo">W O O D<br/>S T O C K</div>
      </header>
      <main>
        <div><img src="./images/img1.PNG"/></div>
        <Article data={article[0]} />
        <Article data={article[1]} />
        <div><img src="./images/img2.PNG"/></div>
      </main>
      <section>
        <div>
          <img src="./images/img3.PNG"/>
        </div>
        <div>
          <h2>CREATIVE TEAM</h2>
          <h3>GOOG MINDSET</h3>
          <div>Donec aliquet risus vel ex fermentum sodales. Integer imperdiet vitae turpis non luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vitae urna egestas, sollicitudin purus at, tincidunt quam. Nulla facilisi. In vestibulum quam eget sem lacinia semper a sit amet mi. Nulla dapibus at ligula feugiat pharetra. Sed in consectetur enim, non pulvinar ex. Integer congue ac justo et luctus. Nullam leo quam, sagittis vitae tempus a, dignissim sit amet eros. Nam id imperdiet libero, in placerat ligula. Aenean ac elit nec libero ullamcorper aliquet sed blandit ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac commodo odio, ac euismod ipsum.</div>
          <hr/>
          <a href="team">Meat the team</a>
        </div>
      </section>
      <Formulaire />
      <footer>
        W O O D
      </footer>
    </div>
  );
}

export default App;
