import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const Dashboard = () => {


/* REMARKS MODAL */

const [showRemarksModal, setShowRemarksModal] =
  useState(false);

const [selectedRemark, setSelectedRemark] =
  useState("");

/* USER REMARK */

const [userRemarkData] = useState({
  hasRemark: true,
  remark:
    "Your bank statement copy is slightly blurred. Please upload a clearer image for faster approval.",
});
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  /* DOCUMENT STEP */

  const [currentStep, setCurrentStep] =
    useState(1);

const [residentialType, setResidentialType] =
  useState("");

  const [employmentType, setEmploymentType] =
    useState("");

  const [documentsSubmitted, setDocumentsSubmitted] =
    useState(false);

  /* VEHICLE DOCS */

  const [vehicleDocs, setVehicleDocs] =
    useState({
      rc: null,
      insurance: null,
    });

  /* USER DATA */

  const [userData, setUserData] =
    useState({
      name: "Rahul Sharma",
      applicationId: "CRY20260021",
      loanAmount: "₹8,50,000",
      bank: "Yet To Assign",
      car: "Mahindra Scorpio N",
      status: "Documents Pending",
      documentsUploaded: 6,
      totalDocuments: 8,
    });

  /* STATUS STEPS */

  const steps = [
    "Documents Submitted",
    "Documents Verified",
    "Sent To Bank",
    "Bank Review",
    "Loan Approved",
    "Amount Disbursed",
  ];

  const currentStatusStep =
    steps.indexOf(userData.status);

  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("role");

    navigate("/");
  };

  return (

    <div className="flex min-h-screen bg-[#F4F6F9]">

      {/* SIDEBAR */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        handleLogout={handleLogout}
      />

      {/* MAIN */}

      <div className="flex-1 overflow-y-auto">

        {/* TOPBAR */}

        <div className="bg-white px-8 py-6 shadow-sm flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-[#0B2A4A]">
              {activeMenu}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Welcome back 👋
            </p>

          </div>

          <div className="bg-[#EAFBF8] px-5 py-3 rounded-2xl border border-[#27D3C3]/20">

            <p className="text-xs text-gray-500">
              Application ID
            </p>

            <h3 className="text-lg font-bold text-[#0B2A4A] mt-1">
              {userData.applicationId}
            </h3>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-8">

          {/* DASHBOARD */}

          {activeMenu === "Dashboard" && (

            <div className="space-y-6">

              {/* HEADER */}

              <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center justify-between flex-wrap gap-4">

                <div>

                  <h1 className="text-2xl font-bold text-[#0B2A4A]">
                    Welcome Back 👋
                  </h1>

                  <p className="text-sm text-gray-500 mt-1">
                    Track your loan application progress
                  </p>

                </div>

                <div className="bg-[#EAFBF8] px-5 py-3 rounded-2xl border border-[#27D3C3]/20">

                  <p className="text-xs text-gray-500">
                    Current Status
                  </p>

                  <h3 className="text-sm font-bold text-[#27D3C3] mt-1">
                    {userData.status}
                  </h3>

                </div>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                {/* CARD */}

                <div className="bg-white rounded-2xl p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Loan Amount
                      </p>

                      <h2 className="text-2xl font-bold text-[#0B2A4A] mt-2">
                        ₹8.5L
                      </h2>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#EAFBF8]
                    flex items-center justify-center text-xl">

                      💰

                    </div>

                  </div>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Documents Uploaded
                      </p>

                      <h2 className="text-2xl font-bold text-[#0B2A4A] mt-2">
                        {userData.documentsUploaded} / {userData.totalDocuments}
                      </h2>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF]
                    flex items-center justify-center text-xl">

                      📄

                    </div>

                  </div>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Assigned Bank
                      </p>

                      <h2 className="text-sm text-[#0B2A4A] mt-2">
                        {userData.bank}
                      </h2>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5]
                    flex items-center justify-center text-xl">

                      🏦

                    </div>

                  </div>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Vehicle
                      </p>

                      <h2 className="text-sm font-bold text-[#0B2A4A] mt-2">
                        Scorpio N
                      </h2>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#EAFBF8]
                    flex items-center justify-center text-xl">

                      🚗

                    </div>

                  </div>

                </div>

              </div>

              {/* DOCUMENT ALERT */}

              {!documentsSubmitted && (

                <div className="bg-gradient-to-r from-[#0B2A4A] to-[#123E68]
                rounded-3xl p-6 text-white shadow-sm">

                  <div className="flex items-center justify-between flex-wrap gap-5">

                    <div>

                      <h2 className="text-xl font-bold">
                        Upload Pending Documents
                      </h2>

                      <p className="text-gray-300 mt-2 text-sm">
                        Complete your KYC and vehicle verification process.
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        setActiveMenu("Documents")
                      }
                      className="bg-[#27D3C3] hover:bg-[#1fb5a7]
                      text-[#0B2A4A] px-5 py-3 rounded-2xl
                      text-sm font-bold transition"
                    >

                      Upload Documents

                    </button>

                  </div>

                </div>

              )}

            </div>

          )}

          {/* DOCUMENTS */}

          {activeMenu === "Documents" && (

            <div className="max-w-5xl mx-auto">

              {/* HEADER */}

              <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">

                <h1 className="text-2xl font-bold text-[#0B2A4A]">
                  Upload Documents
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Complete your KYC and verification process
                </p>

                {/* STEPS */}

                <div className="flex items-center gap-3 mt-6 overflow-x-auto">

                  {[
                    "KYC",
                    "Residential",
                    "Income",
                    "Vehicle",
                    "Verify",
                  ].map((step, index) => (

                    <div
                      key={index}
                      className={`px-5 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap

                      ${
                        currentStep === index + 1
                          ? "bg-[#27D3C3] text-[#0B2A4A]"
                          : "bg-[#F4F6F9] text-gray-500"
                      }`}
                    >
                      {index + 1}. {step}
                    </div>

                  ))}

                </div>

              </div>

              {/* FORM */}

              <div className="bg-white rounded-3xl p-6 shadow-sm">

                {/* STEP 1 */}

                {currentStep === 1 && (

  <div>

    <h2 className="text-xl font-bold text-[#0B2A4A]">
      KYC Documents
    </h2>

    <p className="text-sm text-gray-500 mt-2 mb-6">
      Upload identity verification documents
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {[
        "PAN Card",
        "Aadhar Card",
        "Photograph",
      ].map((doc, index) => (

        <div
          key={index}
          className="border border-gray-200 rounded-2xl p-5 bg-[#F8FAFC]"
        >

          <div className="flex items-center justify-between">

            <h3 className="font-semibold text-[#0B2A4A]">
              {doc}
            </h3>

            <span className="text-red-500 text-xs font-bold">
              REQUIRED
            </span>

          </div>

          <p className="text-xs text-gray-500 mt-2">
            Accepted: JPG, PNG, PDF, DOC
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Max Size: 5MB
          </p>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            className="mt-4 text-sm w-full
            file:mr-4 file:px-4 file:py-2
            file:rounded-xl file:border-0
            file:bg-[#0B2A4A]
            file:text-white
            file:text-xs file:font-semibold"
          />

        </div>

      ))}

    </div>

  </div>

)}

                {/* STEP 2 */}

                {currentStep === 2 && (

  <div>

    <h2 className="text-xl font-bold text-[#0B2A4A]">
      Residential Proof
    </h2>

    <p className="text-sm text-gray-500 mt-2 mb-6">
      Upload any one address verification document
    </p>

    {/* SELECT PROOF TYPE */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

      {[
        "Light Bill",
        "Rental Agreement",
      ].map((doc, index) => (

        <button
          key={index}
          type="button"
          onClick={() =>
            setResidentialType(doc)
          }
          className={`rounded-3xl border p-6 text-left transition-all duration-200

          ${
            residentialType === doc
              ? "border-[#27D3C3] bg-[#EAFBF8] shadow-sm"
              : "border-gray-200 bg-white hover:border-[#27D3C3]/40"
          }`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-bold text-[#0B2A4A]">
                {doc}
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Use this document for address verification
              </p>

            </div>

            {residentialType === doc && (

              <div className="w-7 h-7 rounded-full bg-[#27D3C3]
              flex items-center justify-center text-xs font-bold text-[#0B2A4A]">

                ✓

              </div>

            )}

          </div>

        </button>

      ))}

    </div>

    {/* FILE UPLOAD */}

    {residentialType && (

      <div className="border border-gray-200 rounded-3xl p-6 bg-[#F8FAFC]">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-bold text-[#0B2A4A]">
              Upload {residentialType}
            </h3>

            <p className="text-xs text-gray-500 mt-2">
              Accepted: JPG, PNG, PDF, DOC
            </p>

          </div>

          <span className="text-red-500 text-xs font-bold">
            REQUIRED
          </span>

        </div>

        <p className="text-xs text-gray-400 mt-1">
          Max Size: 5MB
        </p>

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          className="mt-5 text-sm w-full
          file:mr-4 file:px-4 file:py-2
          file:rounded-xl file:border-0
          file:bg-[#0B2A4A]
          file:text-white
          file:text-xs file:font-semibold
          hover:file:bg-[#081f36]"
        />

      </div>

    )}

  </div>

)}

                {/* STEP 3 */}

                {currentStep === 3 && (

  <div>

    <h2 className="text-xl font-bold text-[#0B2A4A]">
      Income Proof
    </h2>

    <p className="text-sm text-gray-500 mt-2 mb-6">
      Select employment type and upload required documents
    </p>

    {/* EMPLOYMENT TYPE */}

   <div className="mb-6">

  <label className="text-sm font-semibold text-[#0B2A4A] block mb-3">
    Employment Type
  </label>

  <div className="relative">

    <select
      value={employmentType}
      onChange={(e) =>
        setEmploymentType(e.target.value)
      }
      className="w-full appearance-none
      bg-[#F8FAFC]
      border border-gray-200
      hover:border-[#27D3C3]/40
      focus:border-[#27D3C3]
      focus:ring-4 focus:ring-[#27D3C3]/10
      rounded-2xl
      px-5 py-4 pr-14
      text-sm font-medium text-[#0B2A4A]
      outline-none transition-all duration-200"
    >

      <option value="">
        Select Employment Type
      </option>

      <option value="Salaried">
        Salaried
      </option>

      <option value="Self Employed">
        Self Employed
      </option>

    </select>

    {/* CUSTOM DROPDOWN ICON */}

    <div
      className="absolute right-5 top-1/2
      -translate-y-1/2
      pointer-events-none
      text-[#0B2A4A]"
    >

      ▼

    </div>

  </div>

  <p className="text-xs text-gray-400 mt-2">
    Select your current employment category
  </p>

</div>

    {/* DOCUMENTS */}

    {(employmentType === "Salaried" ||
      employmentType === "Government Employee") && (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

        {[
          "Salary Slip",
          "Bank Statement",
        ].map((doc, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 bg-[#F8FAFC]"
          >

            <h3 className="font-semibold text-[#0B2A4A]">
              {doc}
            </h3>

            <p className="text-xs text-gray-500 mt-2">
              Accepted: JPG, PNG, PDF, DOC
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Max Size: 5MB
            </p>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              className="mt-4 text-sm w-full
              file:mr-4 file:px-4 file:py-2
              file:rounded-xl file:border-0
              file:bg-[#0B2A4A]
              file:text-white
              file:text-xs file:font-semibold"
            />

          </div>

        ))}

      </div>

    )}

    {employmentType === "Self Employed" && (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

        {[
          "ITR Return",
          "Bank Statement",
        ].map((doc, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 bg-[#F8FAFC]"
          >

            <h3 className="font-semibold text-[#0B2A4A]">
              {doc}
            </h3>

            <p className="text-xs text-gray-500 mt-2">
              Accepted: JPG, PNG, PDF, DOC
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Max Size: 5MB
            </p>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              className="mt-4 text-sm w-full
              file:mr-4 file:px-4 file:py-2
              file:rounded-xl file:border-0
              file:bg-[#0B2A4A]
              file:text-white
              file:text-xs file:font-semibold"
            />

          </div>

        ))}

      </div>

    )}

  </div>

)}

                {/* STEP 4 */}

                {currentStep === 4 && (

                  <div>

                    <h2 className="text-xl font-bold text-[#0B2A4A] mb-1">
                      Vehicle Documents
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                      {/* RC */}

                      <div className="border border-red-200 rounded-2xl p-5 bg-[#FFF7F7]">

                        <div className="flex items-center justify-between">

                          <h3 className="font-semibold text-[#0B2A4A]">
                            RC Picture
                          </h3>

                          <span className="text-red-500 text-xs font-bold">
                            REQUIRED
                          </span>

                        </div>

                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          onChange={(e) =>
                            setVehicleDocs({
                              ...vehicleDocs,
                              rc: e.target.files[0],
                            })
                          }
                          className="mt-4 text-sm w-full"
                        />

                      </div>

                      {/* INSURANCE */}

                      <div className="border border-red-200 rounded-2xl p-5 bg-[#FFF7F7]">

                        <div className="flex items-center justify-between">

                          <h3 className="font-semibold text-[#0B2A4A]">
                            Insurance Copy
                          </h3>

                          <span className="text-red-500 text-xs font-bold">
                            REQUIRED
                          </span>

                        </div>

                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          onChange={(e) =>
                            setVehicleDocs({
                              ...vehicleDocs,
                              insurance: e.target.files[0],
                            })
                          }
                          className="mt-4 text-sm w-full"
                        />

                      </div>

                    </div>

                  </div>

                )}

                {/* STEP 5 */}

                {currentStep === 5 && (

                  <div className="text-center">

                    <div className="w-24 h-24 mx-auto rounded-full bg-[#EAFBF8]
                    flex items-center justify-center text-5xl">

                      ✅

                    </div>

                    <h2 className="text-2xl font-bold text-[#0B2A4A] mt-6">
                      Verify Documents
                    </h2>

                    <p className="text-gray-500 mt-3">
                      Please verify all uploaded documents before final submission.
                    </p>

                  </div>

                )}

                {/* BUTTONS */}

                <div className="flex items-center justify-between mt-10">

                  {/* PREVIOUS */}

                  <button
                    disabled={currentStep === 1}
                    onClick={() =>
                      setCurrentStep((prev) => prev - 1)
                    }
                    className={`px-6 py-3 rounded-2xl text-sm font-semibold

                    ${
                      currentStep === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#F4F6F9] hover:bg-gray-200 text-[#0B2A4A]"
                    }`}
                  >
                    ← Previous
                  </button>

                  {/* NEXT */}

                  {currentStep !== 5 ? (

                    <button
                      onClick={() => {

                        if (
                          currentStep === 3 &&
                          !employmentType
                        ) {

                          alert(
                            "Please select employment type."
                          );

                          return;
                        }

                        if (currentStep === 4) {

                          if (
                            !vehicleDocs.rc ||
                            !vehicleDocs.insurance
                          ) {

                            alert(
                              "RC Picture and Insurance Copy are required."
                            );

                            return;
                          }
                        }

                        setCurrentStep((prev) => prev + 1);
                      }}
                      className="bg-[#0B2A4A] hover:bg-[#081f36]
                      text-white px-6 py-3 rounded-2xl
                      text-sm font-semibold"
                    >
                      Next →
                    </button>

                  ) : (

                    <button
                      onClick={() => {

                        setDocumentsSubmitted(true);

                        setUserData({
                          ...userData,
                          status:
                            "Documents Submitted",
                          documentsUploaded: 8,
                        });

                        setCurrentStep(1);

                        setActiveMenu("Status");

                        alert(
                          "Documents submitted successfully for verification."
                        );
                      }}
                      className="bg-[#27D3C3] hover:bg-[#1fb5a7]
                      text-[#0B2A4A] px-8 py-3 rounded-2xl
                      text-sm font-bold"
                    >
                      Submit Documents
                    </button>

                  )}

                </div>

              </div>

            </div>

          )}

          {/* STATUS */}

{activeMenu === "Status" && (

  <div className="max-w-5xl mx-auto">

    {/* STATUS PROGRESS */}

    <div className="bg-white rounded-[32px] p-7 shadow-sm border border-gray-100">

      {/* HEADER */}

      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

  <div>

    <h2 className="text-2xl font-bold text-[#0B2A4A]">
      Loan Journey
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Your application is moving smoothly through verification
    </p>

  </div>

  {/* RIGHT SIDE */}

  <div className="flex items-center gap-3">

    {/* STATUS PILL */}

    <div
      className="bg-gradient-to-r from-[#EAFBF8] to-[#F4FFFD]
      border border-[#27D3C3]/20
      px-5 py-3 rounded-2xl"
    >

      <p className="text-[11px] uppercase tracking-wider text-gray-500">
        Current Stage
      </p>

      <h3 className="text-sm font-bold text-[#0B2A4A] mt-1">
        {userData.status}
      </h3>

    </div>

    {/* REMARK BUTTON */}

    <button
      onClick={() => {
        setSelectedRemark(
          userRemarkData.remark ||
            "No remarks added by admin."
        );

        setShowRemarksModal(true);
      }}
      className="relative w-11 h-11 rounded-full
      bg-[#F4F6F9]
      hover:bg-[#EAFBF8]
      border border-gray-200
      flex items-center justify-center
      transition-all duration-200"
    >

      💬

      {/* RED DOT */}

      {userRemarkData.hasRemark && (
        <span
          className="absolute top-1 right-1
          w-3 h-3 rounded-full
          bg-red-500 border-2 border-white
          animate-pulse"
        ></span>
      )}

    </button>

  </div>

</div>

      {/* TIMELINE */}

      <div className="relative">

        {/* MAIN LINE */}

        <div
          className="absolute left-5 top-2 bottom-2
          w-[3px] bg-gray-200 rounded-full"
        ></div>

        {/* ACTIVE LINE */}

        <div
          className="absolute left-5 top-2
          w-[3px] bg-[#27D3C3] rounded-full transition-all duration-500"
          style={{
            height: `${currentStatusStep * 112}px`,
          }}
        ></div>

        <div className="space-y-6">

          {steps.map((step, index) => {

            const completed =
              index < currentStatusStep;

            const active =
              index === currentStatusStep;

            return (

              <div
                key={index}
                className="relative flex items-start gap-5"
              >

                {/* STEP ICON */}

                <div
                  className={`relative z-10 min-w-[42px] h-[42px]
                  rounded-full flex items-center justify-center
                  text-sm font-bold transition-all duration-300

                  ${
                    completed
                      ? "bg-[#27D3C3] text-[#0B2A4A]"
                      : active
                      ? "bg-[#0B2A4A] text-white ring-4 ring-[#27D3C3]/20"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >

                  {completed ? "✓" : index + 1}

                </div>

                {/* CARD */}

                <div
                  className={`flex-1 rounded-3xl border p-5 transition-all duration-300

                  ${
                    active
                      ? "bg-[#0B2A4A] border-[#0B2A4A] shadow-lg"
                      : completed
                      ? "bg-[#F2FFFC] border-[#27D3C3]/20"
                      : "bg-[#FAFAFA] border-gray-200"
                  }`}
                >

                  <div className="flex items-start justify-between gap-4 flex-wrap">

                    {/* LEFT */}

                    <div>

                      <div className="flex items-center gap-3">

                        <h3
                          className={`text-base font-bold

                          ${
                            active
                              ? "text-white"
                              : completed
                              ? "text-[#0B2A4A]"
                              : "text-gray-500"
                          }`}
                        >

                          {step}

                        </h3>

                        <div
                          className={`w-2.5 h-2.5 rounded-full

                          ${
                            completed
                              ? "bg-[#27D3C3]"
                              : active
                              ? "bg-[#27D3C3] animate-pulse"
                              : "bg-gray-300"
                          }`}
                        ></div>

                      </div>

                      <p
                        className={`text-sm mt-2 leading-relaxed

                        ${
                          active
                            ? "text-gray-300"
                            : completed
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >

                        {active
                          ? "Your application is currently being processed at this stage."
                          : completed
                          ? "This stage has been completed successfully."
                          : "This stage will begin automatically once previous verification is completed."}

                      </p>

                    </div>

                    {/* STATUS BADGE */}

                    <div>

                      {active ? (

                        <span
                          className="bg-[#27D3C3]
                          text-[#0B2A4A]
                          text-[11px] font-bold
                          px-4 py-2 rounded-full
                          tracking-wide"
                        >
                          IN PROGRESS
                        </span>

                      ) : completed ? (

                        <span
                          className="bg-[#27D3C3]/15
                          text-[#0B2A4A]
                          text-[11px] font-bold
                          px-4 py-2 rounded-full
                          tracking-wide"
                        >
                          COMPLETED
                        </span>

                      ) : (

                        <span
                          className="bg-gray-200
                          text-gray-500
                          text-[11px] font-semibold
                          px-4 py-2 rounded-full
                          tracking-wide"
                        >
                          UPCOMING
                        </span>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>

  </div>

)}
{/* REMARKS MODAL */}

{showRemarksModal && (

  <div
    className="fixed inset-0 z-50
    bg-black/40 backdrop-blur-sm
    flex items-center justify-center p-4"
  >

    <div
      className="bg-white w-full max-w-md
      rounded-3xl p-6 shadow-2xl
      animate-in fade-in zoom-in duration-200"
    >

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-xl font-bold text-[#0B2A4A]">
            Admin Remarks
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Read only updates from admin
          </p>

        </div>

        <button
          onClick={() =>
            setShowRemarksModal(false)
          }
          className="w-9 h-9 rounded-full
          bg-[#F4F6F9]
          hover:bg-gray-200
          flex items-center justify-center"
        >
          ✕
        </button>

      </div>

      {/* REMARK BOX */}

      <div
        className="min-h-[170px]
        bg-[#F8FAFC]
        border border-gray-200
        rounded-2xl p-5"
      >

        <p className="text-sm leading-7 text-gray-700 whitespace-pre-line">
          {selectedRemark}
        </p>

      </div>

    </div>

  </div>

)}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;