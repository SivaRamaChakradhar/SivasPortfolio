"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode, type FormEvent } from "react";

type IdentityGateProps = {
  children: ReactNode;
};

type View = "gate" | "loading";

const LOADING_MS = 2200;
const STORAGE_KEY = "portfolio-view";
const VISITOR_NAME_KEY = "visitor-name";
const VISITOR_ROLE_KEY = "visitor-role";

function SiteHeader() {
  return (
    <header className="site-header">
      <Image
        src="/gate_logo.png"
        alt="Siva Rama Chakradhar logo"
        width={48}
        height={48}
        className="gate-logo"
        priority
      />

      <div className="site-text">
        <div className="site-name">Siva Rama Chakradhar</div>
        <div className="site-role">Developer</div>
      </div>
    </header>
  );
}

const IdentityGate = ({ children }: IdentityGateProps) => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [view, setView] = useState<View>("gate");
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "hero") {
      setIsUnlocked(true);
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (view !== "loading") return;

    const timer = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "hero");
      setIsUnlocked(true);
    }, LOADING_MS);

    return () => window.clearTimeout(timer);
  }, [view]);

  const startLoading = () => {
    setView("loading");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Please enter your name to continue");
      return;
    }

    setError("");

    localStorage.setItem(VISITOR_NAME_KEY, trimmedName);
    localStorage.setItem(VISITOR_ROLE_KEY, role.trim());

    try {
      const response = await fetch("/api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          role: role.trim() || "Visitor",
        }),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Failed to save your information. Please try again."
        );
        return;
      }

      startLoading();
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again.");
    }
  };

  if (!isHydrated) {
    return (
      <section className="relative z-10 min-h-screen" aria-hidden="true" />
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  if (view === "loading") {
    const displayName = name.trim() || "there";

    return (
      <section className="identity-gate identity-gate-overlay relative z-10">
        <SiteHeader />

        <div
          className="glow-card loading-card"
          aria-live="polite"
          aria-busy="true"
        >
          <span className="specialElement">
            <p className="greeting">welcome</p>

            <Image
              src="/welcome_logo.png"
              alt=""
              width={32}
              height={32}
              className="welcome-logo"
              aria-hidden="true"
            />
          </span>

          <h1 className="heading">Hello {displayName}.</h1>

          <p className="des">
            Glad you are here. Taking you to the portfolio experience in a
            moment.
          </p>

          <div className="loading-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="identity-gate identity-gate-overlay relative z-10">
      <SiteHeader />

      <div className="glow-card">
        <span className="specialElement">
          <p className="greeting">welcome</p>

          <Image
            src="/welcome_logo.png"
            alt=""
            width={32}
            height={32}
            className="welcome-logo"
            aria-hidden="true"
          />
        </span>

        <h1 className="heading">
          Nice to <span className="heading-style">meet</span> you!
        </h1>

        <p className="des">
          Before you explore my portfolio, I&apos;d love to know{" "}
          <span className="heading-style">who&apos;s visiting.</span>
        </p>

        <form className="gate-form" onSubmit={handleSubmit} noValidate>
          <label className="label" htmlFor="name">
            What should I call you?
          </label>

          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            className="input"
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "gate-error" : undefined}
            required
          />

          <label className="label" htmlFor="role">
            Who are you? <span className="label-optional">(optional)</span>
          </label>

          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="input"
            id="role"
            type="text"
            name="role"
            placeholder="e.g. Developer, Recruiter, Student"
          />

          <button
            type="submit"
            className="submit-btn"
            aria-label="Submit visitor information and open portfolio"
          >
            <span>Let&apos;s Get Started</span>
          </button>

          {error ? (
            <div id="gate-error" className="error-message" role="alert">
              {error}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default IdentityGate;