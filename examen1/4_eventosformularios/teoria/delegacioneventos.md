Para esto ocupas la delegación de eventos, donde dentro de la función identificas cual fue el objetivo del click, ya sea por id o por clase o por etiqueta según sea tu necesidad

document.addEventListener('click',function(e){
if(event.target.tagName.toLowerCase() === 'div'){
//TODO
}
});

var i = 1;
document.getElementById('creator').addEventListener('click',function(){
var div = document.createElement('div');
var text = document.createTextNode('New Div ' + i);
div.appendChild(text);
document.body.appendChild(div);
i++;
});
document.addEventListener('click',function(e){
// Fixed
if(e.target.tagName.toLowerCase() === 'div'){
console.log(e.target);
}
})
