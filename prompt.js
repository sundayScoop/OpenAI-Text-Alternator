import send from "./client.js";

export default class Prompt{
    /**
     * Create the prompt to send to chatpt for a single user's single request.
     * @param {string} userMsg 
     * @param {string[]} senderIntendedPersona 
     * @param {string} previousMsg 
     * @param {string} mode
     */
    constructor(userMsg, senderIntendedPersona, mode, previousMsg=null){
        this.userMsg = userMsg
        this.senderIntendedPersona = senderIntendedPersona
        this.mode = mode
        this.previousMsg = previousMsg
    }

    toString(){
        return `Alter this text message: 
${this.userMsg} \nso that it is more ${this.senderIntendedPersona.join(", ")} 
${this.previousMsg == null ? "" : `when replying to this message "${this.previousMsg}"`}.`
    }

    /**
     * 
     * @param {string} apiKey 
     */
    async getResponse(apiKey){
        let resp;
        try{
            resp = await send(this.toString(), apiKey);
        }catch{
            try{
                resp = await send(this.toString() + " but cooler", apiKey);
            }catch{
                throw Error("Something went wrong")
            }
        }
        return resp;
    }
}