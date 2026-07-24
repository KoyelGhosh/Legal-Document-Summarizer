function DownloadButton({ summary }) {
  const downloadSummary = () => {
    if (!summary) {
      alert("No summary available to download.");
      return;
    }

    const blob = new Blob([summary], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "AI_Legal_Summary.txt";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadSummary}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
    >
      Download Summary
    </button>
  );
}

export default DownloadButton;