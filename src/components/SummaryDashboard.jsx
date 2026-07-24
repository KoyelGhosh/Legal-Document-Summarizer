import DownloadButton from "./DownloadButton";

function SummaryDashboard() {

    const summary = `
Agreement Duration: 12 months

Payment Terms:
Payment must be made within 30 days.

Confidentiality:
Information must not be shared with third parties.

Termination:
Either party may terminate the agreement with 30 days' notice.
`;

    return (
        <section className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">

                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        🤖 AI Legal Analysis
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        AI Summary Dashboard
                    </h1>

                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                        Instantly review AI-generated summaries, key insights, statistics,
                        and important legal clauses from your uploaded document.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                    {/* Summary Card */}
                    <div className="bg-white-50 border border-gray-200 border-t-4 border-blue-500 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                            📝 AI Summary
                        </h3>

                        <p className="text-gray-700 whitespace-pre-line leading-7 text-sm sm:text-base flex-grow">
                            {summary}
                        </p>

                        <div className="mt-6 pt-6 flex justify-center">
                            <DownloadButton summary={summary} />
                        </div>
                    </div>

                    {/* Statistics Card */}
                    <div className="bg-white-50 border border-gray-200 border-t-4 border-blue-500 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                            📊 Statistics
                        </h3>

                        <p><strong>Pages:</strong> 12</p>
                        <p><strong>Words:</strong> 2450</p>
                        <p><strong>Risk Level:</strong> Medium</p>
                    </div>

                    {/* Key Points Card */}
                    <div className="bg-white-50 border border-gray-200 border-t-4 border-blue-500 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                            📌 Key Points
                        </h3>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Agreement duration is 12 months.</li>
                            <li>Notice period is 30 days.</li>
                            <li>Confidentiality clause is included.</li>
                        </ul>
                    </div>

                    {/* Important Clauses Card */}
                    <div className="bg-gray-50 border border-gray-200 border-t-4 border-blue-500 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                            ⚠️ Important Clauses
                        </h3>

                        <ul className="space-y-2">
                            <li>🟢 Payment Terms</li>
                            <li>🟡 Confidentiality</li>
                            <li>🔴 Termination</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SummaryDashboard;