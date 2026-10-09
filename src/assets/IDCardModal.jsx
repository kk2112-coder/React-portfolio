import React, { useEffect } from "react";
import { FaTimes, FaIdCard, FaCheck, FaCopy } from "react-icons/fa";
import OfficeIdCard from "./OfficeIdCard";

export default function IDCardModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyBadgeId = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("KK-2112");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Office ID Badge"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 shadow-[0_25px_60px_0_rgba(0,0,0,0.65)] flex flex-col items-center text-center"
      >
        {/* Top Modal Header */}
        <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              🪪
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-white leading-tight">
                Official Engineer ID Badge
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Clearance: Level 4 • Active
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBadgeId}
              className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-[11px] text-cyan-300 flex items-center gap-1 cursor-pointer transition-all"
              title="Copy Badge ID"
            >
              {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              <span>{copied ? "Copied" : "KK-2112"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] text-base cursor-pointer transition-all"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* 3D Office ID Card Component Container */}
        <div className="w-full flex justify-center py-2">
          <OfficeIdCard />
        </div>

        {/* Footer Hint */}
        <div className="w-full pt-3 mt-1 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-mono text-cyan-400">Dr. A.P.J. AKTU Scholar</span>
          <span>Press ESC or click outside to close</span>
        </div>

      </div>
    </div>
  );
}
