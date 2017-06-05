import { PruebaCeroPage } from './app.po';

describe('prueba-cero App', () => {
  let page: PruebaCeroPage;

  beforeEach(() => {
    page = new PruebaCeroPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
