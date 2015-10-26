(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"c:\\!Development\\webstudio\\dev\\scripts\\classes\\app.coffee":[function(require,module,exports){
var App, config;

config = require('config');

module.exports = App = (function() {
  App.prototype.debug = function(msg) {
    if (config.debug) {
      return console.log(msg);
    }
  };

  function App() {
    this.debug('App Initialize');
  }

  return App;

})();


},{"config":"c:\\!Development\\webstudio\\dev\\scripts\\config.coffee"}],"c:\\!Development\\webstudio\\dev\\scripts\\config.coffee":[function(require,module,exports){
module.exports = {
  debug: true
};


},{}],"c:\\!Development\\webstudio\\dev\\scripts\\main.coffee":[function(require,module,exports){
var App, app;

App = require('classes/app');

app = new App();


},{"classes/app":"c:\\!Development\\webstudio\\dev\\scripts\\classes\\app.coffee"}]},{},["c:\\!Development\\webstudio\\dev\\scripts\\main.coffee"]);
