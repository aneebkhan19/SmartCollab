import OpenAI from 'openai';
import { Request, Response } from 'express';

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// The system prompt with information about the website/company
const systemPrompt = `
You are an AI assistant for Aivora Labs, an AI software development company. 
Your primary role is to help website visitors understand our services and capabilities.

About Aivora Labs:
- We are a cutting-edge AI software development company specializing in custom AI solutions
- Our core services include Machine Learning implementations, Neural Networks, Data Analytics, and AI Automation
- We focus on creating tailored AI solutions for businesses across various industries
- We pride ourselves on our modern, innovative approach to AI technology

Important guidelines:
1. Only answer questions related to Aivora Labs, our services, AI technologies we work with, or general AI concepts
2. If asked about topics outside your knowledge of Aivora Labs, politely explain that you only have information about Aivora Labs and its services
3. Never claim to know specific information about Aivora Labs that isn't provided in this prompt
4. Be concise, helpful, and maintain a professional tone
5. If unsure about specific details, acknowledge the limitations in your knowledge rather than making up information

For any technical questions, focus on explaining our AI capabilities in accessible terms without excessive technical jargon.
`;

export async function handleChatRequest(req: Request, res: Response) {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Filter out any potential harmful inputs
    if (containsHarmfulContent(message)) {
      return res.status(400).json({ 
        error: 'Message contains inappropriate content',
        answer: 'I cannot respond to that type of request. Please ask something related to Aivora Labs or our AI services.'
      });
    }

    // Format chat history for OpenAI
    const formattedMessages = [
      { role: 'system', content: systemPrompt },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500
    });

    const answer = completion.choices[0].message.content || 'Sorry, I couldn\'t generate a response';

    res.json({ answer });
  } catch (error) {
    console.error('Error in chat API:', error);
    res.status(500).json({ 
      error: 'An error occurred while processing your request',
      answer: 'Sorry, I encountered an error. Please try again later.'
    });
  }
}

// Simple function to check for harmful content
function containsHarmfulContent(text: string): boolean {
  const lowercaseText = text.toLowerCase();
  const prohibitedTerms = [
    'hack', 'illegal', 'bomb', 'kill', 'murder', 'suicide', 'terror',
    'porn', 'xxx', 'naked', 'nude'
  ];
  
  return prohibitedTerms.some(term => lowercaseText.includes(term));
}