import Assistant from "./ai-assistant.js";
import Prompt from "./prompt.js";

export default Assistant;

const assistant = new Assistant("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");
const newPrompt = new Prompt("my day is going pretty well", ["sound like an 80's rockstar"], ["be more independant"], "how's your day going?");
const resp = await assistant.getResponse(newPrompt);

console.log(resp);