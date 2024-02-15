import { NextResponse } from "next/server";
import openai from "../../../../openai-config";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I want you to perform your best at my any question. So you will response to my any question so quickly and i can ask you anything. My question is ${req.recipe}`,
        },
      ],
    });
    return NextResponse.json({
      gpt: response.choices[0].message.content,
      status: "success",
    });
  } catch (error: any) {
    return NextResponse.json({ status: "failure", error: error });
  }
}
