import{i as c}from"./vendor-77e16229.js";{let a=function(i){return i.split(" ").map(n=>`${n.charAt(0).toUpperCase()} ${n.slice(1)}`).join(" ")};document.querySelector(".form").addEventListener("submit",function(i){i.preventDefault();const o=document.querySelector('input[name="state"]:checked').value,t=parseInt(document.getElementById("inputDelay").value);new Promise((s,e)=>{switch(o){case"fulfilled":setTimeout(()=>{s(t)},t);break;case"rejected":setTimeout(()=>{e(t)},t);break}}).then(s=>{let e=`${a(o)} promises in ${s}ms`;console.log(e),c.success({message:e,position:"topRight",timeout:2e3})}).catch(s=>{let e=`${a(o)} promises in ${s}ms`;console.log(e),c.warning({message:e,position:"topRight",timeout:2e3})})})}console.log("2-snackbar.js - loaded");
//# sourceMappingURL=2-snackbar-53a085ad.js.map