import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import URLParser from '../routes/url-parser';

class App {
  constructor({ toggleDrawerButton, drawer, content }) {
    this.toggleDrawerButton = toggleDrawerButton;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      toggleDrawerButton: this.toggleDrawerButton,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = URLParser.parseActiveURLWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
