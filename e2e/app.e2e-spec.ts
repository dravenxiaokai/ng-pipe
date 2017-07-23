import { NgPipePage } from './app.po';

describe('ng-pipe App', () => {
  let page: NgPipePage;

  beforeEach(() => {
    page = new NgPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
