const _0x139037=_0x5c89;(function(_0x57f554,_0xaba147){const _0x2f398c=_0x5c89,_0xc03687=_0x57f554();while(!![]){try{const _0x2a4a0c=parseInt(_0x2f398c(0x205))/0x1+-parseInt(_0x2f398c(0x1f1))/0x2+parseInt(_0x2f398c(0x1d2))/0x3*(parseInt(_0x2f398c(0x1eb))/0x4)+-parseInt(_0x2f398c(0x1fa))/0x5*(parseInt(_0x2f398c(0x1f4))/0x6)+-parseInt(_0x2f398c(0x1d7))/0x7+-parseInt(_0x2f398c(0x1c9))/0x8*(-parseInt(_0x2f398c(0x1d4))/0x9)+-parseInt(_0x2f398c(0x203))/0xa*(-parseInt(_0x2f398c(0x1ec))/0xb);if(_0x2a4a0c===_0xaba147)break;else _0xc03687['push'](_0xc03687['shift']());}catch(_0x113e57){_0xc03687['push'](_0xc03687['shift']());}}}(_0x7e3f,0x6d178),document['addEventListener'](_0x139037(0x1e2),function(){const _0x38ae13=_0x139037,_0x53840b=document[_0x38ae13(0x1ca)](_0x38ae13(0x1d0)),_0x413c4d=document['getElementById'](_0x38ae13(0x1cf));_0x53840b[_0x38ae13(0x200)](_0x38ae13(0x1f9),function(_0x532419){const _0x266186=_0x38ae13;_0x532419[_0x266186(0x1e9)]();const _0x523d71=new FormData(_0x53840b),_0x1812a8=_0x523d71[_0x266186(0x1fc)](_0x266186(0x1ea)),_0x4fffbd=_0x523d71[_0x266186(0x1fc)](_0x266186(0x1d1)),_0x1a714d=_0x523d71[_0x266186(0x1fc)]('message'),_0x2aa7ee='https://discord.com/api/webhooks/1325846128251502693/ZcgEGkimuMTuENcoTPem7lVpxAbq8sCKzO0QmD-zOxWfUCzDY7l7yUhGcanitxYEj0UZ',_0x9542eb={'username':_0x266186(0x1ce),'avatar_url':_0x266186(0x1cc),'embeds':[{'title':_0x266186(0x1dc),'color':0x3498db,'fields':[{'name':_0x266186(0x1dd),'value':_0x1812a8||'N/A','inline':!![]},{'name':_0x266186(0x1db),'value':_0x4fffbd||_0x266186(0x1fd),'inline':!![]},{'name':'Message','value':_0x1a714d||_0x266186(0x1fd),'inline':![]}],'timestamp':new Date()}]};fetch(_0x2aa7ee,{'method':_0x266186(0x1ef),'headers':{'Content-Type':_0x266186(0x1d5)},'body':JSON[_0x266186(0x1e1)](_0x9542eb)})['then'](_0x4ba67b=>{const _0x180c41=_0x266186;_0x4ba67b['ok']?(_0x413c4d[_0x180c41(0x1e6)]=_0x180c41(0x1e4),_0x53840b[_0x180c41(0x1ee)]()):_0x413c4d[_0x180c41(0x1e6)]=_0x180c41(0x1da);})['catch'](_0x5b4632=>{const _0x2bd3bb=_0x266186;console[_0x2bd3bb(0x1fe)](_0x2bd3bb(0x1f7),_0x5b4632),_0x413c4d['innerHTML']='<p\x20class=\x22error-message\x22>An\x20error\x20occurred\x20while\x20sending\x20the\x20message.</p>';});});}));const canvas=document['createElement'](_0x139037(0x204)),ctx=canvas[_0x139037(0x1f5)]('2d');function _0x5c89(_0x20f2f5,_0x3ae6ab){const _0x7e3fbb=_0x7e3f();return _0x5c89=function(_0x5c8923,_0x133a9f){_0x5c8923=_0x5c8923-0x1c9;let _0x3996a6=_0x7e3fbb[_0x5c8923];return _0x3996a6;},_0x5c89(_0x20f2f5,_0x3ae6ab);}canvas[_0x139037(0x1ed)][_0x139037(0x1de)]='fixed',canvas[_0x139037(0x1ed)][_0x139037(0x1e0)]='0',canvas[_0x139037(0x1ed)][_0x139037(0x1d3)]='0',canvas[_0x139037(0x1ed)][_0x139037(0x1fb)]='100%',canvas['style'][_0x139037(0x1d8)]=_0x139037(0x1f6),canvas['style'][_0x139037(0x1f0)]='-1',document[_0x139037(0x1e5)][_0x139037(0x201)](canvas),canvas[_0x139037(0x1fb)]=window[_0x139037(0x1cd)],canvas[_0x139037(0x1d8)]=window[_0x139037(0x1f8)];let stars=[];function createStars(){const _0x5ce5cf=_0x139037;stars=[];for(let _0x205bae=0x0;_0x205bae<0xc8;_0x205bae++){stars[_0x5ce5cf(0x202)]({'x':Math[_0x5ce5cf(0x1e3)]()*canvas[_0x5ce5cf(0x1fb)],'y':Math['random']()*canvas[_0x5ce5cf(0x1d8)],'radius':Math['random']()*0x2,'speed':Math[_0x5ce5cf(0x1e3)]()*0.5+0.2});}}function updateStars(){const _0x13997e=_0x139037;stars[_0x13997e(0x1df)](_0x501432=>{const _0x3e12b3=_0x13997e;_0x501432['y']+=_0x501432[_0x3e12b3(0x1d6)],_0x501432['y']>canvas[_0x3e12b3(0x1d8)]&&(_0x501432['y']=0x0,_0x501432['x']=Math['random']()*canvas[_0x3e12b3(0x1fb)]);});}function drawStars(){const _0x1274cc=_0x139037;ctx['clearRect'](0x0,0x0,canvas[_0x1274cc(0x1fb)],canvas[_0x1274cc(0x1d8)]),ctx[_0x1274cc(0x1d9)]=_0x1274cc(0x1e7),stars[_0x1274cc(0x1df)](_0x2405c9=>{const _0x1c318d=_0x1274cc;ctx[_0x1c318d(0x1ff)](),ctx[_0x1c318d(0x1f2)](_0x2405c9['x'],_0x2405c9['y'],_0x2405c9[_0x1c318d(0x1cb)],0x0,Math['PI']*0x2),ctx[_0x1c318d(0x1e8)]();});}function animate(){updateStars(),drawStars(),requestAnimationFrame(animate);}createStars(),animate(),window[_0x139037(0x200)](_0x139037(0x1f3),()=>{const _0x3d0a3b=_0x139037;canvas[_0x3d0a3b(0x1fb)]=window['innerWidth'],canvas[_0x3d0a3b(0x1d8)]=window[_0x3d0a3b(0x1f8)],createStars();});function _0x7e3f(){const _0x2ee492=['zIndex','1596156rRVOPq','arc','resize','6MhAnXB','getContext','100%','Error:','innerHeight','submit','3522935NSCIzG','width','get','N/A','error','beginPath','addEventListener','appendChild','push','30QMvuMF','canvas','229629uFrJnv','1116392HGUvzO','getElementById','radius','https://i.ibb.co/B2YFCvT/8faeb7f593a8a1c5a90086b8700390bc.jpg','innerWidth','Contact\x20From\x20Website','form-messages','contact-form','email','6iVUelM','left','36fLnowJ','application/json','speed','5397931cwhDzg','height','fillStyle','<p\x20class=\x22error-message\x22>Failed\x20to\x20send\x20your\x20message.\x20Please\x20try\x20again\x20later.</p>','Email','New\x20Contact\x20Form\x20Submission','Name','position','forEach','top','stringify','DOMContentLoaded','random','<p\x20class=\x22success-message\x22>Your\x20message\x20has\x20been\x20sent\x20successfully!</p>','body','innerHTML','white','fill','preventDefault','name','174024zWWdeE','6767937nlGhVQ','style','reset','POST'];_0x7e3f=function(){return _0x2ee492;};return _0x7e3f();}