/* -*- mode:javascript; coding:utf-8; -*- Time-stamp: <helpers.js - root> */

(function ()
 {
     if (typeof(DisplayObject) !== 'undefined')
     {
         DisplayObject.prototype.setPosition = function (p)
         {
             if (p)
             {
                 this.x = p.x;
                 this.y = p.y;
             }
         };
     }

     Object.prototype.keys = function ()
     {
         var keys = [];

         for (var k in this)
         {
             if (this.hasOwnProperty(k))
             {
                 keys.push(k);
             }
         }
         return keys;
     };
 }());
