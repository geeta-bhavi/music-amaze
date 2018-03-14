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
    + "</head>\n\n<body class=\"index clearfix\">\n  <header id=\"header\" class=\"withoutTitle\">\n    <h1 class=\"hide\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    <a class=\"logo logoImg\" href=\"/\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</span></a>\n\n    <div class=\"title-bar\" data-responsive-toggle=\"index-menu\" data-hide-for=\"medium\">\n      <button class=\"menu-icon\" type=\"button\" data-toggle></button>\n      <div class=\"title-bar-title\">Menu</div>\n    </div>\n\n    <div id=\"index-menu\" class=\"index clearfix addFloat\">\n      <div class=\"top-bar-right\">\n        <ul class=\"dropdown menu vertical medium-horizontal\" data-dropdown-menu>\n          <li><a href=\"/login\" title=\"Sign In\">Sign In</a></li>\n          <li><a href=\"/signup\" title=\"Sign Up\">Sign Up</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class=\"screenText clearfix\">\n    <div class=\"sli1\">Stream. Explore. Sign up for free.</div>\n    <div class=\"sli2\">\n      <h4>$0.00 <span class=\"month\"> / month</span></h4>\n      <div class=\"features\">\n        <ul class=\"spotify-premium-list\">\n          <li>Shuffle play</li>\n          <li>Ad free</li>\n          <li>Play any track</li>\n          <li>High quality audio</li>\n        </ul>\n      </div>\n    </div>\n\n\n\n\n  </div>\n  <!-- <div class=\"bg fixed clearfix\"></div> -->\n  <div class=\"bodyBg\"></div>\n  "
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</body>\n\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["play"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body class=\"clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n  <section class=\"hw-accelerate\">\n"
    + ((stack1 = container.invokePartial(partials.listTracks,depth0,{"name":"listTracks","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n\n\n\n<div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <span class=\"copy\">2018 Music Amaze</span>\n    <ul class=\"inline-list clearfix\">\n      <li><a href=\"#\"><i class=\"fi-social-facebook\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-twitter\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-linkedin\"></i></a></li>\n      <li><a href=\"#\"><i class=\"fi-social-github\"></i></a></li>\n    </ul>\n</footer>\n";
},"useData":true});
this["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header class=\"noBg\" id=\"header\">\n  <div id=\"headerDiv\" class=\"grid-x\">\n    <div class=\"small-6 medium-6 large-3 cell\">\n      <a class=\"logoImg\" href=\"/user/home\"></a>\n      <div class=\"searchIcon "
    + alias4(((helper = (helper = helpers.displaySearch || (depth0 != null ? depth0.displaySearch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displaySearch","hash":{},"data":data}) : helper)))
    + "\">\n        <a id=\"searchIcon\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n      </div>\n    </div>\n    <div class=\"userMenu\">\n      <span class=\"user-name\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</span>\n      <div class=\"menuDiv\">\n        <i class=\"fi-torso\"></i>\n        <span class=\"menuIcon\"></span>\n      </div>\n      <div id=\"user-menu\">\n        <ul class=\"clearfix\">\n          <li><a href=\"/user/changePassword\"><i class=\"fi-lock\"></i> Change Password</a></li>\n          <li><a href=\"/user/editProfile\"><i class=\"fi-pencil\"></i> Edit Profile</a></li>\n          <li><a href=\"/logout\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"search\" class=\"box-search grid-x\">\n    <div class=\"small-10 medium-offset-3 medium-6 large-offset-3 large-6 cell\">\n      <div class=\"box-input\">\n        <input type=\"text\" id=\"search-text\" placeholder=\"Search for an Artist, Song or Album\" autocomplete=\"off\" class=\"search-input js-search-input\" value=\"\">\n        <a class=\"box-search-icon js-search-icon\" href=\"#\"><i class=\"fi-magnifying-glass\"></i></a>\n      </div>\n    </div>\n    <div class=\"bt-close js-search-close small-2 medium-3 large-3\"><i class=\"fi-x\"></i></div>\n  </div>\n</header>\n";
},"useData":true});
this["templates"]["listTracks"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"small-12 medium-6 large-4 cell coverArt\">\n        <img onerror=\"this.src='/dist/assets/error.png'\" src=\"/assets/cover/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumId : stack1), depth0))
    + ".jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumName : stack1), depth0))
    + "\">\n        <div class=\"audioP\">\n          <div class=\"players\" id=\"player2-container\">\n            <div class=\"media-wrapper\">\n              <audio id=\"audioPlayer\" preload=\"none\" controls style=\"max-width:100%;\">\n                <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.trackSource : stack1), depth0))
    + "\" type=\"audio/mp3\">\n                  Your browser does not support the audio element.\n              </audio>\n            </div>\n          </div>\n        </div>\n        <div class=\"trackActions\">\n          <span><a href=\"#\"><i class=\"fi-loop\"></i></a></span>\n          <span><a href=\"#\"><i class=\"fi-previous\"></i></a></span>\n          <span><a href=\"#\"><i class=\"fi-next\"></i></i></a></span>\n          <span><a href=\"#\"><i class=\"fi-plus\"></i></a></span>\n          <span><a href=\"#\"><i class=\"fi-heart\"></i></a></span>\n        </div>\n      </div>\n\n      <div class=\"small-12 medium-6 large-offset-1 large-6 cell albumDetails\">\n        <div class=\"albumHeader\">\n          <div class=\"albumName\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.albumName : stack1), depth0))
    + "\n          </div>\n          <div class=\"artistName\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.artistName : stack1), depth0))
    + "\n          </div>\n          <span class=\"genre\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.genre : stack1), depth0))
    + "\n            <span class=\"separator\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.separator : stack1), depth0))
    + "</span>\n          </span>\n          <span class=\"yearReleased\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.yearReleased : stack1), depth0))
    + "\n          </span>\n        </div>\n        <ul id=\"tracks\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.albumTracks : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li class=\"trackList "
    + alias4(((helper = (helper = helpers.highlight || (depth0 != null ? depth0.highlight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highlight","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\" data-track-src=\""
    + alias4(((helper = (helper = helpers.TRACK_SOURCE || (depth0 != null ? depth0.TRACK_SOURCE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_SOURCE","hash":{},"data":data}) : helper)))
    + "\">\n              <div class=\"trackItem "
    + alias4(((helper = (helper = helpers.soundIcon || (depth0 != null ? depth0.soundIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"soundIcon","hash":{},"data":data}) : helper)))
    + "\">\n                <span class=\"songName\">"
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              </div>\n              <div class=\"text-right\">"
    + alias4(((helper = (helper = helpers.trackTime || (depth0 != null ? depth0.trackTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackTime","hash":{},"data":data}) : helper)))
    + "</div>\n            </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"small-12 medium-12 large-12 cell text-center\">\n        There is some error getting the tracks.\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.album : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.album : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});
this["templates"]["scripts"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src=\"/js/lib/jquery-3.3.1.min.js\"></script>\n<script src=\"/js/lib/modernizr-2.8.3.min.js\"></script>\n<script src=\"/js/lib/foundation-6.4.2.min.js\"></script>\n<script src=\"/js/lib/handlebars-4.0.11.min.js\"></script>\n<script src=\"/js/lib/slick.min.js\"></script>\n<script src=\"/js/lib/build/mediaelement-and-player.js\"></script>\n<script src=\"/dist/templates.js\"></script>\n<script src=\"/dist/scripts.js\"></script>\n<noscript>Javascript is disabled in your browser.</noscript>\n";
},"useData":true});
this["templates"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <li>\n                <a title=\""
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

  return "            <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n              <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
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

  return "            <li id=\""
    + alias4(((helper = (helper = helpers.TRACK_ID || (depth0 != null ? depth0.TRACK_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_ID","hash":{},"data":data}) : helper)))
    + "\">\n              <a title=\""
    + alias4(((helper = (helper = helpers.TRACK_NAME || (depth0 != null ? depth0.TRACK_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TRACK_NAME","hash":{},"data":data}) : helper)))
    + "\" href=\"/play/artist/"
    + alias4(((helper = (helper = helpers.ARTIST_ID || (depth0 != null ? depth0.ARTIST_ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARTIST_ID","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\"artist_icon\">\n                  <svg width=\"80\" height=\"79\" viewBox=\"0 0 80 79\" xmlns=\"http://www.w3.org/2000/svg\"><title>Artist Icon</title><path d=\"M53.043 50.486L46.68 46.83c-.636-.366-1.074-.99-1.2-1.716-.125-.725.077-1.462.555-2.02l5.178-6.072c3.287-3.84 5.097-8.743 5.097-13.803V21.24c0-5.85-2.447-11.497-6.716-15.5C45.266 1.686 39.596-.343 33.66.048c-11.12.718-19.83 10.326-19.83 21.87v1.3c0 5.063 1.81 9.964 5.096 13.802l5.18 6.074c.476.558.678 1.295.553 2.02-.127.723-.563 1.35-1.202 1.717l-12.697 7.3C4.124 57.9 0 64.982 0 72.61v5.92h2.97v-5.92c0-6.562 3.548-12.653 9.265-15.902l12.702-7.3c1.407-.81 2.372-2.19 2.65-3.788.276-1.598-.17-3.22-1.222-4.454l-5.18-6.077C18.356 31.787 16.8 27.57 16.8 23.216v-1.3c0-9.982 7.49-18.287 17.05-18.906 5.124-.326 9.99 1.41 13.712 4.9 3.727 3.493 5.778 8.227 5.778 13.332v1.977c0 4.352-1.557 8.57-4.385 11.872l-5.18 6.074c-1.05 1.234-1.496 2.858-1.22 4.456.278 1.597 1.242 2.977 2.647 3.785l4.51 2.59c1.048-.61 2.16-1.12 3.33-1.51zM66.84 37.133v22.71c-2.038-2.203-4.942-3.592-8.17-3.592-6.143 0-11.14 5-11.14 11.14 0 6.143 4.996 11.14 11.14 11.14 6.142 0 11.14-4.997 11.14-11.14V42.28l8.705 5.027L80 44.732l-13.16-7.6zM58.67 75.56c-4.504 0-8.17-3.664-8.17-8.17 0-4.504 3.664-8.168 8.17-8.168 4.504 0 8.168 3.664 8.168 8.17 0 4.504-3.664 8.168-8.17 8.168z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\n                </div>\n                <span class=\"artistName\">"
    + alias4(((helper = (helper = helpers.STAGE_NAME || (depth0 != null ? depth0.STAGE_NAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"STAGE_NAME","hash":{},"data":data}) : helper)))
    + "</span>\n              </a>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"js-searchResults\">\n  <div class=\"srTracks\">\n    <div class=\"grid-container\">\n      <div class=\"grid-x\">\n        <div id=\"js-srTracks\" class=\""
    + alias4(((helper = (helper = helpers.showTracks || (depth0 != null ? depth0.showTracks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showTracks","hash":{},"data":data}) : helper)))
    + " small-12 medium-12 large-12 cell\">\n          <h3>Songs</h3>\n          <ul class=\"srTracks\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.songs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n        <div id=\"js-srAlbums\" class=\""
    + alias4(((helper = (helper = helpers.showAlbums || (depth0 != null ? depth0.showAlbums : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showAlbums","hash":{},"data":data}) : helper)))
    + " small-12 medium-12 large-12 cell\">\n          <h3>Albums</h3>\n          <ul class=\"topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.albums : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n        <div id=\"js-srArtists\" class=\""
    + alias4(((helper = (helper = helpers.showArtists || (depth0 != null ? depth0.showArtists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showArtists","hash":{},"data":data}) : helper)))
    + " srArtists small-12 medium-12 large-12 cell\">\n          <h3>Artists</h3>\n          <ul class=\"topTrend\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</section>\n";
},"useData":true});
this["templates"]["styles"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"/css/lib/normalize-7.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-6.4.2.min.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/foundation-icon.css\">\n<link rel=\"stylesheet\" href=\"/css/lib/slick.css\"/>\n<link rel=\"stylesheet\" href=\"/css/lib/slick-theme.css\"/>\n<link rel=\"stylesheet\" href=\"/css/lib/mediaelementplayer.css\"/>\n<link rel=\"stylesheet\" href=\"/dist/styles.css\">\n<link rel='shortcut icon' href='/favicon.png'>\n";
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
    + "</span>\n            <div class=\"hov\"></div>\n            <button class=\"cover-art-playback\"><svg class=\"icon-play\" viewBox=\"0 0 85 100\"><path fill=\"currentColor\" d=\"M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z\"><title>PLAY</title></path></svg></button>\n          </a>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-container\">\n  <div class=\"grid-x\">\n    <h3>Top 10</h3>\n    <ul class=\"small-12 medium-12 large-12 cell topTrend\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.topTrendingTracks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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
    + "</h1>\n    </div>\n  </header>\n  <section class=\"changePassword commonForm\">\n\n    <form id=\"changePassword\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Old Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"oldPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>New Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"newPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm Password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n    </form>\n\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n    <div id=\"msg\" class=\"success\"></div>\n    <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/user/home\">Go to your music page!</a></div>\n  </section>\n  <div class=\"bodyBg\"></div>\n</body>\n"
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
    + "</head>\n\n<body class=\"clearfix\">\n  <header class=\"grid-x\" id=\"header\">\n    <div class=\"small-4 medium-4 large-4 cell\"><a class=\"logoImg\" href=\"/\"></a></div>\n    <div class=\"small-8 medium-8 large-8 cell\">\n      <h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n  </header>\n  <section class=\"forgotPassword commonForm\">\n\n    <form id=\"confirmUser\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n              <label>Username\n                <input type=\"text\" placeholder=\"Username\" id=\"username\" maxlength=\"30\"/>\n              </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" class=\"button primary\">\n      </div>\n    </form>\n\n    <form id=\"forgotPassword\" class=\"hide\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>New Password\n              <input type=\"password\" placeholder=\"New Password\" id=\"newPassword\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm Password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Submit\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n    </form>\n\n    <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n    <div id=\"error\"></div>\n    <div id=\"msg\" class=\"success\"></div>\n    <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n  </section>\n  <div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});
this["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n"
    + ((stack1 = container.invokePartial(partials.styles,depth0,{"name":"styles","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</head>\n\n<body>\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <section class=\"clearfix js-nonSearchView topTrend\">\n"
    + ((stack1 = container.invokePartial(partials.topTrending,depth0,{"name":"topTrending","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n  <section id=\"searchCont\" class=\"hide js-searchView clearfix\">\n  </section>\n  <div class=\"bodyBg\"></div>\n</body>\n\n"
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
    + "</h1>\n    </div>\n  </header>\n  <section class=\"login commonForm\">\n    <form id=\"login\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign In\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div class=\"text-center\"><a href=\"/forgotPassword\">Forgot Password?</a></div>\n\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n    </form>\n  </section>\n<div class=\"bodyBg\"></div>\n</body>\n"
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
    + "</h1>\n    </div>\n  </header>\n  <section class=\"signup commonForm\">\n    <form id=\"signup\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x\">\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Username\n              <input type=\"text\" placeholder=\"Username\" id=\"userName\" maxlength=\"30\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Email\n              <input type=\"email\" placeholder=\"Email\" id=\"userEmail\" maxlength=\"50\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Password\n              <input type=\"password\" id=\"userPassword\" placeholder=\"Password\" />\n            </label>\n          </div>\n          <div class=\"small-12 medium-offset-4 medium-5 large-offset-4 large-4 cell inpPadding\">\n            <label>Confirm password\n              <input type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPassword\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <input type=\"submit\" value=\"Sign Up\" class=\"button primary\">\n        <input type=\"reset\" value=\"Clear\" id=\"reset\" class=\"button primary\">\n      </div>\n      <div id=\"emptyFields\" class=\"hide text-center\">This field is required</div>\n      <div id=\"error\"></div>\n      <div id=\"msg\"></div>\n      <div id=\"loginLink\" class=\"hide text-center\"><a href=\"/login\">Log In to go to your music page!</a></div>\n    </form>\n  </section>\n<div class=\"bodyBg\"></div>\n</body>\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</html>\n";
},"usePartial":true,"useData":true});