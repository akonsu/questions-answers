/* -*- mode:javascript; coding:utf-8; -*- Time-stamp: <main.js - root> */

(function (window)
 {
     var BITMAPS_ANSWERS = ['a-1.png', 'a-2.png', 'a-3.png', 'a-4.png', 'a-5.png', 'a-6.png', 'a-7.png', 'a-8.png', 'a-9.png'];
     var BITMAPS_QUESTIONS = {
         'q-1-plus-2.png': 'a-3.png',
         'q-4-minus-3.png': 'a-1.png',
         'q-9-minus-1.png': 'a-8.png'
     };

     var QUESTION_POSITION = {x: 200, y: 500};
     var REQUIRED_SIZE = {w: 1000, h: 1000};
     var SPRITESHEET_URL = 'arithmetic.png';

     var _actualsize;
     var _assets;
     var _container;
     var _spritesheet;
     var _stage;
     var _update = true;

     function get_answer_position(prev, current)
     {
         var x = Math.floor(Math.random() * (QUESTION_POSITION.x - current.image.width + 1));
         return new Point(x, prev ? (prev.y + prev.image.height): 0);
     }

     function show_answers()
     {
         shuffle(BITMAPS_ANSWERS);

         var count = BITMAPS_ANSWERS.length;
         var prev_answer;

         for (var i = 0; i < count; i++)
         {
             var answer = _stage.addChild(_assets.bitmapFromFrame(BITMAPS_ANSWERS[i]));
             answer.setPosition(get_answer_position(prev_answer, answer));
             prev_answer = answer;
         }
     }

     function show_question()
     {
         var keys = BITMAPS_QUESTIONS.keys();
         var name = keys[Math.floor(Math.random() * keys.length)];
         var question = _stage.addChild(_assets.bitmapFromFrame(name));

         question.setPosition(QUESTION_POSITION);
     }

     function shuffle(list)
     {
         for (var i = 1, count = list.length; i < count; i++)
         {
             var j = Math.floor(Math.random() * (i + 1)); // choose j in [0..i]

             if (j != i)
             {
                 var t = list[i];
                 list[i] = list[j];
                 list[j] = t;
             }
         }
     }

     function spritesheet_onload(e)
     {
         var canvas = _container.appendChild(document.createElement('canvas'));

         canvas.height = _actualsize.h;
         canvas.width = _actualsize.w;

         _stage = new Stage(canvas);

         _stage.scaleX = _actualsize.w / REQUIRED_SIZE.w;
         _stage.scaleY = _actualsize.h / REQUIRED_SIZE.h;

         if (Touch.isSupported())
         {
             Touch.enable(_stage);
         }
         _assets = new TexturePackerSpriteSheet(_spritesheet, FRAMES);

         show_answers();
         show_question();

         Ticker.addListener(window);
     }

     function start(container, w, h)
     {
         _actualsize = {w: isNaN(w) ? REQUIRED_SIZE.w : w, h: isNaN(h) ? REQUIRED_SIZE.h : h};
         _container = container;
         _spritesheet = new Image();
         _spritesheet.src = SPRITESHEET_URL;
         _spritesheet.onload = spritesheet_onload;
     }

     function tick()
     {
         if (_update)
         {
             _update = false;
             _stage.update();
         }
     }

     FRAMES =
{"frames": {

"a-1.png":
{
	"frame": {"x":2,"y":2,"w":90,"h":76},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":76},
	"sourceSize": {"w":90,"h":76}
},
"a-2.png":
{
	"frame": {"x":94,"y":2,"w":90,"h":76},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":76},
	"sourceSize": {"w":90,"h":76}
},
"a-3.png":
{
	"frame": {"x":186,"y":2,"w":90,"h":77},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":77},
	"sourceSize": {"w":90,"h":77}
},
"a-4.png":
{
	"frame": {"x":278,"y":2,"w":90,"h":88},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":88},
	"sourceSize": {"w":90,"h":88}
},
"a-5.png":
{
	"frame": {"x":370,"y":2,"w":90,"h":94},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":94},
	"sourceSize": {"w":90,"h":94}
},
"a-6.png":
{
	"frame": {"x":2,"y":98,"w":90,"h":99},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":99},
	"sourceSize": {"w":90,"h":99}
},
"a-7.png":
{
	"frame": {"x":94,"y":98,"w":90,"h":91},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":91},
	"sourceSize": {"w":90,"h":91}
},
"a-8.png":
{
	"frame": {"x":186,"y":98,"w":90,"h":88},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":88},
	"sourceSize": {"w":90,"h":88}
},
"a-9.png":
{
	"frame": {"x":278,"y":98,"w":90,"h":97},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":90,"h":97},
	"sourceSize": {"w":90,"h":97}
},
"q-1-plus-2.png":
{
	"frame": {"x":2,"y":199,"w":204,"h":90},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":204,"h":90},
	"sourceSize": {"w":204,"h":90}
},
"q-4-minus-3.png":
{
	"frame": {"x":208,"y":199,"w":227,"h":90},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":227,"h":90},
	"sourceSize": {"w":227,"h":90}
},
"q-9-minus-1.png":
{
	"frame": {"x":2,"y":291,"w":155,"h":90},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":155,"h":90},
	"sourceSize": {"w":155,"h":90}
}},
"meta": {
	"app": "http://www.texturepacker.com",
	"version": "1.0",
	"image": "arithmetic.png",
	"format": "RGBA8888",
	"size": {"w":512,"h":512},
	"scale": "1",
	"smartupdate": "$TexturePacker:SmartUpdate:4a6382510156ad654908d0467418436c$"
}
}
     ;
     window['game_start'] = start;
     window['tick'] = tick;
 }(window));
