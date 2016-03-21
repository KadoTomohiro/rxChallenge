export class RxChallengePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rx-challenge-app p')).getText();
  }
}
