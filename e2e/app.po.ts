import { browser, by, element } from 'protractor';

export class AngularLab13Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
