import { RoutesDemoAppPage } from './app.po';

describe('routes-demo-app App', function() {
  let page: RoutesDemoAppPage;

  beforeEach(() => {
    page = new RoutesDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
