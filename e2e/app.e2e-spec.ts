import { NeostoreWebsitePage } from './app.po';

describe('neostore-website App', () => {
  let page: NeostoreWebsitePage;

  beforeEach(() => {
    page = new NeostoreWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
