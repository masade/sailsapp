
var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');

Handlebars.registerHelper('list', function(context, options) {

  var attrs = Object.keys(options.hash).map(function(key) {
    return key + '="' + options.hash[key] + '"';
  }).join(" ");

  return "<ul " + attrs + ">" + context.map(function(item) {
    return "<li>" + options.fn(item) + "</li>";
  }).join("") + "</ul>";

});

Handlebars.registerHelper('ifed', function(param,elseparam) {

  if(typeof param == "undefined")
		return elseparam;

  // else return param
  return param;

});