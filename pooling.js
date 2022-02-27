;(function(root){
  'use strict'
  const sleep = s => new Promise(r => setTimeout(r, s));
  const pooling = async (caller,limit) =>{
    limit = limit || 60*1000 //def one min
    var count =~~(limit/60) + 1
    for(var i=0;i<count;i++){
      if(caller()) return true;
      await sleep(60)
    }  
    console.error('timeout pooling')
    return false; 
  }
  root.sleep = sleep;
  root.pooling =pooling;
}(window||this));

/* test code
var a;
setTimeout(()=>{ a='aiuewo'},3*1000)

;(async ()=>{  
  await pooling(()=>a)
  document.body.textContent = a;  
})();
*/
