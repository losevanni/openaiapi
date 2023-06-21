import { gpt_3_5, text_davinci_003 } from "./openaiapi.js";

// var a= await text_davinci_003("한국의 수도는?");
var a=await gpt_3_5("한국의 수도는?");
console.log(a);