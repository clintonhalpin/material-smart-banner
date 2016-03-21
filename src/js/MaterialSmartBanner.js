import { isDOMElement } from './util/dom';
import { getMetaContentByName } from './util/getMetaContentByName';
import { parseEqualList } from './util/parseEqualList';
import injectBaseStylesheet from './injectBaseStylesheet';
import Banner from './Banner';

module.exports = class materialSmartBanner {

  constructor(trigger, options = {}) {
    this.isOpen = false;
    this.trigger = trigger;
    let {
      injectBaseStyles = true
    } = options;

    this.options = { 
      injectBaseStyles 
    };

    try {
        if (this.options.injectBaseStyles) {
          injectBaseStylesheet();
        }
        this._buildBanner(this._getOptions());
    } catch(e) {
        throw new Error("You've added MaterialSmartBanner to your page but haven't added a meta tag, either remove this script or edit your meta tag!");
    }    

    this.showDemo = this._showDemo;
  }
  
  _buildBanner(options) {
    this.banner = new Banner(options);
  }

  _getOptions() {
    let options = getMetaContentByName('material-smart-banner').split(',').map((str)=> {
        return parseEqualList(str);
    }).reduce(function(acc, x) {
        for (var key in x) acc[key] = x[key];
        return acc;
    }, {});
    return options;
  }

  _showDemo() {
    console.log(this.banner)
    this.banner.show();
  }
}
