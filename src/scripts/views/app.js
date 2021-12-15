import DrawerInitiator from '../utils/drawer-initiator';

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
}

export default App;
