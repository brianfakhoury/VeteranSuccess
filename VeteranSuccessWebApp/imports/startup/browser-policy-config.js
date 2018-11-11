// Paypal
BrowserPolicy.content.allowOriginForAll('https://www.paypalobjects.com/');
BrowserPolicy.content.allowOriginForAll('https://www.paypal.com/');
BrowserPolicy.content.allowOriginForAll('https://www.sandbox.paypal.com/');

// Google Analytics
BrowserPolicy.content.allowOriginForAll('https://www.google.com/analytics');
BrowserPolicy.content.allowOriginForAll('https://www.google-analytics.com/');

// Google Fonts
BrowserPolicy.content.allowOriginForAll('https://fonts.googleapis.com/');
BrowserPolicy.content.allowOriginForAll('https://fonts.gstatic.com/');

// Mixpanel
BrowserPolicy.content.allowOriginForAll('https://cdn.mxpnl.com/');

// Youtube
BrowserPolicy.content.allowOriginForAll('https://www.youtube.com/');

// Allow emoji urls
BrowserPolicy.content.allowImageOrigin('https://twemoji.maxcdn.com/')
BrowserPolicy.content.allowImageOrigin('http://cdn.jsdelivr.net/')
BrowserPolicy.content.allowImageOrigin('https://twitter.github.io/twemoji')

// app will never render inside a frame or iframe
BrowserPolicy.framing.disallow();

// //Allow inline styles for Google fonts
// BrowserPolicy.content.allowInlineStyles();
// BrowserPolicy.content.allowInlineStyles()
