import { Configuration, OpenAIApi } from "openai";


export default async function handler(req, res) {
    const config = new Configuration({
        apikey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);

    // const axios = require('axios');
    const {topic, keywords} = req.body;

    const postContentResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: "You are a blog post generator"
        },
        {
          role: "user",
          content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}.
            The content should be formatted in SEA-friendly HTML,
            limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, li, ol, ul, i.`,
        },
      ],
    },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
    });


    // console.log('response: ', postContentResponse.data.choices[0]?.message.content);
    // console.log('response: ', postContentResponse.data.choices[0]?.message.content);
    return res.status(200).json({postContent: postContentResponse.data.choices[0]?.message.content});
  }