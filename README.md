# pooling
- https://pinkromeo18.github.io/pooling/pooling.js
```
https://pinkromeo18.github.io/pooling/pooling.js
```
```
<script src="https://pinkromeo18.github.io/pooling/pooling.js"></script>
```
```
await sleep(msec)
await pooling(caller)
```
```js
// test code
var a;
setTimeout(()=>{ a='aiuewo'},3*1000)

;(async ()=>{  
  await pooling(()=>a)
  document.body.textContent = a;  
})();

```
