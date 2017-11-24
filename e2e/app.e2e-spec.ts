import { LivraisonServicePage } from './app.po';

describe('livraison-service App', function() {
  let page: LivraisonServicePage;

  beforeEach(() => {
    page = new LivraisonServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
