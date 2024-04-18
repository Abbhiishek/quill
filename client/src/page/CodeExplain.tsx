import { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/navbar';

function CodeExplain() {


    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState("hey! I am here to help you with your code 🔮");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        try {
            setResponse("Extracting Cool Insights from the code. Hang Tight ⌛")
            e.preventDefault();
            setLoading(true);
            const prompts = `
            Your task is to take the code snippet provided and explain it in simple, easy-to-understand language. Break down the code's functionality, purpose, and key components. Use analogies, examples, and plain terms to make the explanation accessible to someone with minimal coding knowledge. Avoid using technical jargon unless absolutely necessary, and provide clear explanations for any jargon used. The goal is to help the reader understand what the code does and how it works at a high level.

            Your response should be in a format that we can set your response in pre tag in html and it should format everything. try to html tags for formatting with tailwind css classnames. You can highlight important keywords with colors and add symbols to make it preety.Also wrap the long sentence to new line.
            ${prompt}
            `;
            await axios
                .post('https://quill-server.vercel.app/send-prompt', { prompt: prompts })
                .then((response) => {
                    setResponse(response.data.response);
                    setLoading(false);
                });
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    return (
        <>
            <div className='bg-purple-600/10'>
                <div className='dark:bg-dot-thick-neutral-800 min-h-screen flex flex-col justify-center items-center'>
                    <form className='flex flex-col text-center  items-center pt-10'>
                        <span
                            className='text-white mb-4 text-lg italic bg-violet-500 px-8 py-2 rounded-lg translate-x-14'>
                            Provide the code snippet for quill to Explain:
                        </span>
                        <textarea
                            value={prompt}
                            rows={20}
                            onChange={(e) => setPrompt(e.target.value)}
                            className='bg-slate-900/95 text-white italic p-2 rounded-md resize-none w-[700px] shadow-2xl shadow-violet-500'
                        ></textarea>
                        <button
                            onClick={handleSubmit}
                            className='bg-violet-500 mt-10 rounded-lg text-white font-semibold pt-3 pb-3 pr-8 pl-8'>
                            {loading ? 'Please Wait...' : 'Ask Quill to Explain'}
                        </button>
                    </form>
                    <div className='container mx-auto bg-slate-900 shadow-xl overflow-scroll my-10 px-6 py-3 rounded-2xl text-xl text-wrap'>
                        <pre
                            dangerouslySetInnerHTML={{ __html: response }}
                            className='text-white   rounded-xl p-4 text-wrap' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeExplain