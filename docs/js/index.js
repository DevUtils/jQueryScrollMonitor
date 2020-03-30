/* global CjsBaseClass,CJS_DEBUG_MODE_0,CJS_DEBUG_MODE_1,CJS_DEBUG_MODE_2 */
var jqScrollMonitor = jqScrollMonitor || {};
jqScrollMonitor.Tindex = function($, objname, options)
{
    'use strict';
    var self = this;
 
    this.create = function()
    {
        self.var_name = 'var_value';
        self.events.onCreate();
    };
 
    this.onReady = function()
    {
        self.events.onReady();
    };
 
    this.start = function()
    {
        self.events.onStarted();
    };
 
    this.processTriggers = function()
    {
 
    };
 
    this.onElementsEvents = function()
    {
 
    };
 
    this.execute = function()
    {
      $(window).scrollMonitor
      (
        {
          oneShot: false,
          triggers: [0,10,20,30,40,50,60,70,80,90,100],
          onTriggerPoint: function(e)
          {
            console.log('window scroll shot', e);
            $('#frPosition').html(e.toString());
          }
        }
      );
    };
 
    CjsBaseClass.call(this, $, objname, options);
};
 
jqScrollMonitor.index = new jqScrollMonitor.Tindex
(
    window.cjsbaseclass_jquery,
    'index',
    {
        'debug'       : CJS_DEBUG_MODE_1,
        'highlighted' : 'auto',
        'another_opt' : 'custom_value'
    }
);