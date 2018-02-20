this["templates"] = this["templates"] || {};
this["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <link href=\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <header id=\"header\">\n    <div><a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a></div>\n  </header>\n\n  <section class=\"error404\">\n    <div id=\"errorPage\">\n      <div class=\"title\">404</div>\n      <p class=\"text\">Something went wrong!</p>\n      <div class=\"buttonHome\"><a href=\"/\">Take me back home</a></div>\n    </div>\n  </section>\n\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</body>\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"index clearfix\">\n  <header id=\"header\" class=\"withoutTitle\">\n    <h1 class=\"hide\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    <a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a>\n\n    <div class=\"title-bar\" data-responsive-toggle=\"index-menu\" data-hide-for=\"medium\">\n      <button class=\"menu-icon\" type=\"button\" data-toggle></button>\n      <div class=\"title-bar-title\">Menu</div>\n    </div>\n\n    <div id=\"index-menu\" class=\"index clearfix addFloat\">\n      <div class=\"top-bar-right\">\n        <ul class=\"dropdown menu vertical medium-horizontal\" data-dropdown-menu>\n          <li><a href=\"/login\" title=\"Sign In\">Sign In</a></li>\n          <li><a href=\"/signup\" title=\"Sign Up\">Sign Up</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class=\"screenText clearfix\">Stream. Explore. Sign up for free.</div>\n  <div class=\"bg fixed clearfix\"></div>\n  <div class=\"bodyBg\"></div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</body>\n\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <span class=\"copy\">2018 Music Amaze</span>\n    <ul class=\"inline-list clearfix\">\n      <li><a href=\"#\"><i class=\"fi-social-facebook\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-twitter\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-linkedin\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-github\"></i></a></li>\n    </ul>\n</footer>\n";
},"useData":true});
this["templates"]["scripts"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src=\"/js/lib/jquery-3.3.1.min.js\"></script>\n<script src=\"/js/lib/modernizr-2.8.3.min.js\"></script>\n<script src=\"/js/lib/foundation-6.4.2.min.js\"></script>\n<script src=\"/js/lib/handlebars-4.0.11.min.js\"></script>\n<script src=\"/dist/templates.js\"></script>\n<script src=\"/dist/scripts.js\"></script>\n<noscript>Javascript is disabled in your browser.</noscript>\n";
},"useData":true});
this["templates"]["styles"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"/css/lib/normalize-7.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-6.4.2.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-icon.css\">\n<link rel=\"stylesheet\" href=\"/dist/styles.css\">\n<link rel='shortcut icon' href='/favicon.png'>\n";
},"useData":true});
this["templates"]["topTrending"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n          <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">\n            <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/dist/assets/cover/"
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\">\n            <span>"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n            <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n          </a>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <h3>Top 10</h3>\n    <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.topTrendingTracks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["editProfile"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/user/home\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1 class=\"centerTextMed\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"editProfile commonForm\">\n    <form id=\"editProfile\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" value=\""
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Email\n              <input type=\"email\" placeholder=\"Email\" id=\"email\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n      <div id=\"msg\" class=\"success\"></div>\n      <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Go to your music page!</a></div>\n    </form>\n    <div class=\"bodyBg\"></div>\n  </section>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["forgotPassword"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1 class=\"centerTextLarge\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"forgotPassword commonForm\">\n\n    <form id=\"confirmUser\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n              <label>Username\n                <input type=\"text\" placeholder=\"Username\" id=\"username\" maxlength=\"30\"/>\n              </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n    </form>\n\n    <form id=\"forgotPassword\" class=\"hide\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>New Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"newPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm Password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n    </form>\n\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n    <div id=\"msg\" class=\"success\"></div>\n    <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n  </section>\n  <div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body>\n  <header class=\"grid-x noBg\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/user/home\"></a></div>\n    <div class=\"userMenu\">\n      <span class=\"user-name\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</span>\n      <div data-toggle=\"user-menu\" class=\"menuDiv\">\n        <i class=\"fi-torso\"></i>\n        <span class=\"menuIcon\"></span>\n      </div>\n      <div id=\"user-menu\" class=\"is-hidden\" data-toggler=\"is-hidden\">\n        <ul>\n          <li><a href=\"#\">Change Password</a></li>\n          <li><a href=\"/user/editProfile\">Edit Profile</a></li>\n          <li><a href=\"/logout\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n\n  <section class=\"clearfix topTrend\">\n"
    + ((stack1 = container.invokePartial(partials.topTrending,depth0,{"name":"topTrending","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n  <div class=\"bodyBg\"></div>\n</body>\n\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1 class=\"centerTextSmall\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"login commonForm\">\n    <form id=\"login\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign In\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n      <div class=\"text-center\"><a href=\"/forgotPassword\">Forgot Password?</a></div>\n\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n    </form>\n  </section>\n<div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["signup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1 class=\"centerTextLarge\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"signup commonForm\">\n    <form id=\"signup\">\n      <div class=\"grid-container\">\n        <div class=\"grid-y\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Email\n              <input type=\"email\" placeholder=\"Email\" id=\"userEmail\" maxlength=\"50\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign Up\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n      <div id=\"msg\"></div>\n      <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n    </form>\n  </section>\n<div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});