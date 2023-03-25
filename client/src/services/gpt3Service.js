import axios from "axios";

export async function generateResponse(input) {
  console.log("Message received in gpt3Service:", input);


  try {
    const response = await axios.post("/api/gpt3", { message: input });
    console.log("Response:", response.data.result);

    return response.data.result;
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm sorry, but I can't help you with that right now.";
  }
}
