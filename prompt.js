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
            There is person 1 who wants these intended personas- ${this.senderIntendedPersona.join(", ")}, 
            there is also person 2 who has these intended personas- ${this.recieverIntendedPersona.join(", ")}, 
            alter this message sent by person 1 to person 2 ${this.userMsg} 
            ${this.previousMsg == null ? "" : `so that person 1 replies to person 2's message of ${this.previousMsg}`} 
            that it alligns with person 1's intended personas 
            and it also appeals to person 2 with their personas.
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