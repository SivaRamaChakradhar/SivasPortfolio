"use client";

import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visitorName =
  typeof window !== "undefined"
    ? localStorage.getItem("visitor-name")
    : "";

  const visitorRole = typeof window !== "undefined"
    ? localStorage.getItem("visitor-role")
    : "";

  const handleSubmit = async () => {
    if (!rating) {
      setError("Please select a star rating before submitting.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: visitorName || "Anonymous",
          role: localStorage.getItem("visitor-role") || "Visitor",
          rating,
          message: feedback.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Unable to submit feedback. Please try again.");
        return;
      }

      setSubmitted(true);
      setFeedback("");
      setRating(0);
      setHoverRating(0);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Feedback"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl justify-center text-center">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-300">
            Feedback Hub
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            How was your experience {visitorName}?
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-300 md:text-base">
            Your feedback helps me improve this portfolio and build better user
            experiences.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = star <= (hoverRating || rating);

              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    setSubmitted(false);
                    setError("");
                  }}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition duration-300 hover:scale-125"
                  aria-label={`Rate ${star} star`}
                >
                  <CiStar
                    size={44}
                    className={
                      active
                        ? "fill-yellow-300 text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                        : "text-white/80 hover:text-yellow-200"
                    }
                  />
                </button>
              );
            })}
          </div>

          {rating > 0 && (
            <p className="mt-4 text-sm text-yellow-200">
              You selected {rating} out of 5 stars
            </p>
          )}

          <textarea
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
              setSubmitted(false);
            }}
            placeholder="Write your feedback..."
            className="mt-8 min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>

          {error && <p className="mt-5 text-sm text-red-300">{error}</p>}

          {submitted && (
            <p className="mt-5 text-sm text-green-300">
              Thank you for your feedback!
            </p>
          )}

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-4 text-sm text-gray-400">
              Want to connect directly?
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sivaramisetti700@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
              >
                <FaEnvelope /> Email
              </a>

              <a
                href="https://github.com/SivaRamaChakradhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sivaramachakradhar-ramisetti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;