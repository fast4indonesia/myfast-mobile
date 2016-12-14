import { MyfastPage } from './app.po';

describe('myfast App', function() {
  let page: MyfastPage;

  beforeEach(() => {
    page = new MyfastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
