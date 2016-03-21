import { RxChallengePage } from './app.po';

describe('rx-challenge App', function() {
  let page: RxChallengePage;

  beforeEach(() => {
    page = new RxChallengePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rx-challenge Works!');
  });
});
