const RULES = `

.msb-root {
  font-family: 'Roboto', 'Helvetica Neue', arial, san-serif;
  padding: 6px;
  color: #999;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  transform: translateY(-100px);
  transition: transform .35s ease;
}

.msb-root--is-open {
  transform: translateY(0);
}

.msb-root a {
  text-decoration: none;
  color: inherit;
}

.msb-inner {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.msb-inner-cell-close,
.msb-inner-cell-icon,
.msb-inner-cell-description,
.msb-inner-cell-link {
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;
}

.msb-inner-cell-close {
  text-align: center;
  width: 16px;
}

.msb-inner-cell-close a {
  text-decoration: none;
  font-size: 32px;
  line-height: 0;  
}

.msb-inner-cell-link {
  width: 80px;
  text-align: right;
}

.msb-inner-cell-link a {
  color: #4285F4;
}

.msb-inner-cell-icon {
  width: 60px;
}

.msb-inner-cell-icon > img {
  border-radius: 6px;
  width: 60px;
  height: 60px;
}

.msb-inner-cell-description h1 {
  color: #222;
  margin: 0;
  margin-bottom: 0 !important;
  font-size: 16px !important;
  font-weight: bold !important;
}

.msb-inner-cell-description p {
  margin: 0;
  font-size: 14px;
}
`;

export default function injectBaseStylesheet() {
  let styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.classList.add('msb-base-styles');
  styleEl.appendChild(document.createTextNode(RULES));
  let head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}
