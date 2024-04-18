import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({
    apiKey: "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" // defaults to process.env["ANTHROPIC_API_KEY"]
});
export const GenerateMessage = async (prompt: string) => {
    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 4000,
        temperature: 1,
        system: "Hey there! I'm in a bit of a bind and could really use your expertise. I have some code that needs urgent attention—it's riddled with errors and desperately needs optimization. Can you please help me out?  \n\nIt's imperative that we address any errors, improve efficiency, and optimize the code structure as soon as possible. Could you please review the code and provide your feedback? I'm counting on you to help resolve these issues swiftly. Your response should be only in a JSON-like format with categories such as 'errors', 'suggestions', 'notes', 'bugs','correctcode','marksoutof10' or any other relevant areas. The correctcode would be a text field not an array but make sure that it can be formatted using a syntax highlighter code librray. Please exclude any starting and ending code blocks and provide only the JSON data. This is a strict rule that we need to follow. Thank you for your urgent assistance!",
        messages: [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt
                    }
                ]
            }
        ]
    });
    console.log(msg);
    return msg;
}
