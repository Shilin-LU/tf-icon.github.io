function changeImage(){let t=hats[cur_hat].textContent.toLowerCase().trim();"..."===t&&(t="default");let a=animals[cur_animal].textContent.toLowerCase().trim();animals[cur_animal].getElementsByTagName("img")[0]&&(a=animals[cur_animal].getElementsByTagName("img")[0].alt.toLowerCase().trim()),image.src="tficon/"+a+"_"+t+".png"}function clearStyle(t){t.style.color="#8e8e8e",t.style.backgroundColor=null}function setStyle(t){t.style.color="#000000",t.style.backgroundColor="#f88000"}function modifyAnimal(t){function a(){cur_animal!==t&&(clearStyle(animals[cur_animal]),setStyle(animals[cur_animal=t]),changeImage())}return a}function modifyHat(t){function a(){cur_hat!==t&&(clearStyle(hats[cur_hat]),setStyle(hats[cur_hat=t]),changeImage())}return a}function set_alpha(t,a){let e=1-(t.value-16)/52,n=Math.round(248+7*e),l=Math.round(128+127*e),i=Math.round(255*e);a.style.backgroundColor="rgb("+n+","+l+","+i+")"}function init(){image=document.getElementById("cat-hat-img"),animals=document.getElementsByClassName("cat-hat-button_a"),hats=document.getElementsByClassName("cat-hat-button_b"),setStyle(animals[cur_animal]),setStyle(hats[cur_hat]);for(let t=0;t<animals.length;++t)animals[t].addEventListener("click",modifyAnimal(t));for(let t=0;t<hats.length;++t)hats[t].addEventListener("click",modifyHat(t));let t=document.getElementById("range_bunny"),a=document.getElementById("bunny-img"),e=document.getElementById("fluffy");set_alpha(t,e),t.oninput=function(){a.src="./ptp_files/bunny_seq/fluffy_bunny_"+String(t.value).padStart(2,"0")+".png",set_alpha(t,e)}}var animals,hats,image,cur_animal=0,cur_hat=0;document.addEventListener("DOMContentLoaded",()=>{init()});