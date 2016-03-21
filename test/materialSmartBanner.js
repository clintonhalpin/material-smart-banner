import materialSmartBanner from '../src/js/materialSmartBanner';

describe('Without Meta Tag', () => {
  it('warns if meta tag is not present', () => {
    expect(() => {
      new materialSmartBanner();
    }).toThrowError();
  });
});

describe('Core', () => {
  
  beforeEach(function() {
    let meta = document.createElement('meta');
    meta.name = 'material-smart-banner';
    meta.content = "name=Photo App, linkUrl=http://clintonhalpin.com, icon=https://unsplash.it/80/80?image=301";
    meta.classList.add('meta-test-anchor');
    document.body.appendChild(meta);
  });

  afterEach(function() {
    let meta = document.querySelector('.meta-test-anchor')
    document.body.removeChild(meta);
  });

  it('creates the element constructor', () => {
    let testBar = new materialSmartBanner({});
    expect(() => {
      testBar
    }).toBeTruthy();
  });
  
  it('should set and render options', () => {
    let testBar = new materialSmartBanner({});
    let elStr = testBar.banner.el.innerHTML;

    let expected = {
      name: 'Photo App',
      linkUrl: 'http://clintonhalpin.com',
      icon: 'https://unsplash.it/80/80?image=301'
    };

    expect(testBar.isOpen).toEqual(false);
    expect(elStr.indexOf(expected.name)).toBeGreaterThan(0);
    expect(elStr.indexOf(expected.linkUrl)).toBeGreaterThan(0);
    expect(elStr.indexOf(expected.icon)).toBeGreaterThan(0);
  });  

});