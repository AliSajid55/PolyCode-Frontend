// src/features/learn/shared/CourseCertificate.jsx

import { useRef, useState } from "react";
import { useAuth } from "../../auth/context/AuthContext";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function CourseCertificate({
  courseName,
  totalLessons,
  completedCount,
  earnedXP,
}) {
  const { user } = useAuth();
  const certificateRef = useRef();
  const [shareUrl, setShareUrl] = useState(null); // 👈 add here

  const isComplete = completedCount >= totalLessons;

  if (!isComplete) return null;

  const username =
    user?.name || user?.username || user?.email?.split("@")[0] || "Learner";

  const issueDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const certificateId = `PC-${courseName
    .replace(/\s+/g, "-")
    .toUpperCase()}-${Date.now().toString().slice(-6)}`;

  const downloadPDF = async () => {
    const canvas = await html2canvas(certificateRef.current, {
      scale: 4,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight(),
    );

    // 👇 ADD FROM HERE
    const blob = pdf.output("blob");
    const formData = new FormData();
    formData.append("certificate", blob, `${certificateId}.pdf`);

    const res = await fetch("http://localhost:5000/api/certificates/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await res.json();
    setShareUrl(url);
    // 👆 TO HERE

    pdf.save(`${courseName}-certificate.pdf`);
  };

  return (
    <div className="certificate-wrapper">
      <div className="certificate" ref={certificateRef}>
        <div className="certificate-watermark">
          <img src="/images/polycode-logo.png" alt="" />
        </div>

        <div className="certificate-header">
          <img
            src="/images/polycode-logo.png"
            alt="PolyCode"
            className="certificate-logo1"
          />

          <img
            src="/images/logo.png"
            alt="QuantumLogics"
            className="certificate-logo2"
          />
        </div>

        <div className="certificate-company">
          PolyCode powered by QuantumLogics
        </div>

        <h1 className="certificate-title">CERTIFICATE OF COMPLETION</h1>
        <div className="cert-divider">✦ ✦ ✦</div>

        <p className="certificate-awarded">
          This certificate is proudly awarded to
        </p>

        <h2 className="certificate-name">{username}</h2>

        <p className="certificate-text">For successfully completing</p>

        <h3 className="certificate-course">{courseName}</h3>

        <div className="certificate-stats">
          <div>
            <strong>{completedCount}</strong>
            <span>Lessons Completed</span>
          </div>

          <div>
            <strong>{earnedXP}</strong>
            <span>XP Earned</span>
          </div>
        </div>

        <div className="certificate-info">
          <div>
            <strong>Issued On</strong>
            <p>{issueDate}</p>
          </div>
        </div>

        <div className="certificate-footer">
          <div className="signature-block">
            <img
              src="/images/aminasign.png"
              alt="Signature"
              className="signature-image"
            />
            <div className="signature-line"></div>
            <p className="signature-name">Amina</p>
            <p className="signature-role">Course Instructor</p>{" "}
          </div>
          <img
            src="/images/stamp.png"
            alt="Official Stamp"
            className="official-stamp"
          />{" "}
        </div>
      </div>
      <button className="download-btn" onClick={downloadPDF}>
        Download PDF Certificate
      </button>
      {shareUrl && (
        <a href={shareUrl} target="_blank" rel="noopener noreferrer">
          Share Certificate
        </a>
      )}{" "}
      {/* 👈 add here */}
    </div>
  );
}
