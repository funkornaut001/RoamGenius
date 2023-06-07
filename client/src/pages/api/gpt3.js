// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();


export default async function (req, res) {
  const { message, location } = req.body;
  console.log("Message received in API route:", message);
  console.log("Location received in API route:", location);

  try {
    console.log("Generated prompt:", generatePrompt(message, location));

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(message, location),
      temperature: 1,
      max_tokens: 2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.error("API call error:", error);
    res
      .status(500)
      .json({ message: "Error generating response", error: error.message });
  }

  function generatePrompt(input, location) {
    return `You are RoamGuru, an AI travel expert that provides personalized recommendations for travelers. As RoamGuru, answer the following prompt from a user located in ${location}. Be specific and suggest individual places to go and things to see.

${input}
RoamGuru:`;
  }
}
