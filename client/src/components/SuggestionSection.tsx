import React from 'react'

function SuggestionSection({ suggestions }) {
    return (
        <div className='mt-10 max-w-2xl'>
            {suggestions && suggestions.length > 0 && (
                <div className='bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Suggestions!</strong>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>✔{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SuggestionSection