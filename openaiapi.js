import { aiapi } from './config/apicon.js'

const ai=await aiapi();
// console.log(ai);
// const re=await ai.listModels();
// console.log(re);

// pramater string "질문" ret = 성공 string 실패 -1
export async function text_davinci_003(question){
    const model ="text-davinci-003";
    try {
        const res=await ai.createCompletion({
            model:model,
            prompt:question,
            max_tokens:250,
            temperature:0.2,
        });  
    } catch (error) {
        console.log(error);
        return -1;
    }
    console.log("응답");
    const answer=res.data.choices[0].text;
    // console.log(answer);
    const usage_token=res.data.usage.total_tokens;
    // console.log("usage token",usage_token);
    return answer;
}
// pramater string "질문" ret = 성공 string 실패 -1
export async function gpt_3_5(question){
    const model ="gpt-3.5-turbo";
    var res;
    try {
        res=await ai.createChatCompletion({
            model:model,
            messages:[{role:"user",content:question}],
            // max_tokens:300,
            // temperature:0.2,
        });  
    } catch (error) {
        console.log(error);
        return -1;
    }
    console.log("응답");
    // const answer=res.data.choices[0].message;
    const answer=res.data.choices[0].message.content;
    return answer;
}

//  내가 만든 역활도 추가 하기

