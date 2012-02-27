/* -*- mode:javascript; coding:utf-8; -*- Time-stamp: <spritesheet.js - root> */

(function (window)
 {
     var c = function (image, metadata) { this.initialize(image, metadata); };
     var p = c.prototype = new SpriteSheet();

     p.super_initialize = p.initialize;
     p.initialize = function (image, metadata)
     {
         var animations = {};
         var count = 0;
         var frames = [];
         var root = metadata['frames'];

         for (var name in root)
         {
             if (root.hasOwnProperty(name))
             {
                 var item = root[name];

                 if (!item['rotated'])
                 {
                     var f = item['frame'];
                     animations[name] = [count++];
                     frames.push([f['x'], f['y'], f['w'], f['h']]);
                 }
             }
         }
         this.super_initialize({animations: animations, frames: frames, images: [image]});
     };

     p.bitmapFromFrame = function (frame)
     {
         var b = new Bitmap(SpriteSheetUtils.extractFrame(this, frame));

         if (!b.image.complete)
         {
             var d = this.getFrame(this.getAnimation(frame).frames[0]);
             if (d)
             {
                 b.image.height = d.rect.height;
                 b.image.width = d.rect.width;
             }
         }
         b.frame = frame;
         return b;
     };

     window['TexturePackerSpriteSheet'] = c;
 }(window));
