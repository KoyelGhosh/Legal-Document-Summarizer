function Hero() {
  return (
    <section className="bg-gradient-to-d from-indigo-50 via-blue-50 to-indigo-50 py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-blue-600 font-semibold mb-4">
          AI Powered Legal Assistant
        </p>

        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Understand Legal Documents
          <br />
          <span className="text-blue-600">in Seconds</span>
        </h1>

        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
          Upload PDFs, DOCX files or Images and let AI summarize,
          explain difficult legal language, highlight important clauses,
          and answer your questions instantly.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
            Upload Document
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;