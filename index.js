import Assistant from "./ai-assistant.js";
import Prompt from "./prompt.js";

export default Assistant;

const assistant = new Assistant("apiKey");
const newPrompt = new Prompt("I really want to go out to the cinemas sometime", ["funnier"], ["be a better surfer"]);
const resp = await assistant.getResponse(newPrompt);

console.log(resp);