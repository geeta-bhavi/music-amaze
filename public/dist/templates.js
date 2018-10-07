this["templates"] = this["templates"] || {};
this["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <link href=\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <header id=\"header\">\n    <div><a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a></div>\n  </header>\n\n  <section class=\"error404\">\n    <div id=\"errorPage\">\n      <div class=\"title\">404</div>\n      <p class=\"text\">Something went wrong!</p>\n      <div class=\"buttonHome\"><a href=\"/\">Take me back home</a></div>\n    </div>\n  </section>\n  <div class=\"bodyBg\"></div>\n"
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
    + "</head>\n\n<body class=\"index clearfix\">\n\n  <section>\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-offset-1 small-10 medium-offset-1 medium-10 large-offset-1 large-10 cell homeCont\">\n\n          <div class=\"homeLogo\">\n            <span class=\"logoImg\"></span>\n            <span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span>\n          </div>\n\n          <div class=\"homeSlide clearfix\">\n            <div class=\"cont text-center\">\n              <span class=\"slideHeader\">Welcome</span>\n              <span class=\"slideContent\">Sign up for free music on your phone, tablet and computer.</span>\n            </div>\n            <div class=\"cont text-center\">\n              <span class=\"slideHeader\">Browse</span>\n              <span class=\"slideContent\">Explore top tracks, most played and most liked.</span>\n            </div>\n            <div class=\"cont text-center\">\n              <span class=\"slideHeader\">Search</span>\n              <span class=\"slideContent\">Looking for that special album or artist? Just search and hit play.</span>\n            </div>\n            <div class=\"cont text-center\">\n              <span class=\"slideHeader\">Your Playlist</span>\n              <span class=\"slideContent\">Save any song to your own music collection.</span>\n            </div>\n          </div>\n\n\n\n          <div class=\"indexBtns text-center clearfix\">\n            <span class=\"btncont\">\n              <a class=\"button success\" href=\"/signup\">Create Account</a>\n            </span>\n            <span class=\"loginCont btncont\">\n                <span class=\"aluser\">Already an user?</span>\n                <a class=\"button custom\" href=\"/login\">Log In</a>\n            </span>\n          </div>\n        </div>\n\n    </div>\n  </div>\n  </section>\n\n  <!-- <div class=\"bg fixed clearfix\"></div> -->\n  <div class=\"bodyBg bodyBgHome\"></div>\n  "
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</body>\n\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["index_old"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"index clearfix\">\n  <header id=\"header\" class=\"withoutTitle\">\n    <h1 class=\"hide\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    <a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a>\n\n    <div class=\"title-bar\" data-responsive-toggle=\"index-menu\" data-hide-for=\"medium\">\n      <button class=\"menu-icon\" type=\"button\" data-toggle></button>\n      <div class=\"title-bar-title\">Menu</div>\n    </div>\n\n    <div id=\"index-menu\" class=\"index clearfix addFloat\">\n      <div class=\"top-bar-right\">\n        <ul class=\"dropdown menu vertical medium-horizontal\" data-dropdown-menu>\n          <li><a href=\"/login\" title=\"Sign In\">Sign In</a></li>\n          <li><a href=\"/signup\" title=\"Sign Up\">Sign Up</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class=\"screenText clearfix\">\n    <div class=\"sli1\">Stream. Explore. Sign up for free.</div>\n    <div class=\"sli2\">\n      <h4>$0.00 <span class=\"month\"> / month</span></h4>\n      <div class=\"features\">\n        <ul class=\"spotify-premium-list\">\n          <li>Shuffle play</li>\n          <li>Ad free</li>\n          <li>Unlimited skips</li>\n          <li>Play any track</li>\n          <li>High quality audio</li>\n        </ul>\n      </div>\n    </div>\n\n\n\n\n  </div>\n  <!-- <div class=\"bg fixed clearfix\"></div> -->\n  <div class=\"bodyBg\"></div>\n  "
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</body>\n\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["dev"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n  <link rel=\"stylesheet\" href=\"/css/dev-page.css\" />\n  <link rel=\"stylesheet\" href=\"/css/lib/foundation-6.4.2.min.css\">\n  <link rel=\"stylesheet\" href=\"/css/lib/foundation-icon.css\">\n  <link rel='shortcut icon' href='/favicon.png'>\n</head>\n\n<body class=\"clearfix\">\n\n  <section>\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-12 medium-8 large-7 cell\">\n          <div class=\"dev-cont clearfix\">\n            <img class=\"devImg\" src=\"/dist/assets/geeta.jpg\" />\n            <span class=\"bio\">\n              gdgad jgsjdgj sgdjhgsjdhg jshg djhgsjhd gjsg djgsjdgjshg jdgsjg hajg sjdgjhsgd jgsjdgjgsdjgsjgdjhsg jdhg sjhg djgs jhdg jshg djgdgsjgs\n            </span>\n          </div>\n          <div class=\"dev-cont clearfix\">\n            <img class=\"devImg\" src=\"/dist/assets/swathi.jpg\" />\n            <span class=\"bio\">\n              gdgad jgsjdgj sgdjhgsjdhg jshg djhgsjhd gjsg djgsjdgjshg jdgsjg hajg sjdgjhsgd jgsjdgjgsdjgsjgdjhsg jdhg sjhg djgs jhdg jshg djgdgsjgs\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"devBg\"></div>\n</body>\n\n</html>\n";
},"useData":true});
this["templates"]["payment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"stat clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <section>\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-12 medium-offset-3 medium-6 large-offset-3 large-6 cell\">\n          <h3 class=\"payHd\">PAYMENT INFO</h3>\n          <div id=\"payment\">\n            <form id=\"pay\">\n              <div>\n                <div class=\"\">\n                  <label>Creditcard number\n                    <input type=\"number\" placeholder=\"\" id=\"creditnumber\" maxlength=\"16\" />\n                  </label>\n                </div>\n                <div class=\"\">\n                  <label>Expiration\n                    <input type=\"number\" id=\"expiration\" placeholder=\"\" maxlength=\"4\" />\n                  </label>\n                </div>\n\n                <div class=\"\">\n                  <label>CVV code\n                    <input type=\"number\" id=\"cvv\" placeholder=\"\" maxlength=\"3\" />\n                  </label>\n                </div>\n              </div>\n              <div class=\"payInfo\">\n                <div class=\"amount\">\n                  <span>$ 99</span>\n                  <span class=\"cents\">99</span>\n                  <span class=\"duration\">Year</span>\n                </div>\n              </div>\n\n              <div id=\"paySub\">\n                <input type=\"submit\" value=\"Pay\" class=\"button primary\" />\n              </div>\n\n            </form>\n\n            <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n            <div id=\"error\"></div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n\n  <div class=\"bodyForm\"></div>\n</body>\n\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["stats"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"stat clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <section>\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-12 medium-offset-1 medium-10 large-offset-0 large-12 cell statSearch\">\n          <div id=\"search-stat\" class=\"box-search\">\n            <div class=\"box-input\">\n              <input type=\"text\" id=\"stat-text\" placeholder=\"Find stats for album\" autocomplete=\"off\" class=\"search-input js-search-input\" value=\"\">\n              <a class=\"box-search-icon js-stat-search\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"stat-results hide\">\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-12 medium-offset-2 medium-6 large-offset-2 large-6 cell\">\n          <div id=\"map\" style=\"width:100%;height:275px\"></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div id=\"stat-results\">\n      <div id=\"statistics\"><span>Know<span>Album Statistics</div>\n    </div>\n  </section>\n\n  <div class=\"bodyBgStats\"></div>\n</body>\n\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<script>\n  var map;\n\n  function initMap() {\n    var styledMapType = new google.maps.StyledMapType([{\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#1d2c4d\"\n        }]\n      },\n      {\n        \"elementType\": \"labels\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#8ec3b9\"\n        }]\n      },\n      {\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [{\n          \"color\": \"#1a3646\"\n        }]\n      },\n      {\n        \"featureType\": \"administrative\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"administrative.country\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [{\n          \"color\": \"#4b6878\"\n        }]\n      },\n      {\n        \"featureType\": \"administrative.land_parcel\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#64779e\"\n        }]\n      },\n      {\n        \"featureType\": \"administrative.neighborhood\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"administrative.province\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [{\n          \"color\": \"#4b6878\"\n        }]\n      },\n      {\n        \"featureType\": \"landscape.man_made\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [{\n          \"color\": \"#334e87\"\n        }]\n      },\n      {\n        \"featureType\": \"landscape.natural\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#023e58\"\n        }]\n      },\n      {\n        \"featureType\": \"poi\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"poi\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#283d6a\"\n        }]\n      },\n      {\n        \"featureType\": \"poi\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#6f9ba5\"\n        }]\n      },\n      {\n        \"featureType\": \"poi\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [{\n          \"color\": \"#1d2c4d\"\n        }]\n      },\n      {\n        \"featureType\": \"poi.park\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [{\n          \"color\": \"#023e58\"\n        }]\n      },\n      {\n        \"featureType\": \"poi.park\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#3C7680\"\n        }]\n      },\n      {\n        \"featureType\": \"road\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"road\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#304a7d\"\n        }]\n      },\n      {\n        \"featureType\": \"road\",\n        \"elementType\": \"labels.icon\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"road\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#98a5be\"\n        }]\n      },\n      {\n        \"featureType\": \"road\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [{\n          \"color\": \"#1d2c4d\"\n        }]\n      },\n      {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#2c6675\"\n        }]\n      },\n      {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"geometry.stroke\",\n        \"stylers\": [{\n          \"color\": \"#255763\"\n        }]\n      },\n      {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#b0d5ce\"\n        }]\n      },\n      {\n        \"featureType\": \"road.highway\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [{\n          \"color\": \"#023e58\"\n        }]\n      },\n      {\n        \"featureType\": \"transit\",\n        \"stylers\": [{\n          \"visibility\": \"off\"\n        }]\n      },\n      {\n        \"featureType\": \"transit\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#98a5be\"\n        }]\n      },\n      {\n        \"featureType\": \"transit\",\n        \"elementType\": \"labels.text.stroke\",\n        \"stylers\": [{\n          \"color\": \"#1d2c4d\"\n        }]\n      },\n      {\n        \"featureType\": \"transit.line\",\n        \"elementType\": \"geometry.fill\",\n        \"stylers\": [{\n          \"color\": \"#283d6a\"\n        }]\n      },\n      {\n        \"featureType\": \"transit.station\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#3a4762\"\n        }]\n      },\n      {\n        \"featureType\": \"water\",\n        \"elementType\": \"geometry\",\n        \"stylers\": [{\n          \"color\": \"#0e1626\"\n        }]\n      },\n      {\n        \"featureType\": \"water\",\n        \"elementType\": \"labels.text.fill\",\n        \"stylers\": [{\n          \"color\": \"#4e6d70\"\n        }]\n      }\n    ], {\n      name: 'Styled Map'\n    });\n\n\n    map = new google.maps.Map(document.getElementById('map'), {\n      center: {\n        lat: 45.941653470439626,\n        lng: 0.4597908020019865\n      },\n      zoom: 0.6,\n      mapTypeControlOptions: {\n        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',\n          'styled_map'\n        ]\n      }\n    });\n\n    //Associate the styled map with the MapTypeId and set it to display.\n    map.mapTypes.set('styled_map', styledMapType);\n    map.setMapTypeId('styled_map');\n  }\n</script>\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDHdpf67g_e4ASxbjeWJmhg85dfX-0t288&callback=initMap\">\n</script>\n\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["play"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <div class=\"small-offset-1 small-8 medium-offset-1 medium-11 large-offset-2 large-10 cell\">\n        <section id=\"homeTabsCont\" class=\"js-nonSearchView hometabs mtabs\">\n          <ul class=\"homeTabsList clearfix\">\n            <li>\n              <a data-tab-category=\"userHomeTab\" class=\""
    + alias4(((helper = (helper = helpers.unhighlight || (depth0 != null ? depth0.unhighlight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unhighlight","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/home\">\n                <span class=\"tabImg\"><i class=\"fi-home\"></i></span>\n                <span class=\"tabName\">Home</span>\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"playlistTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightPlaylistTab || (depth0 != null ? depth0.highlightPlaylistTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightPlaylistTab","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/playlists/seeAll\">\n                <span class=\"tabImg\"><i class=\"fi-music\"></i></span>\n                <span class=\"tabName\">Playlists</span>\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"playedTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightMostPlayedTab || (depth0 != null ? depth0.highlightMostPlayedTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightMostPlayedTab","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/mostPlayed/seeAll\">\n                <span class=\"tabImg\"><i class=\"fi-play-circle\"></i></span>\n                <span class=\"tabName\">Most Played by you</span>\n\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"searchConcertTab\" href=\"/searchconcert\">\n                <span class=\"tabImg\"><i class=\"fi-magnifying-glass\"></i></span>\n                <span class=\"tabName\">Search concerts</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"/payment\">\n                <span class=\"tabImg\"><i class=\"fi-graph-trend\"></i></span>\n                <span class=\"tabName\">Stats</span>\n              </a>\n            </li>\n          </ul>\n        </section>\n      </div>\n    </div>\n  </div>\n\n\n  <section class=\"hw-accelerate\">\n"
    + ((stack1 = container.invokePartial(partials.listTracks,depth0,{"name":"listTracks","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n\n\n\n<div class=\"bodyBg bodyBgPlay\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["searchconcert"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"concert clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <div class=\"small-offset-1 small-8 medium-offset-1 medium-11 large-offset-2 large-10 cell\">\n        <section id=\"homeTabsCont\" class=\"js-nonSearchView hometabs mtabs\">\n          <ul class=\"homeTabsList clearfix\">\n            <li>\n              <a data-tab-category=\"userHomeTab\" class=\""
    + alias4(((helper = (helper = helpers.unhighlight || (depth0 != null ? depth0.unhighlight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unhighlight","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/home\">\n                <span class=\"tabImg\"><i class=\"fi-home\"></i></span>\n                <span class=\"tabName\">Home</span>\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"playlistTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightPlaylistTab || (depth0 != null ? depth0.highlightPlaylistTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightPlaylistTab","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/playlists/seeAll\">\n                <span class=\"tabImg\"><i class=\"fi-music\"></i></span>\n                <span class=\"tabName\">Playlists</span>\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"playedTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightMostPlayedTab || (depth0 != null ? depth0.highlightMostPlayedTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightMostPlayedTab","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/mostPlayed/seeAll\">\n                <span class=\"tabImg\"><i class=\"fi-play-circle\"></i></span>\n                <span class=\"tabName\">Most Played by you</span>\n\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"searchConcertTab\" class=\"active\" href=\"/searchconcert\">\n                <span class=\"tabImg\"><i class=\"fi-magnifying-glass\"></i></span>\n                <span class=\"tabName\">Search concerts</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"/payment\">\n                <span class=\"tabImg\"><i class=\"fi-graph-trend\"></i></span>\n                <span class=\"tabName\">Stats</span>\n              </a>\n            </li>\n          </ul>\n        </section>\n      </div>\n    </div>\n  </div>\n\n\n  <section>\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div class=\"small-12 medium-12 large-12 cell concertSearch\">\n          <div id=\"search-concert\" class=\"box-search\">\n              <div class=\"box-input\">\n                <input type=\"text\" id=\"concert-text\" placeholder=\"Find concerts for any artist or any location\" autocomplete=\"off\" class=\"search-input js-search-input\" value=\"\">\n                <a class=\"box-search-icon js-concert-search\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n<section>\n  <div id=\"concert-results\">\n  </div>\n</section>\n\n<div class=\"apiloadingScreen\"><!-- Place at bottom of page --></div>\n<div class=\"bodyBgConcert\"></div>\n</body>\n\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["addToPlaylist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li class=\"playlist_add\" id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + ">\n      <a href=\"#\">\n        <div class=\"playImage\">\n          <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.albumId || (depth0 != null ? depth0.albumId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumId","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.PLAYLIST_NAME || (depth0 != null ? depth0.PLAYLIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_NAME","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n        <span class=\"playlistName\">"
    + alias4(((helper = (helper = helpers.PLAYLIST_NAME || (depth0 != null ? depth0.PLAYLIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n        <span class=\"trackCount\">"
    + alias4(((helper = (helper = helpers.trackCount || (depth0 != null ? depth0.trackCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackCount","hash":{},"data":data}) : helper)))
    + " songs</span>\n        <div class=\"hov\"></div>\n        <div class=\"mo-coverArt-hover\">\n          <svg width=\"51px\" height=\"52px\" viewBox=\"88 88 51 52\"><path d=\"M98,88 C92.477,88 88,92.477 88,98 C88,103.523 92.477,108 98,108 C103.523,108 108,103.523 108,98 C108,92.476 103.523,88 98,88 L98,88 Z M105.001,98.999 L99.001,98.999 L99.001,104.999 L97.001,104.999 L97.001,98.999 L91.001,98.999 L91.001,96.999 L97.001,96.999 L97.001,90.999 L99.001,90.999 L99.001,96.999 L105.001,96.999 L105.001,98.999 L105.001,98.999 Z M112.751,95.345 C112.868,95.998 112.938,96.665 112.967,97.344 L137,92.234 L137,119.265 C135.349,117.221 132.826,115.909 130,115.909 C125.038,115.909 121,119.947 121,124.909 C121,129.872 125.038,133.909 130,133.909 C134.962,133.909 139,129.872 139,124.909 L139,89.765 L112.751,95.345 L112.751,95.345 Z M130,131.909 C126.14,131.909 123,128.769 123,124.909 C123,121.05 126.14,117.909 130,117.909 C133.86,117.909 137,121.05 137,124.909 C137,128.77 133.859,131.909 130,131.909 L130,131.909 Z M105,125.354 C103.348,123.311 100.826,121.999 98,121.999 C93.037,121.999 89,126.037 89,130.999 C89,135.961 93.037,139.999 98,139.999 C102.963,139.999 107,135.961 107,130.999 L107,109.972 C106.368,110.448 105.704,110.884 105,111.257 L105,125.354 L105,125.354 Z M98,137.999 C94.14,137.999 91,134.859 91,130.999 C91,127.139 94.14,123.999 98,123.999 C101.86,123.999 105,127.139 105,130.999 C105,134.858 101.859,137.999 98,137.999 L98,137.999 Z\" stroke=\"none\" fill=\"#FFFFFF\" fill-rule=\"evenodd\"><title>Add to Playlist</title></path></svg>\n        </div>\n      </a>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"small-12 medium-12 large-12 cell playlist_list addTo_playlist\">\n  <li id=\"createPlaylistLi\">\n    <a class=\"playListCreate\" href=\"#\">\n      <div class=\"create_icon\">\n        <i class=\"fi-plus\"></i>\n      </div>\n      <span class=\"create_text\">Create Playlist</span>\n    </a>\n  </li>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.playlists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
this["templates"]["album"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li>\n            <a id=\""
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">\n              <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n            </a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div class=\"small-12 medium-12 large-12 cell artistRes\">\n      <button class=\"button primary artistHd\">Choose an album</button>\n\n      <ul class=\"stat-albums\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.albums : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["artist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"button primary artistHd js-chooseartist\">\n          Choose an artist\n          <span class=\"chooseIcon\"></span>\n        </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li>\n              <a id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">\n                <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</span>\n              </a>\n            </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"button primary artistHd js-chooseLocation\">\n          Choose a location\n          <span class=\"chooseIcon\"></span>\n        </button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li>\n              <a id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.metroArea : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" href=\"#\">\n                <span class=\"artistName\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.displayName : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.country : stack1)) != null ? stack1.displayName : stack1), depth0))
    + "</span>\n              </a>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div class=\"small-12 medium-12 large-12 cell artistRes\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"artistList\">\n        <ul class=\"concert-artists js-artists\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.locations : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"locationList\">\n        <ul class=\"concert-artists js-locations\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.locations : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["concertResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li>\n            <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"button warning "
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"city\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span>\n            <a class=\"button primary\" target=\"_blank\" href=\""
    + alias4(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uri","hash":{},"data":data}) : helper)))
    + "\">Buy Tickets</a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div class=\"small-12 medium-12 large-12 cell artistRes\">\n      <div class=\"albumHeader clearfix\">\n          <div class=\"artistName\">\n            "
    + container.escapeExpression(((helper = (helper = helpers.artistName || (depth0 != null ? depth0.artistName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"artistName","hash":{},"data":data}) : helper)))
    + "\n          </div>\n      </div>\n      <ul class=\"concert-artists concert-res\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["concerts"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li id= "
    + alias4(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Id","hash":{},"data":data}) : helper)))
    + ">\n            <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Date","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"artistName\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.Venue : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</span>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div class=\"small-12 medium-12 large-12 cell artistRes\">\n      <button class=\"button primary artistHd\">Events</button>\n\n      <ul class=\"concert-artists\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <span class=\"copy\">\n      <span>2018 Music Amaze</span>\n      <span class=\"privacy\">\n        <a href=\"#\">Privacy</a>\n      </span>\n\n    </span>\n    <ul class=\"inline-list clearfix\">\n      <li><a href=\"#\"><i class=\"fi-social-facebook\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-twitter\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-linkedin\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-github\"></i></a></li>\n    </ul>\n</footer>\n";
},"useData":true});
this["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header class=\"noBg\" id=\"header\">\n  <div id=\"headerDiv\" class=\"grid-x\">\n    <div class=\"small-6 medium-6 large-3 cell\">\n      <a class=\"logoImg\" href=\"/user/home\"></a>\n      <div class=\"searchIcon "
    + alias4(((helper = (helper = helpers.displaySearch || (depth0 != null ? depth0.displaySearch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displaySearch","hash":{},"data":data}) : helper)))
    + "\">\n        <a id=\"searchIcon\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n      </div>\n    </div>\n    <div class=\"userMenu\">\n      <span class=\"user-name\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</span>\n      <div class=\"menuDiv\">\n        <i class=\"fi-torso\"></i>\n        <span class=\"menuIcon\"></span>\n      </div>\n      <div id=\"user-menu\">\n        <ul class=\"clearfix\">\n          <li><a href=\"/user/changePassword\"><i class=\"fi-lock\"></i> Change Password</a></li>\n          <li><a href=\"/user/editProfile\"><i class=\"fi-pencil\"></i> Edit Profile</a></li>\n          <li><a href=\"/logout\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"search\" class=\"box-search grid-x "
    + alias4(((helper = (helper = helpers.displaySearch || (depth0 != null ? depth0.displaySearch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displaySearch","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"small-10 medium-offset-3 medium-6 large-offset-3 large-6 cell\">\n      <div class=\"box-input\">\n        <input type=\"text\" id=\"search-text\" placeholder=\"Search for an Artist, Song or Album\" autocomplete=\"off\" class=\"search-input js-search-input\" value=\"\">\n        <a class=\"box-search-icon js-search-icon\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n      </div>\n    </div>\n    <div class=\"bt-close js-search-close small-2 medium-3 large-3\"><i class=\"fi-x\"></i></div>\n  </div>\n</header>\n";
},"useData":true});
this["templates"]["listTracks"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"small-12 medium-offset-2 medium-7 large-offset-0 large-4 cell coverArt\">\n        <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumId : stack1), depth0))
    + ".jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumName : stack1), depth0))
    + "\">\n        <div class=\"audioP\">\n          <div class=\"players\" id=\"player2-container\">\n            <div class=\"media-wrapper\">\n              <audio id=\"audioPlayer\" preload=\"none\" controls style=\"max-width:100%;\">\n                <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.trackSource : stack1), depth0))
    + "\" type=\"audio/mp3\">\n                  Your browser does not support the audio element.\n              </audio>\n            </div>\n          </div>\n        </div>\n        <div class=\"trackActions\">\n          <span><a id=\"trackShuffle\" href=\"#\"><i class=\"fi-shuffle\"></i></a></span>\n          <span><a id=\"trackRepeat\" href=\"#\"><i class=\"fi-loop\"></i></a></span>\n          <span><a id=\"trackPrev\" href=\"#\"><i class=\"fi-previous\"></i></a></span>\n          <span><a id=\"trackNext\" href=\"#\"><i class=\"fi-next\"></i></i></a></span>\n          <span><a id=\"trackPlaylist\" href=\"#\"><i class=\"fi-plus\"></i></a></span>\n          <span><a id=\"trackLike\" href=\"#\"><i class=\"fi-heart\"></i></a></span>\n          <span><a id=\"trackDislike\" href=\"#\"><i class=\"fi-dislike\"></i></a></span>\n        </div>\n      </div>\n      <div class=\"small-12 medium-12 large-offset-1 large-6 cell albumDetails\">\n        <div class=\"albumHeader clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias3,(depth0 != null ? depth0.artist : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.artistName : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.playlistName : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.chartName : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <ul id=\"tracks\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.albumTracks : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n      <div id=\"trackerror\"></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div class=\"albumName\">\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumName : stack1), depth0))
    + "\n            </div>\n            <div class=\"artistName\">\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.artistName : stack1), depth0))
    + "\n            </div>\n            <span class=\"genre\">\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.genre : stack1), depth0))
    + "\n              <span class=\"separator\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.separator : stack1), depth0))
    + "</span>\n            </span>\n            <span class=\"yearReleased\">\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.yearReleased : stack1), depth0))
    + "\n            </span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"artist-name\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.artistName : stack1), depth0))
    + "</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"playlist-name\" data-playlist-id=\""
    + alias4(((helper = (helper = helpers.playlistId || (depth0 != null ? depth0.playlistId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlistId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.playlistName || (depth0 != null ? depth0.playlistName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlistName","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"editPlaylist\">Edit</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"playlist-name\">"
    + container.escapeExpression(((helper = (helper = helpers.chartName || (depth0 != null ? depth0.chartName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"chartName","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li class=\"trackList "
    + alias4(((helper = (helper = helpers.highlight || (depth0 != null ? depth0.highlight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlight","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\" data-track-src=\""
    + alias4(((helper = (helper = helpers.TRACK_SOURCE || (depth0 != null ? depth0.TRACK_SOURCE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_SOURCE","hash":{},"data":data}) : helper)))
    + "\" data-like=\""
    + alias4(((helper = (helper = helpers.like || (depth0 != null ? depth0.like : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"like","hash":{},"data":data}) : helper)))
    + "\" data-dislike=\""
    + alias4(((helper = (helper = helpers.dislike || (depth0 != null ? depth0.dislike : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dislike","hash":{},"data":data}) : helper)))
    + "\">\n              <div class=\"trackItem "
    + alias4(((helper = (helper = helpers.soundIcon || (depth0 != null ? depth0.soundIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"soundIcon","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chart : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <span class=\"songName "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.artistalbum : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.artistalbum : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.artistName : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.artistName : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              <div class=\"text-right trackTime\">"
    + alias4(((helper = (helper = helpers.trackTime || (depth0 != null ? depth0.trackTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackTime","hash":{},"data":data}) : helper)))
    + "</div>\n              <div class=\"dragHandle\"><i class=\"fi-list\"></i></div>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                  <span class=\"index\">"
    + container.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"inc","hash":{},"data":data}))
    + ".</span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "emphasize";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <span class=\"album-name\">Album Name - "
    + container.escapeExpression(((helper = (helper = helpers.artistalbum || (depth0 != null ? depth0.artistalbum : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"artistalbum","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <span class=\"album-name\">Artist - "
    + container.escapeExpression(((helper = (helper = helpers.artistName || (depth0 != null ? depth0.artistName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"artistName","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "                <!-- <div class=\"menu-popup-cont\">\n                  <div class=\"delete-track text-center\">&#8286;</div>\n                  <div class=\"deleteMenu menu-popup\">Delete</div>\n                </div> -->\n                <div class=\"deleteMenu\"><i class=\"fi-minus-circle\"></i></div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.errorMessage : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.errorMessage : depth0),{"name":"unless","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"small-12 medium-12 large-12 cell text-center\">\n          "
    + container.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\n        </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"small-12 medium-12 large-12 cell text-center\">\n          There is some error getting the tracks.\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.album : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.album : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n\n<div class=\"addToPlaylistPopup\">\n  <div class=\"cont\">\n    <button class=\"closeAddToPlaylist\" type=\"button\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h3>Add to playlist</h3>\n    <div id=\"playlistCont\">\n"
    + ((stack1 = container.invokePartial(partials.addToPlaylist,depth0,{"name":"addToPlaylist","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n    <div id=\"playListerror\"></div>\n  </div>\n</div>\n<div class=\"playListPopup\">\n  <div class=\"cont\">\n    <button class=\"closebutton\" type=\"button\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <div class=\"createPlaylistInp\">\n      <input type=\"text\" placeholder=\"Playlist name\" id=\"playlistName\" />\n    </div>\n    <div class=\"createbtns\">\n      <button id=\"createBtn\" class=\"button primary\">Create</button>\n      <button id=\"cancelBtn\" class=\"button primary\">Cancel</button>\n    </div>\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
this["templates"]["locationConcerts"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li>\n            <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"button warning "
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"city\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span>\n            <a class=\"button primary\" target=\"_blank\" href=\""
    + alias4(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uri","hash":{},"data":data}) : helper)))
    + "\">Buy Tickets</a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div class=\"small-12 medium-12 large-12 cell artistRes\">\n      <div class=\"albumHeader clearfix\">\n          <div class=\"artistName\">\n            "
    + container.escapeExpression(((helper = (helper = helpers.locationName || (depth0 != null ? depth0.locationName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"locationName","hash":{},"data":data}) : helper)))
    + "\n          </div>\n      </div>\n      <ul class=\"concert-artists concert-res\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["mostPlayed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <h3>Most Played\n          <span class=\"text-small\"><a href=\"/play/mostPlayed\" class=\"playMostPlayed\">Play all <i class=\"fi-play-circle\"></i></a></span>\n        </h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\""
    + container.escapeExpression(((helper = (helper = helpers.showMostPlayed || (depth0 != null ? depth0.showMostPlayed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"showMostPlayed","hash":{},"data":data}) : helper)))
    + " text-center small-12 medium-12 large-12 cell\">There aren't any songs that you have played yet!</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n            <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/album/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "/track/"
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n              <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\">\n              <span>"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.ARTIST_NAME || (depth0 != null ? depth0.ARTIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              <div class=\"hov\"></div>\n              <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n            </a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mostPlayed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.mostPlayed : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mostPlayed : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n";
},"useData":true});
this["templates"]["playlist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + ">\n            <a href=\"#\">\n              <div class=\"playImage\">\n                <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.albumId || (depth0 != null ? depth0.albumId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumId","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.PLAYLIST_NAME || (depth0 != null ? depth0.PLAYLIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_NAME","hash":{},"data":data}) : helper)))
    + "\">\n              </div>\n              <span class=\"playlistName\">"
    + alias4(((helper = (helper = helpers.PLAYLIST_NAME || (depth0 != null ? depth0.PLAYLIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              <div class=\"hov\"></div>\n              <div class=\"playListOptions\">\n                <button data-playlist-id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + " class=\"playlistPlay cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n                <!-- <span data-playlist-id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + " class=\"editPlaylistName\"><i class=\"fi-pencil\"> Edit</i></span>\n                <span data-playlist-id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + " class=\"deletePlaylist\"><i class=\"fi-x\"> Delete</i></span> -->\n              </div>\n              <div class=\"menu-popup-cont\">\n                <div class=\"playlist-manage text-center\">&#8286;</div>\n                <div class=\"menu-popup playlist-actions\">\n                  <span data-playlist-id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + " class=\"editPlaylistName\"><i class=\"fi-pencil playlistManage\"> Edit</i></span>\n                  <span data-playlist-id="
    + alias4(((helper = (helper = helpers.PLAYLIST_ID || (depth0 != null ? depth0.PLAYLIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLAYLIST_ID","hash":{},"data":data}) : helper)))
    + " class=\"deletePlaylist\"><i class=\"fi-x playlistManage\"> Delete</i></span>\n                </div>\n              </div>\n            </a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"playlist_cont\">\n  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <h3>Playlists <span class=\""
    + container.escapeExpression(((helper = (helper = helpers.seeAllPlaylists || (depth0 != null ? depth0.seeAllPlaylists : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"seeAllPlaylists","hash":{},"data":data}) : helper)))
    + " seeAll\"><a class=\"seeAllPlaylists\" data-category=\"playlists\" href=\"#\">(See All)</a></span><span id=\"playlistTrackError\"></span></h3>\n      <ul class=\"small-12 medium-12 large-12 cell playlist_list playlistHome\">\n        <li id=\"createPlaylistLi\">\n          <a class=\"playListCreate\" href=\"#\">\n            <div class=\"create_icon\">\n              <i class=\"fi-plus\"></i>\n            </div>\n            <span class=\"create_text\">Create Playlist</span>\n          </a>\n        </li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.playlists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n  <div class=\"playListPopup\">\n    <div class=\"cont\">\n      <button class=\"closebutton\" type=\"button\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n      <div class=\"createPlaylistInp\">\n        <input type=\"text\" placeholder=\"Playlist name\" id=\"playlistName\" />\n      </div>\n      <div class=\"createbtns\">\n        <button id=\"createBtn\" class=\"button primary\">Create</button>\n        <button id=\"cancelBtn\" class=\"button primary\">Cancel</button>\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n    </div>\n  </div>\n\n  <div class=\"deletePlaylistPopup\">\n    <div class=\"cont\">\n      <button class=\"closeDelete\" type=\"button\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n      <h4>Do you really want to delete this playlist</h4>\n      <div class=\"createbtns\">\n        <button id=\"deleteBtn\" class=\"button primary\">Delete</button>\n        <button id=\"cancelDeleteBtn\" class=\"button primary\">Cancel</button>\n      </div>\n      <div id=\"playListerror\"></div>\n    </div>\n  </div>\n\n  <div class=\"editPlaylistPopup\">\n    <div class=\"cont\">\n      <button class=\"closeEdit\" type=\"button\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n      <h4>Edit playlist name</h4>\n      <div class=\"editPlaylistInp\">\n        <input type=\"text\" placeholder=\"Playlist name\" id=\"editplaylistName\" />\n      </div>\n      <div class=\"createbtns\">\n        <button id=\"editBtn\" class=\"button primary\">Edit</button>\n        <button id=\"cancelEditBtn\" class=\"button primary\">Cancel</button>\n      </div>\n      <div id=\"emptyField\" class=\"hide text-center\">This field is required</div>\n      <div id=\"editPlaylistError\"></div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["recommendations"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n            <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/album/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "/track/"
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n              <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\">\n              <span>"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.ARTIST_NAME || (depth0 != null ? depth0.ARTIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              <div class=\"hov\"></div>\n              <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n            </a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class="
    + container.escapeExpression(((helper = (helper = helpers.showRecs || (depth0 != null ? depth0.showRecs : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"showRecs","hash":{},"data":data}) : helper)))
    + ">\n  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <h3>Made for you</h3>\n      <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.recommendations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["scripts"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src=\"/js/lib/jquery-3.3.1.min.js\"></script>\n<script src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.js\"></script>\n<script src=\"/js/lib/jquery.ui.touch-punch.min.js\"></script>\n<script src=\"/js/lib/modernizr-2.8.3.min.js\"></script>\n<script src=\"/js/lib/foundation-6.4.2.min.js\"></script>\n<script src=\"/js/lib/handlebars-4.0.11.min.js\"></script>\n<script src=\"/js/lib/slick.min.js\"></script>\n<script src=\"/js/lib/build/mediaelement-and-player.js\"></script>\n<script src=\"/dist/templates.js\"></script>\n<script src=\"/dist/scripts.js\"></script>\n<noscript>Javascript is disabled in your browser.</noscript>\n";
},"useData":true});
this["templates"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <li class=\"clearfix\">\n                <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/album/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "/track/"
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n                  <div class=\"img\">\n                    <img conerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + ".jpg\">\n                    <div class=\"hov\"></div>\n                    <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n                  </div>\n                  <div class=\"trackItem\">\n                    <span class=\"songName\">"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.ARTIST_NAME || (depth0 != null ? depth0.ARTIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n                  </div>\n                </a>\n              </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li>\n              <a title=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/album/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "\">\n                <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\">\n                <span>"
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n                <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.STAGE_NAME || (depth0 != null ? depth0.STAGE_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"STAGE_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n                <div class=\"hov\"></div>\n                <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n              </a>\n            </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li>\n              <a title=\""
    + alias4(((helper = (helper = helpers.STAGE_NAME || (depth0 != null ? depth0.STAGE_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"STAGE_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/artist/"
    + alias4(((helper = (helper = helpers.ARTIST_ID || (depth0 != null ? depth0.ARTIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_ID","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\"artist_icon\">\n                  <svg width=\"80\" height=\"79\" viewBox=\"0 0 80 79\" xmlns=\"http://www.w3.org/2000/svg\"><title>Artist Icon</title><path d=\"M53.043 50.486L46.68 46.83c-.636-.366-1.074-.99-1.2-1.716-.125-.725.077-1.462.555-2.02l5.178-6.072c3.287-3.84 5.097-8.743 5.097-13.803V21.24c0-5.85-2.447-11.497-6.716-15.5C45.266 1.686 39.596-.343 33.66.048c-11.12.718-19.83 10.326-19.83 21.87v1.3c0 5.063 1.81 9.964 5.096 13.802l5.18 6.074c.476.558.678 1.295.553 2.02-.127.723-.563 1.35-1.202 1.717l-12.697 7.3C4.124 57.9 0 64.982 0 72.61v5.92h2.97v-5.92c0-6.562 3.548-12.653 9.265-15.902l12.702-7.3c1.407-.81 2.372-2.19 2.65-3.788.276-1.598-.17-3.22-1.222-4.454l-5.18-6.077C18.356 31.787 16.8 27.57 16.8 23.216v-1.3c0-9.982 7.49-18.287 17.05-18.906 5.124-.326 9.99 1.41 13.712 4.9 3.727 3.493 5.778 8.227 5.778 13.332v1.977c0 4.352-1.557 8.57-4.385 11.872l-5.18 6.074c-1.05 1.234-1.496 2.858-1.22 4.456.278 1.597 1.242 2.977 2.647 3.785l4.51 2.59c1.048-.61 2.16-1.12 3.33-1.51zM66.84 37.133v22.71c-2.038-2.203-4.942-3.592-8.17-3.592-6.143 0-11.14 5-11.14 11.14 0 6.143 4.996 11.14 11.14 11.14 6.142 0 11.14-4.997 11.14-11.14V42.28l8.705 5.027L80 44.732l-13.16-7.6zM58.67 75.56c-4.504 0-8.17-3.664-8.17-8.17 0-4.504 3.664-8.168 8.17-8.168 4.504 0 8.168 3.664 8.168 8.17 0 4.504-3.664 8.168-8.17 8.168z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\n                </div>\n                <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.STAGE_NAME || (depth0 != null ? depth0.STAGE_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"STAGE_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n                <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n              </a>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"js-searchResults\">\n  <!-- <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <div class=\"small-12 medium-offset-2 medium-9 large-offset-3 large-9 cell\">\n        <section class=\"mtabs\">\n          <ul class=\"homeTabsList clearfix\">\n            <li>\n              <a class=\""
    + alias4(((helper = (helper = helpers.searchHome || (depth0 != null ? depth0.searchHome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchHome","hash":{},"data":data}) : helper)))
    + " searchHome\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-home\"></i></span>\n                <span class=\"tabName\">Search</span>\n              </a>\n            </li>\n            <li class=\""
    + alias4(((helper = (helper = helpers.showTracksTab || (depth0 != null ? depth0.showTracksTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showTracksTab","hash":{},"data":data}) : helper)))
    + "\">\n              <a data-tab-category=\"songsTab\" class=\"seeAllR "
    + alias4(((helper = (helper = helpers.searchTrack || (depth0 != null ? depth0.searchTrack : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchTrack","hash":{},"data":data}) : helper)))
    + "\" data-category=\"tracks\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-music\"></i></span>\n                <span class=\"tabName\">Songs</span>\n              </a>\n            </li>\n            <li class=\""
    + alias4(((helper = (helper = helpers.showAlbumsTab || (depth0 != null ? depth0.showAlbumsTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showAlbumsTab","hash":{},"data":data}) : helper)))
    + "\">\n              <a data-tab-category=\"albumsTab\" class=\"seeAllR "
    + alias4(((helper = (helper = helpers.searchAlbum || (depth0 != null ? depth0.searchAlbum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchAlbum","hash":{},"data":data}) : helper)))
    + "\" data-category=\"albums\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-layout\"></i></span>\n                <span class=\"tabName\">Albums</span>\n              </a>\n            </li>\n            <li class=\""
    + alias4(((helper = (helper = helpers.showArtistsTab || (depth0 != null ? depth0.showArtistsTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showArtistsTab","hash":{},"data":data}) : helper)))
    + "\">\n              <a data-tab-category=\"artistsTab\" class=\"seeAllR "
    + alias4(((helper = (helper = helpers.searchArtists || (depth0 != null ? depth0.searchArtists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchArtists","hash":{},"data":data}) : helper)))
    + "\" data-category=\"artists\"  href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-torsos-all\"></i></span>\n                <span class=\"tabName\">Artists</span>\n              </a>\n            </li>\n          </ul>\n        </section>\n      </div>\n    </div>\n  </div> -->\n\n  <h3 class=\"text-center srchHead\">Search results for \"<span class='searchStr'>"
    + alias4(((helper = (helper = helpers.searchStr || (depth0 != null ? depth0.searchStr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchStr","hash":{},"data":data}) : helper)))
    + "</span>\"</h3>\n  <div class=\"srTracks\">\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div id=\"js-srTracks\" class=\""
    + alias4(((helper = (helper = helpers.showTracks || (depth0 != null ? depth0.showTracks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showTracks","hash":{},"data":data}) : helper)))
    + " sResults small-12 medium-12 large-12 cell\">\n          <h3>Songs <span class=\""
    + alias4(((helper = (helper = helpers.seeAllTracks || (depth0 != null ? depth0.seeAllTracks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seeAllTracks","hash":{},"data":data}) : helper)))
    + " seeAll\"><a class=\"seeAllR\" data-category=\"tracks\" href=\"#\">(See All)</a></span></h3>\n\n          <ul class=\"srTracks\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.songs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n        <div id=\"js-srAlbums\" class=\""
    + alias4(((helper = (helper = helpers.showAlbums || (depth0 != null ? depth0.showAlbums : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showAlbums","hash":{},"data":data}) : helper)))
    + " sResults small-12 medium-12 large-12 cell\">\n          <h3>Albums <span class=\""
    + alias4(((helper = (helper = helpers.seeAllAlbums || (depth0 != null ? depth0.seeAllAlbums : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seeAllAlbums","hash":{},"data":data}) : helper)))
    + " seeAll\"><a class=\"seeAllR\" data-category=\"albums\" href=\"#\">(See All)</a></span></h3>\n          <ul class=\"topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.albums : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n        <div id=\"js-srArtists\" class=\""
    + alias4(((helper = (helper = helpers.showArtists || (depth0 != null ? depth0.showArtists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showArtists","hash":{},"data":data}) : helper)))
    + " sResults srArtists small-12 medium-12 large-12 cell\">\n          <h3>Artists <span class=\""
    + alias4(((helper = (helper = helpers.seeAllArtists || (depth0 != null ? depth0.seeAllArtists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seeAllArtists","hash":{},"data":data}) : helper)))
    + " seeAll\"><a class=\"seeAllR\" data-category=\"artists\" href=\"#\">(See All)</a></span></h3>\n          <ul class=\"topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</section>\n";
},"useData":true});
this["templates"]["statResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li class=\"trackList statResults\" id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"trackItem\">\n              <span class=\"songName\">"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n            <div class=\"text-right trackTime\">"
    + alias4(((helper = (helper = helpers.NUMBER_OF_PLAYS || (depth0 != null ? depth0.NUMBER_OF_PLAYS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NUMBER_OF_PLAYS","hash":{},"data":data}) : helper)))
    + "</div>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <div id=\"latlng\" class=\"hide\">"
    + alias4(((helper = (helper = helpers.latlng || (depth0 != null ? depth0.latlng : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latlng","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"small-12 medium-12 large-offset-2 large-6 cell albumDetails\">\n      <div class=\"albumHeader statHeader clearfix\">\n        <div class=\"albumName\">\n          "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumName : stack1), depth0))
    + "\n        </div>\n        <div class=\"artistName\">\n          "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.artistName : stack1), depth0))
    + "\n        </div>\n        <div>\n          <div class=\"totalLikes\">\n            <span><i class=\"fi-like\"></i></span>\n            <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.totalLikes : stack1), depth0))
    + "</span>\n            <span class=\"text-small\"> Likes</span>\n          </div>\n          <div class=\"totalDislikes\">\n            <span><i class=\"fi-dislike\"></i></span>\n            <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.totalDislikes : stack1), depth0))
    + "</span>\n            <span class=\"text-small\"> Dislikes</span>\n          </div>\n        </div>\n      </div>\n      <ul id=\"tracks\">\n        <li class=\"trackList statResults statLi\" id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"trackItem\">\n            <span class=\"songHeader\">Songs</span>\n          </div>\n          <div class=\"text-right trackTime songHeader\">Streams</div>\n        </li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.stats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n";
},"useData":true});
this["templates"]["styles"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"/css/lib/normalize-7.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-6.4.2.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-icon.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/slick.css\"/>\n<link rel=\"stylesheet\" href=\"/css/lib/slick-theme.css\"/>\n<link rel=\"stylesheet\" href=\"/css/lib/mediaelementplayer.css\"/>\n<link rel=\"stylesheet\" href=\"/css/lib/jquery-ui-1.12.1.min.js\">\n<link rel=\"stylesheet\" href=\"/dist/styles.css\">\n<link rel='shortcut icon' href='/favicon.png'>\n";
},"useData":true});
this["templates"]["topTrending"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n          <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/album/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + "/track/"
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n            <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias4(((helper = (helper = helpers.ALBUM_ID || (depth0 != null ? depth0.ALBUM_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_ID","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = helpers.ALBUM_NAME || (depth0 != null ? depth0.ALBUM_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ALBUM_NAME","hash":{},"data":data}) : helper)))
    + "\">\n            <!-- <div class=\"imgOverlay\"></div> -->\n            <span>"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.ARTIST_NAME || (depth0 != null ? depth0.ARTIST_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n            <div class=\"hov\"></div>\n            <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n          </a>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <h3 class=\""
    + alias4(((helper = (helper = helpers.showTopTrending || (depth0 != null ? depth0.showTopTrending : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showTopTrending","hash":{},"data":data}) : helper)))
    + "\">Top "
    + alias4(((helper = (helper = helpers.trendingCount || (depth0 != null ? depth0.trendingCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trendingCount","hash":{},"data":data}) : helper)))
    + "\n      <span class=\"text-small\"><a href=\"/play/top50\"> Play all <i class=\"fi-play-circle\"></i></a></span>\n    </h3>\n    <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.topTrendingTracks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["changePassword"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/user/home\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"changePassword commonForm\">\n\n    <form id=\"changePassword\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Old Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"oldPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>New Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"newPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm Password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n    </form>\n\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n    <div id=\"msg\" class=\"success\"></div>\n    <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/user/home\">Go to your music page!</a></div>\n  </section>\n  <div class=\"bodyForm\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["editProfile"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/user/home\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"editProfile commonForm\">\n    <form id=\"editProfile\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" value=\""
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Email\n              <input type=\"email\" placeholder=\"Email\" id=\"email\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n      <div id=\"msg\" class=\"success\"></div>\n      <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Go to your music page!</a></div>\n    </form>\n    <div class=\"bodyForm\"></div>\n  </section>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["forgotPassword"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"forgotPassword commonForm\">\n\n    <form id=\"confirmUser\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n              <label>Username\n                <input type=\"text\" placeholder=\"Username\" id=\"username\" maxlength=\"30\"/>\n              </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n    </form>\n\n    <form id=\"forgotPassword\" class=\"hide\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>New Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"newPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm Password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n    </form>\n\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n    <div id=\"msg\" class=\"success\"></div>\n    <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n  </section>\n  <div class=\"bodyForm\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body>\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"grid-container\">\n    <div class=\"grid-x\">\n      <div class=\"small-offset-1 small-8 medium-offset-1 medium-11 large-offset-1 large-10 cell\">\n        <section id=\"homeTabsCont\" class=\"js-nonSearchView hometabs mtabs\">\n          <ul class=\"homeTabsList clearfix\">\n            <li>\n              <a data-tab-category=\"userHomeTab\" class=\""
    + alias4(((helper = (helper = helpers.unhighlight || (depth0 != null ? depth0.unhighlight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unhighlight","hash":{},"data":data}) : helper)))
    + "\" href=\"/user/home\">\n                <span class=\"tabImg\"><i class=\"fi-home\"></i></span>\n                <span class=\"tabName\">Home</span>\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"playlistTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightPlaylistTab || (depth0 != null ? depth0.highlightPlaylistTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightPlaylistTab","hash":{},"data":data}) : helper)))
    + " js-sup\" href=\"/user/playlists/seeAll\">\n                <span class=\"tabImg\"><i class=\"fi-music\"></i></span>\n                <span class=\"tabName\">Playlists</span>\n              </a>\n            </li>\n            <li class=\""
    + alias4(((helper = (helper = helpers.showRecs || (depth0 != null ? depth0.showRecs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showRecs","hash":{},"data":data}) : helper)))
    + "\">\n              <a data-tab-category=\"recommendTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightRecomTab || (depth0 != null ? depth0.highlightRecomTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightRecomTab","hash":{},"data":data}) : helper)))
    + " js-sup\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-heart\"></i></span>\n                <span class=\"tabName\">Made for you</span>\n              </a>\n            </li>\n            <!-- <li>\n              <a data-tab-category=\"topTrendTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightTopTrendingTab || (depth0 != null ? depth0.highlightTopTrendingTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightTopTrendingTab","hash":{},"data":data}) : helper)))
    + " js-sup\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-graph-trend\"></i></span>\n                <span class=\"tabName\">Top 50</span>\n              </a>\n            </li> -->\n            <li>\n              <a data-tab-category=\"playedTab\" class=\""
    + alias4(((helper = (helper = helpers.highlightMostPlayedTab || (depth0 != null ? depth0.highlightMostPlayedTab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlightMostPlayedTab","hash":{},"data":data}) : helper)))
    + " js-sup\" href=\"#\">\n                <span class=\"tabImg\"><i class=\"fi-play-circle\"></i></span>\n                <span class=\"tabName\">Most Played by you</span>\n\n              </a>\n            </li>\n            <li>\n              <a data-tab-category=\"searchConcertTab\" href=\"/searchconcert\">\n                <span class=\"tabImg\"><i class=\"fi-magnifying-glass\"></i></span>\n                <span class=\"tabName\">Search concerts</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"/payment\">\n                <span class=\"tabImg\"><i class=\"fi-graph-trend\"></i></span>\n                <span class=\"tabName\">Stats</span>\n              </a>\n            </li>\n          </ul>\n        </section>\n      </div>\n    </div>\n  </div>\n\n  <section id=\"playlistCont\" class=\"clearfix js-nonSearchView playlist "
    + alias4(((helper = (helper = helpers.showPlayList || (depth0 != null ? depth0.showPlayList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showPlayList","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.playlist,depth0,{"name":"playlist","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n\n  <section id=\"recommendationsCont\" class=\"clearfix js-nonSearchView js-nonPlaylist homeSection "
    + alias4(((helper = (helper = helpers.showRecom || (depth0 != null ? depth0.showRecom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showRecom","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.recommendations,depth0,{"name":"recommendations","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n\n  <section id=\"topCharts\" class=\"clearfix js-nonSearchView js-nonPlaylist homeSection "
    + alias4(((helper = (helper = helpers.showCharts || (depth0 != null ? depth0.showCharts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showCharts","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <h3 class=\"\">Charts</h3>\n        <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n          <li>\n            <a href=\"/play/top50\" class=\"top50\">\n              <img src=\"/dist/assets/top.png\" alt=\"Top 50\" />\n              <div class=\"hov\"></div>\n              <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n            </a>\n          </li>\n          <li>\n            <a href=\"/play/mostPlayedByAll\" class=\"mostPlayedChart\">\n              <img src=\"/dist/assets/mostPlayed.png\" alt=\"Most Played\" />\n              <div class=\"hov\"></div>\n              <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n            </a>\n          </li>\n          <li>\n            <a href=\"/play/mostLikedByAll\" class=\"mostLikedChart\">\n              <img src=\"/dist/assets/mostLiked.jpg\" alt=\"Most Liked\" />\n              <div class=\"hov\"></div>\n              <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <!-- <section id=\"topTrendCont\" class=\"clearfix js-nonSearchView js-nonPlaylist topTrend\">\n"
    + ((stack1 = container.invokePartial(partials.topTrending,depth0,{"name":"topTrending","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section> -->\n\n  <section id=\"mostPlayedCont\" class=\"clearfix js-nonSearchView js-nonPlaylist homeSection "
    + alias4(((helper = (helper = helpers.showMPlayed || (depth0 != null ? depth0.showMPlayed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showMPlayed","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.mostPlayed,depth0,{"name":"mostPlayed","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n\n  <section id=\"searchCont\" class=\"hide js-searchView clearfix\">\n  </section>\n  <div class=\"bodyBg bodyBgPlay\"></div>\n</body>\n\n"
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
    + "</h1>\n    </div>\n  </header>\n  <section class=\"login commonForm\">\n    <form id=\"login\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign In\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div class=\"text-center\"><a href=\"/forgotPassword\">Forgot Password?</a></div>\n\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n    </form>\n  </section>\n<div class=\"bodyForm\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["signup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"signup commonForm\">\n    <form id=\"signup\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Email\n              <input type=\"email\" placeholder=\"Email\" id=\"userEmail\" maxlength=\"50\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign Up\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n      <div id=\"msg\"></div>\n      <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n    </form>\n  </section>\n<div class=\"bodyForm\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});