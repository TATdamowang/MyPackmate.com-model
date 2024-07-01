import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 从环境变量中读取 API 密钥
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const formidable = require('formidable');
const fs = require('fs');

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing files' });
      return;
    }

    const imageUrls = [];

    for (const fileKey in files) {
      const file = files[fileKey];
      const data = fs.readFileSync(file.filepath);
      const base64Image = Buffer.from(data).toString('base64');
      imageUrls.push(`data:${file.mimetype};base64,${base64Image}`);
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What’s in this image?" },
            ...imageUrls.map(image => ({
              type: "image_url",
              image_url: { url: image },
            })),
          ],
        },
      ],
    });

    res.status(200).json(response.choices[0].message.content);
  });
}
