function Features() {
  return (

    <section className="bg-gradient-to-r from-indigo-30 via-blue-30 to-indigo-30 py-24">

      <h2 className="text-4xl font-bold text-center">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

        <div className="shadow-lg rounded-xl p-8">
          📄
          <h3 className="text-xl font-semibold mt-4">
            AI Summary
          </h3>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          💬
          <h3 className="text-xl font-semibold mt-4">
            Chat with Document
          </h3>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          ⚖️
          <h3 className="text-xl font-semibold mt-4">
            Highlight Clauses
          </h3>
        </div>

      </div>

    </section>

  );
}

export default Features;