module.exports = {
  plugins: {
    "postcss-import": {}, // Import files first
    "postcss-custom-media": {
      "extensions": {
        '--viewport-phone-small'  : '(max-width : 320px)',
        '--viewport-phone'        : '(max-width : 400px)',
        '--viewport-phone-wide'   : '(max-width : 480px)',
        '--viewport-phablet'      : '(max-width : 560px)',
        '--viewport-tablet-small' : '(max-width : 640px)',
        '--viewport-tablet'       : '(max-width : 768px)',
        '--viewport-tablet-wide'  : '(max-width : 1024px)',
        '--viewport-desktop'      : '(max-width : 1250px)',
        '--viewport-desktop-wide' : '(max-width : 1250px)',
        '--viewport-desktop-huge' : '(min-width : 1920px)',
      }
    },
    "stylelint" : { // Style Linting
      "rules": {
        "color-no-invalid-hex": true,
        "max-empty-lines": 2,
        "block-no-empty": true,
        "at-rule-no-unknown": true,
      }
    },
    "lost": {},
    "postcss-cssnext": {
      browsers: ["last 2 versions", "> 5%"],
    },
  },
};
