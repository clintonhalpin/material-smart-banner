import { isDOMElement, addClasses, removeClasses } from './util/dom';
import throwIfMissing from './util/throwIfMissing';

export default class Banner {
  constructor(options = {}) {
    let {
      namespace = null,
      parentEl = document.querySelector('body'),
      name = options.name || 'APP NAME NOT FOUND',
      closeIcon = options.closeIcon || '⨯',
      subText = options.subText || 'GET — On the Play Store',
      linkText = options.linkText || 'View',
      linkUrl = options.linkUrl || "http://google.com/play",
      icon = options.icon || 'https://unsplash.it/80/80?image=404',
    } = options;
    this.settings = { namespace, parentEl, name, closeIcon, subText, linkText, linkUrl, icon }
    this.el = this._buildElement();
  }

  _buildClasses(suffix) {
    let classes = [`msb-${suffix}`];
    let ns = this.settings.namespace;
    if (ns) {
      classes.push(`${ns}-${suffix}`);
    }
    return classes;
  }

  _buildElement() {
    let settings = this.settings;

    // Root
    this.el = document.createElement('div');
    addClasses(this.el, this._buildClasses('root'));

    // Inner
    let innerEl = document.createElement('div');
    addClasses(innerEl, this._buildClasses('inner'));

    // Close Link
    let bannerCloseContainer = document.createElement('div');
    let bannerCloseLink = document.createElement('a');
    bannerCloseLink.href = "#";
    bannerCloseLink.innerHTML = settings.closeIcon;
    bannerCloseContainer.appendChild(bannerCloseLink);
    addClasses(bannerCloseContainer, this._buildClasses('inner-cell-close'));

    // Icon
    let appIconContainer = document.createElement('div');
    let appIcon = document.createElement('img');
    appIcon.src = settings.icon;
    appIcon.width = 60;
    appIcon.height = 60;
    appIconContainer.appendChild(appIcon);
    addClasses(appIconContainer, this._buildClasses('inner-cell-icon'));

    // Description
    let appDescriptionContainer = document.createElement('div');
    let appDescriptionHeadline = document.createElement('h1');
    let appDescriptionSubText = document.createElement('p');

    appDescriptionHeadline.innerHTML = settings.name;
    appDescriptionSubText.innerHTML = settings.subText;
    appDescriptionContainer.appendChild(appDescriptionHeadline);
    appDescriptionContainer.appendChild(appDescriptionSubText);
    addClasses(appDescriptionContainer, this._buildClasses('inner-cell-description'));

    // Link
    var appLinkContainer = document.createElement('div');
    var appLink = document.createElement('a');
    appLink.href = settings.linkUrl;
    appLink.target = "_blank";
    appLink.innerHTML = settings.linkText;
    appLinkContainer.appendChild(appLink);
    addClasses(appLinkContainer, this._buildClasses('inner-cell-link'));

    innerEl.appendChild(bannerCloseContainer);
    innerEl.appendChild(appIconContainer);
    innerEl.appendChild(appDescriptionContainer);
    innerEl.appendChild(appLinkContainer);
    this.el.appendChild(innerEl);

    settings.parentEl.appendChild(this.el);

    return this.el;
  }

  show() {
    let el = this.el;
    let className = this._buildClasses('root--is-open');
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
      else
      classes.push(className);

      el.className = classes.join(' ');
    }
  }
}
