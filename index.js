function showResponse(response){
new Typewriter('#api', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",



  
});
    
}



function generateResponse(event){
event.preventDefault();

let userInput=document.querySelector("#user-instructions");
let apiKey= "5t2d0f5d9d5f13f50593407dab36oc25";
let prompt=`User Instructions :Please generate a api about ${userInput.value}`;
//let context="You are a Api expert and you only generate the best api's,Your role is to generate the best api and give the response exactly how it would be from an api documentation and with a html <a></a> link for the api to be clicked . please make sure to follow user instructions and keep the response short and simple to understand";


/*let context = `
You are an API expert.Generate a clean and working public API based on the user's request.
Rules:
- Always provide a direct API URL(must start with https://) 
- Keep the explanation very short (1 sentence max)
- After the link, provide a simple JSON example response
- Format the response clearly like this:

API:
https://example.com/api

Example Response:
{
  "status": "success",
  "data": {
    "example": "value"
  }
}

Do not add unnecessary text. Keep everything clean and developer-friendly.
`;*/

let context = `You are an API expert , please follow my format and return:
- A direct API link (https://...)
- A short description (1 sentence)
- A simple JSON example responseFormat:
API:url,Description:short sentence,Example Response:json
Keep it clean and simple and easy to read .`;

let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating api")
console.log(`prompt : ${prompt}`);
console.log(`context : ${context}`);



axios.get(apiUrl).then(showResponse);

}


let apiFormElement=document.querySelector("#api-generator-form");
apiFormElement.addEventListener("submit",generateResponse);