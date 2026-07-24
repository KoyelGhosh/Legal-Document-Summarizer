import { useState } from "react";
import {
    FiUploadCloud,
    FiFile,
    FiImage,
    FiFileText,
    FiX,
} from "react-icons/fi";

function UploadBox() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const getFileIcon = () => {
        if (!selectedFile) return null;

        if (selectedFile.type.startsWith("image/")) {
            return <FiImage className="text-4xl text-green-500" />;
        }

        if (selectedFile.type === "application/pdf") {
            return <FiFileText className="text-4xl text-red-500" />;
        }

        return <FiFile className="text-4xl text-blue-500" />;
    };
    const removeFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };
    const handleUpload = () => {
        setIsUploading(true);
        setUploadProgress(0);

        let progress = 0;

        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setIsUploading(false);
                alert("Document uploaded successfully!");
            }
        }, 200);
    };
    return (
        <section className="flex justify-center py-16">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10">

                <div
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition ${isDragging
                        ? "border-green-500 bg-green-50"
                        : "border-blue-400 hover:border-blue-600"
                        }`}

                    onDragEnter={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}

                    onDragOver={(e) => {
                        e.preventDefault();
                    }}

                    onDragLeave={() => {
                        setIsDragging(false);
                    }}

                    onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);

                        const file = e.dataTransfer.files[0];

                        if (file) {
                            setSelectedFile(file);

                            if (file.type.startsWith("image/")) {
                                const url = URL.createObjectURL(file);
                                setPreviewUrl(url);
                            }
                        }
                    }}
                >

                    <FiUploadCloud className="text-6xl text-blue-500 mx-auto mb-5" />

                    <h2 className="text-2xl font-bold text-gray-800">
                        Upload Your Document
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Drag & Drop your PDF, DOCX or Image here
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                        Supported formats: PDF, DOCX, JPG, PNG
                    </p>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                        id="fileUpload"
                        onChange={(e) => {
                            const file = e.target.files[0];

                            setSelectedFile(file);

                            if (file && file.type.startsWith("image/")) {
                                const url = URL.createObjectURL(file);
                                setPreviewUrl(url);
                            }
                        }}
                    />
                    <label
                        htmlFor="fileUpload"
                        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700 transition"
                    >
                        Choose File
                    </label>

                    {selectedFile && (
                        <div className="mt-6 p-4 border rounded-xl">

                            <h3 className="font-semibold">
                                Selected File
                            </h3>

                            <div className="flex justify-center my-4">
                                {getFileIcon()}
                            </div>
                            <p>
                                Name: {selectedFile.name}
                            </p>

                            <p>
                                Size: {(selectedFile.size / 1024).toFixed(2)} KB
                            </p>


                            {previewUrl && selectedFile.type.startsWith("image/") && (
                                <img
                                    src={previewUrl}
                                    alt="preview"
                                    className="mt-4 max-h-80 mx-auto rounded-lg"
                                />
                            )}

                            {selectedFile && selectedFile.type === "application/pdf" && (
                                <iframe
                                    src={URL.createObjectURL(selectedFile)}
                                    className="mt-4 w-full h-96 rounded-lg"
                                    title="PDF Preview"
                                ></iframe>
                            )}
                            <div className="flex justify-center gap-8 mt-6">
                                <button
                                    onClick={removeFile}
                                    className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                                >
                                    <FiX />
                                    Remove File
                                </button>
                                <button
                                    onClick={handleUpload}
                                    disabled={isUploading}
                                    className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
                                >
                                    {isUploading ? "Uploading..." : "Upload to AI"}
                                </button>
                            </div>
                            {isUploading && (
                                <div className="mt-6">
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-green-500 h-3 rounded-full transition-all duration-200"
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>

                                    <p className="text-center text-sm text-gray-600 mt-2">
                                        Uploading... {uploadProgress}%
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

export default UploadBox;