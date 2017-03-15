import { DeamonPage } from './app.po';

describe('Deamon App', function() {
  let page: DeamonPage;

  beforeEach(() => {
    page = new DeamonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
