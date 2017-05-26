import { RatpPage } from './app.po';

describe('ratp App', () => {
  let page: RatpPage;

  beforeEach(() => {
    page = new RatpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
