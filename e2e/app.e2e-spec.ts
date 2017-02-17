import { CartolaPgeAdminFePage } from './app.po';

describe('cartola-pge-admin-fe App', function() {
  let page: CartolaPgeAdminFePage;

  beforeEach(() => {
    page = new CartolaPgeAdminFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
