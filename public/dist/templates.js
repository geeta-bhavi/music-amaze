this["templates"] = this["templates"] || {};
this["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n<body>\n"
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
    + "</head>\n\n<body class=\"index clearfix\">\n  <header id=\"header\">\n    <h1 class=\"hide\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    <a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a>\n\n    <div class=\"title-bar\" data-responsive-toggle=\"index-menu\" data-hide-for=\"medium\">\n      <button class=\"menu-icon\" type=\"button\" data-toggle></button>\n      <div class=\"title-bar-title\">Menu</div>\n    </div>\n\n    <div id=\"index-menu\" class=\"index clearfix addFloat\">\n      <div class=\"top-bar-right\">\n        <ul class=\"dropdown menu vertical medium-horizontal\" data-dropdown-menu>\n          <li><a href=\"/login\" title=\"Sign In\">Sign In</a></li>\n          <li><a href=\"/signup\" title=\"Sign Up\">Sign Up</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class=\"screenText clearfix\">Stream. Explore. Sign up for free.</div>\n  <div class=\"bg fixed clearfix\"></div>\n"
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
this["templates"]["editProfile"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/user/home\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1 class=\"centerTextMed\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"editProfile commonForm\">\n    <form>\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <input type=\"text\" placeholder=\"Username\" maxlength=\"30\" />\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <input type=\"email\" placeholder=\"Email\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n      <div id=\"error\">djhsjdg jsgdj sjd gjsgd jg sjd jsg\n        djg sj gdjsgdjgs jdg jsgd jgsg djhsjdg jsgdj sjd gjsg\n        d jg sjd jsg djg sj gdjsgdjgs jdg jsgd jgsgdjhsjdg jsgdj sjd gj\n        sgd jg sjd jsg djg sj gdjsgdjgs jdg jsgd jgsgdjhsjdg jsgdj sjd gjsgd jg sjd\n         jsg djg sj gdjsgdjgs jdg jsgd jgsgdjhsjdg jsgdj sjd gjsgd jg sjd jsg djg sj gdj\n         sgdjgs jdg jsgd jgsg</div>\n    </form>\n  </section>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body>\n\n  <div>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n  <div>hello "
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</div>\n  <a id=\"logout\" href=\"#\">Log Out</a>\n\n</body>\n\n"
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
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"login commonForm\">\n    <form id=\"login\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-4 large-offset-4 large-4 cell inpPadding\">\n            <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign In\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n      <div id=\"error\"></div>\n    </form>\n  </section>\n\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["signup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body>\n  <div>signup</div>\n</body>\n\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});