import { useState } from "react";

function ChatBox() {
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello! I can help you understand your document. Ask me anything."
        },
        {
            sender: "user",
            text: "What is the main purpose of this agreement?"
        },
        {
            sender: "ai",
            text: "This agreement defines the terms and conditions between the parties."
        }
    ]);

    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (input.trim() === "") return;

        const userMessage = {
            sender: "user",
            text: input
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        // Simulated AI reply
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);

            const aiMessage = {
                sender: "ai",
                text: "I have analyzed your document. This is a sample AI response."
            };

            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        }, 1000);
    };

    return (
    <section className=" py-24">
       
            <div className="max-w-7xl mx-auto">
                <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        💬 Chat With Document
                    </h2>

                    {/* Chat Area */}
                    <div className="h-[450px] overflow-y-auto space-y-4 mb-6 pr-2">

                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={
                                    message.sender === "user"
                                        ? "bg-blue-600 text-white p-4 rounded-xl max-w-[80%] ml-auto"
                                        : "bg-gray-100 text-gray-700 p-4 rounded-xl max-w-[80%]"
                                }
                            >
                                <p>{message.text}</p>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="bg-gray-100 text-gray-700 p-4 rounded-xl max-w-[80%]">
                                <p>🤖 AI is thinking...</p>
                            </div>
                        )}

                    </div>

                    {/* Input Area */}
                    <div className="flex flex-col sm:flex-row gap-3">

                        <input
                            type="text"
                            placeholder="Ask something about your document..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleSend}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition duration-300"
                        >
                            Send
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ChatBox;