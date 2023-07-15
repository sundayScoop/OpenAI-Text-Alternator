import send from "./client.js";

export default class Prompt{
    /**
     * Create the prompt to send to chatpt for a single user's single request.
     * @param {string} userMsg 
     * @param {string[]} senderIntendedPersona 
     * @param {string[]} recieverIntendedPersona
     * @param {string} previousMsg 
     * @param {string} mode
     */
    constructor(userMsg, senderIntendedPersona, recieverIntendedPersona, mode, previousMsg=null){
        this.userMsg = userMsg
        this.senderIntendedPersona = senderIntendedPersona
        this.recieverIntendedPersona = recieverIntendedPersona
        this.previousMsg = previousMsg
        this.mode = mode
    }

    toString(){
        if(mode == "casual"){
            return `
            There is mike who wants these intended personas- ${this.senderIntendedPersona.join(", ")}, 
            there is also john who has these intended personas- ${this.recieverIntendedPersona.join(", ")}, 
            alter this message sent by mike to john ${this.userMsg} 
            ${this.previousMsg == null ? "" : `so that mike replies to john's message of ${this.previousMsg}`} 
            that it alligns with mike's intended personas 
            and it also appeals to john with their personas.
            BE VERY SUBTLE WITH THE ALTERATIONS!
            ONLY RESPOND WITH THE MESSGE ITSELF, NOTHING ELSE!
            NEVER REFERENCE EACH PERSON BY NAME!
            `
        }
        else{
            throw Error("Unsupported Mode")
        }
    }

    /**
     * 
     * @param {string} apiKey 
     */
    async getResponse(apiKey){
        return await send(this.toString(), apiKey);
    }
}