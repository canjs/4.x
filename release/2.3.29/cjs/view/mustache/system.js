/*!
 * CanJS - 2.3.29
 * http://canjs.com/
 * Copyright (c) 2017 Bitovi
 * Tue, 21 Feb 2017 00:42:50 GMT
 * Licensed MIT
 */

/*can@2.3.29#view/mustache/system*/
var can = require('./mustache.js');
function translate(load) {
    return 'define([\'can/view/mustache/mustache\'],function(can){' + 'return can.view.preloadStringRenderer(\'' + load.metadata.pluginArgument + '\',' + 'can.Mustache(function(scope,options) { ' + new can.Mustache({
        text: load.source,
        name: load.name
    }).template.out + ' })' + ')' + '})';
}
module.exports = { translate: translate };