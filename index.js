
import { Telegraf } from "telegraf";
import OpenAI from "openai";

const bot = new Telegraf(process.env.8940206318:AAH5qV7NBwYiRjDylgdPSKeenastGUH4tu4);

const openai = new OpenAI({
  apiKey: process.env.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
});

bot.start((ctx) => {
  ctx.reply("🤖 Hello! I am MonyAI. Ask me anything!");
});

bot.on("text", async (ctx) => {
  try {
    await ctx.sendChatAction("typing");

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: ctx.message.text
    });

    await ctx.reply(response.output_text || "Please try again.");
  } catch (error) {
    console.error(error);
    await ctx.reply("Sorry, AI is temporarily unavailable.");
  }
});

bot.launch();
console.log("MonyAI is running!");
