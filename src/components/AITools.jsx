
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { recognize } from "tesseract.js";
import {
  Sparkles,
  ScanText,
  Languages,
  Upload,
  Copy,
  RotateCcw,
  LoaderCircle,
  ArrowRightLeft,
  Image as ImageIcon,
  Check,
} from "lucide-react";

const languages = [
  { label: "English", value: "en", ocr: "eng" },
  { label: "Sinhala", value: "si", ocr: "sin" },
  { label: "Tamil", value: "ta", ocr: "tam" },
  { label: "French", value: "fr", ocr: "fra" },
  { label: "Spanish", value: "es", ocr: "spa" },
  { label: "German", value: "de", ocr: "deu" },
  { label: "Hindi", value: "hi", ocr: "hin" },
  { label: "Japanese", value: "ja", ocr: "jpn" },
];

export default function AITools() {
  const fileInput = useRef(null);

  // Image text extractor
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [ocrLanguage, setOcrLanguage] = useState("eng");
  const [extractedText, setExtractedText] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [ocrStatus, setOcrStatus] = useState("");

  // Translator
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("si");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translating, setTranslating] = useState(false);
  const [translateStatus, setTranslateStatus] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      setOcrStatus("Please select a valid image.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setOcrStatus("Please select an image smaller than 10 MB.");
      return;
    }

    if (image) URL.revokeObjectURL(image);

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    setExtractedText("");
    setOcrStatus("Image uploaded successfully.");
  };

  const extractText = async () => {
    if (!file) {
      setOcrStatus("Please upload an image first.");
      return;
    }

    setExtracting(true);
    setOcrStatus("Reading image text...");

    try {
      const result = await recognize(file, ocrLanguage, {
        logger: (message) => {
          if (message.status === "recognizing text") {
            setOcrStatus(
              `Recognizing text... ${Math.round(
                (message.progress || 0) * 100
              )}%`
            );
          }
        },
      });

      const resultText = result.data.text.trim();
      setExtractedText(resultText);
      setOcrStatus(
        resultText
          ? "Text extraction completed!"
          : "No text found. Try a clearer image."
      );
    } catch (error) {
      console.error(error);
      setOcrStatus(
        "Text extraction failed. Check your connection and try again."
      );
    } finally {
      setExtracting(false);
    }
  };

  const copyText = async (value, setStatus) => {
    if (!value.trim()) return;

    try {
      await navigator.clipboard.writeText(value);
      setStatus("Copied to clipboard!");
    } catch {
      setStatus("Copy failed. Please copy the text manually.");
    }
  };

  const sendExtractedToTranslator = () => {
    setSourceText(extractedText);

    const selected = languages.find(
      (item) => item.ocr === ocrLanguage
    );

    if (selected) setSourceLanguage(selected.value);

    setTranslateStatus("Extracted text added to the translator.");

    document.getElementById("language-translator")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const translateText = async () => {
    if (!sourceText.trim()) {
      setTranslateStatus("Please enter some text to translate.");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setTranslatedText(sourceText);
      setTranslateStatus("Both languages are the same.");
      return;
    }

    setTranslating(true);
    setTranslateStatus("Translating text...");
    setTranslatedText("");

    try {
      // Free MyMemory translation API.
      // Requests are limited and text is sent to a third-party service.
      const chunks = sourceText.match(/[\s\S]{1,450}/g) || [];
      const results = [];

      for (const chunk of chunks) {
        const params = new URLSearchParams({
          q: chunk,
          langpair: `${sourceLanguage}|${targetLanguage}`,
        });

        const response = await fetch(
          `https://api.mymemory.translated.net/get?${params.toString()}`
        );

        if (!response.ok) {
          throw new Error("Translation service unavailable.");
        }

        const data = await response.json();

        if (
          data.responseStatus &&
          Number(data.responseStatus) !== 200
        ) {
          throw new Error(
            data.responseDetails || "Translation failed."
          );
        }

        results.push(data.responseData?.translatedText || "");
      }

      setTranslatedText(results.join(""));
      setTranslateStatus("Translation completed!");
    } catch (error) {
      console.error(error);
      setTranslateStatus(
        error.message || "Translation failed. Please try again."
      );
    } finally {
      setTranslating(false);
    }
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText || sourceText);
    setTranslatedText("");
    setTranslateStatus("");
  };

  const resetExtractor = () => {
    if (image) URL.revokeObjectURL(image);

    setImage("");
    setFile(null);
    setExtractedText("");
    setOcrStatus("");

    if (fileInput.current) fileInput.current.value = "";
  };

  const cardClass =
    "rounded-3xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:p-7";

  const fieldClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white";

  const buttonClass =
    "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <section
      id="ai-tools"
      className="relative overflow-hidden px-[6%] py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400">
            <Sparkles size={16} />
            AI-Powered Tools
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Explore My{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Extract text from images and translate content
            into different languages with these handy tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* TOOL 1: IMAGE TEXT EXTRACTOR */}
          <motion.div
            id="image-text-extractor"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cardClass}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-500/10 p-3.5 text-violet-500">
                <ScanText size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Image Text Extractor
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Image to editable text
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                handleFile(event.dataTransfer.files?.[0]);
              }}
              className="flex min-h-48 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-5 transition hover:border-violet-500 dark:border-white/15 dark:bg-white/[0.02]"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded image preview"
                  className="max-h-56 max-w-full rounded-xl object-contain"
                />
              ) : (
                <>
                  <div className="mb-3 rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                    <Upload size={25} />
                  </div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Upload or drop an image
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    PNG, JPG or WebP · Maximum 10 MB
                  </p>
                </>
              )}
            </button>

            <input
              ref={fileInput}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) =>
                handleFile(event.target.files?.[0])
              }
            />

            <label className="mb-2 mt-5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Text language in image
            </label>

            <select
              value={ocrLanguage}
              onChange={(event) => setOcrLanguage(event.target.value)}
              className={fieldClass}
            >
              <option value="eng">English</option>
              <option value="sin">Sinhala</option>
              <option value="tam">Tamil</option>
            </select>

            <button
              type="button"
              onClick={extractText}
              disabled={!file || extracting}
              className={`${buttonClass} mt-4`}
            >
              {extracting ? (
                <LoaderCircle className="animate-spin" size={18} />
              ) : (
                <ScanText size={18} />
              )}
              {extracting ? "Extracting..." : "Extract Text"}
            </button>

            {ocrStatus && (
              <p aria-live="polite" className="mt-3 text-sm text-violet-500">
                {ocrStatus}
              </p>
            )}

            <label className="mb-2 mt-6 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Extracted text
            </label>

            <textarea
              value={extractedText}
              onChange={(event) => setExtractedText(event.target.value)}
              placeholder="Your extracted text will appear here..."
              rows={5}
              className={`${fieldClass} resize-y leading-7`}
            />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  copyText(extractedText, setOcrStatus)
                }
                disabled={!extractedText}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
              >
                <Copy size={16} />
                Copy Text
              </button>

              <button
                type="button"
                onClick={sendExtractedToTranslator}
                disabled={!extractedText}
                className="flex items-center justify-center gap-2 rounded-xl border border-violet-500/30 px-3 py-3 text-sm font-medium text-violet-600 hover:bg-violet-500/10 disabled:opacity-40 dark:text-violet-400"
              >
                <Languages size={16} />
                Translate
              </button>
            </div>

            <button
              type="button"
              onClick={resetExtractor}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm text-gray-500 transition hover:text-violet-500"
            >
              <RotateCcw size={15} />
              Reset extractor
            </button>
          </motion.div>

          {/* TOOL 2: LANGUAGE TRANSLATOR */}
          <motion.div
            id="language-translator"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={cardClass}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-blue-500/10 p-3.5 text-blue-500">
                <Languages size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Language Translator
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Translate text between languages
                </p>
              </div>
            </div>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              From
            </label>

            <div className="flex gap-2">
              <select
                value={sourceLanguage}
                onChange={(event) =>
                  setSourceLanguage(event.target.value)
                }
                className={`${fieldClass} min-w-0 flex-1`}
              >
                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={swapLanguages}
                title="Swap languages"
                className="flex shrink-0 items-center justify-center rounded-xl border border-gray-200 px-3 text-gray-600 hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
              >
                <ArrowRightLeft size={18} />
              </button>

              <select
                value={targetLanguage}
                onChange={(event) =>
                  setTargetLanguage(event.target.value)
                }
                className={`${fieldClass} min-w-0 flex-1`}
                aria-label="Translate to"
              >
                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="mb-2 mt-5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your text
            </label>

            <textarea
              value={sourceText}
              onChange={(event) => setSourceText(event.target.value)}
              placeholder="Type or paste the text you want to translate..."
              rows={7}
              maxLength={10000}
              className={`${fieldClass} resize-y leading-7`}
            />

            <div className="mt-2 text-right text-xs text-gray-500">
              {sourceText.length} / 10000 characters
            </div>

            <button
              type="button"
              onClick={translateText}
              disabled={!sourceText.trim() || translating}
              className={`${buttonClass} mt-4`}
            >
              {translating ? (
                <LoaderCircle className="animate-spin" size={18} />
              ) : (
                <Languages size={18} />
              )}
              {translating ? "Translating..." : "Translate Text"}
            </button>

            {translateStatus && (
              <p aria-live="polite" className="mt-3 text-sm text-violet-500">
                {translateStatus}
              </p>
            )}

            <label className="mb-2 mt-6 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Translation result
            </label>

            <textarea
              value={translatedText}
              onChange={(event) => setTranslatedText(event.target.value)}
              placeholder="Your translated text will appear here..."
              rows={5}
              className={`${fieldClass} resize-y leading-7`}
            />

            <button
              type="button"
              onClick={() =>
                copyText(translatedText, setTranslateStatus)
              }
              disabled={!translatedText}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              <Copy size={16} />
              Copy Translation
            </button>
          </motion.div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs leading-6 text-gray-500 dark:text-gray-400">
          OCR accuracy depends on image quality and language.
          Translation is provided by a third-party service and may
          have usage limits. Avoid submitting confidential text.
        </p>
      </div>
    </section>
  );
}
