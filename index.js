

function getResponse(event){
event.preventDefault();
new Typewriter('#api', {
  strings: "API RESPONSE",
  autoStart: true,
  delay:1,
  cursor:"",
});

}


let apiFormElement=document.querySelector("#api-generator-form");
apiFormElement.addEventListener("submit",getResponse);