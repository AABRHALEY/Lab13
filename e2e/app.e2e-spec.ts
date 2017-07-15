import { AngularLab13Page } from './app.po';

describe('angular-lab13 App', () => {
  let page: AngularLab13Page;

  beforeEach(() => {
    page = new AngularLab13Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
