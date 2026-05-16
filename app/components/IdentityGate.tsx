"use client";

import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

const IdentityGate = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [view, setView] = useState<"gate" | "loading" | "hero">("gate");
  const [isHeroLocked, setIsHeroLocked] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedView = localStorage.getItem("portfolio-view");
    if (savedView === "hero") {
      setView("hero");
      setIsHeroLocked(true);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (view !== "loading") {
      return;
    }

    const timer = window.setTimeout(() => {
      setView("hero");
      localStorage.setItem("portfolio-view", "hero");
      setIsHeroLocked(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [view]);

  useEffect(() => {
    if (isHeroLocked) {
      const handlePopState = () => {
        setView("hero");
        window.history.pushState(null, "", window.location.href);
      };

      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isHeroLocked]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Please enter your name to continue");
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError("Failed to save your information. Please try again.");
        return;
      }

      setView("loading");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again.");
    }
  }

  if (!isHydrated) {
    return null;
  }

  if (view === "hero" || isHeroLocked) {
    return <HeroSection />;
  }

  if (view === "loading") {
    return (
      <main className="identity-gate">
        <div className="identity-background" />
        <div className="purple-glow" />
        <div className="blue-glow" />
        <div className="center-glow" />

        <section className="glow-card loading-card" aria-live="polite" aria-busy="true">
          <span className="specialElement">
            <p className="greeting">welcome</p>
            <img
              src="/welcome_logo.png"
              alt="welcome_logo"
              className="welcome-logo"
            />
          </span>

          <h1 className="heading">Hello {name.trim() || "there"}.</h1>
          <p className="des">
            Glad you are here. Taking you to the portfolio experience in a moment.
          </p>

          <div className="loading-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="identity-gate">
        <div className="site-header">
            <img
            src="/gate_logo.png"
            alt="gate_logo"
            className="gate-logo"
            />
            <div className="site-text">
            <div className="site-name">Siva Rama Chakradhar</div>
            <div className="site-role">Developer</div>
            </div>
        </div>

        <div className="identity-background" />

        <div className="purple-glow" />

        <div className="blue-glow" />

        <div className="center-glow" />

        <div className="glow-card">
            <span className="specialElement">
            <p className="greeting">welcome</p>
            <img
                src="/welcome_logo.png"
                alt="welcome_logo"
                className="welcome-logo"
            />
            </span>

            <h1 className="heading">Nice to <span className="heading-style">meet</span> you!</h1>
            <p className="des">Before you explore my portfolio, I'd love to know <span className="heading-style">who's visiting.</span></p>

            <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">What Should I call you?</label>
            <input value={name} onChange={e => {setName(e.target.value); setError("");}} className="input" id="name" type="text" placeholder="Enter your name" />
            <label className="label" htmlFor="role">Who are you?</label>
            <input value={role} onChange={e => {setRole(e.target.value)}} className="input" id="role" type="text" placeholder="Enter your role (e.g., Developer, Student)" />

                <button type="submit" className="submit-btn" aria-label="Submit visitor information and open portfolio">
                    <span>Let's Get Started</span>
                </button>

                {error && <div className="error-message">{error}</div>}

                <div className="skip-container">
                    <div className="skip-text">
                        <hr className="hr-line" />
                        <p>or</p>
                        <hr className="hr-line" />
                    </div>
                    <button onClick={() => setView("loading")} type="button" className="skip-button">Skip for now</button>
                </div>
            </form>
        </div>
    </main>
  );
};

export default IdentityGate;