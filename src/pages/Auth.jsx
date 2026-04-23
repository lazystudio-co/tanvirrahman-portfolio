import React, { useState, useRef, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  const cardRef = useRef(null);
  const ringRef = useRef(null);
  const navigate = useNavigate();

  // Redirect already-logged-in users to admin
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/admin");
      } else {
        setAuthChecking(false);
      }
    });
    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    if (authChecking) return; // Don't animate until auth is resolved
    // Entrance animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
    );
    // Slow spinning ring
    gsap.to(ringRef.current, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, [authChecking]);

  if (authChecking) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      gsap.fromTo(
        cardRef.current,
        { x: -8 },
        { x: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Spinning gradient ring */}
      <div
        ref={ringRef}
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, transparent 60%, rgba(255,255,255,0.12) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        ref={cardRef}
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "52px 48px",
          width: "100%",
          maxWidth: "440px",
          position: "relative",
          zIndex: 10,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 32px 64px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo / Title */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <p
            className="font-satoshi"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "12px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Admin Portal
          </p>
          <h1
            className="font-anton"
            style={{
              color: "#ffffff",
              fontSize: "42px",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            Welcome Back
          </h1>
          <p
            className="font-satoshi"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            Sign in to manage your portfolio
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Email field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              className="font-satoshi"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="font-satoshi"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "14px 18px",
                color: "#ffffff",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.2s",
                width: "100%",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.35)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          {/* Password field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              className="font-satoshi"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="font-satoshi"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "14px 48px 14px 18px",
                  color: "#ffffff",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.35)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              {/* Show/hide toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.35)",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? (
                  // Eye-off icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <p
              className="font-satoshi"
              style={{
                color: "#ff4d4d",
                fontSize: "13px",
                textAlign: "center",
                background: "rgba(255,77,77,0.08)",
                border: "1px solid rgba(255,77,77,0.2)",
                borderRadius: "8px",
                padding: "10px 14px",
              }}
            >
              {error}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="font-satoshi"
            style={{
              marginTop: "8px",
              background: loading
                ? "rgba(255,255,255,0.1)"
                : "#ffffff",
              color: loading ? "rgba(255,255,255,0.4)" : "#000000",
              border: "none",
              borderRadius: "12px",
              padding: "15px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.5px",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.target.style.background = "rgba(255,255,255,0.88)";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.target.style.background = "#ffffff";
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p
          className="font-satoshi"
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: "12px",
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          Tanvir Rahman © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Auth;
