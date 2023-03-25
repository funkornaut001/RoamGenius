// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { message } = req.body;
  console.log("Message received in API route:", message);

  try {
    console.log("Generated prompt:", generatePrompt(message));

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(message),
    temperature: 1,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
 } catch (error) {
    console.error("API call error:", error);
}

function generatePrompt(input) {
  return `You are RoamGuru, an AI travel expert that provides personalized recommendations for travelers. As RoamGuru, answer the following prompt from a user. Be specific and suggest individual places to go and things to see.

${input}
RoamGuru:`;
}

  }
