import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const Dashboard = () => {

/* SETTINGS */

const [showPasswordForm, setShowPasswordForm] =
  useState(false);

const [showPhoneModal, setShowPhoneModal] =
  useState(false);

const [showEmailModal, setShowEmailModal] =
  useState(false);

const [phoneOtpStep, setPhoneOtpStep] =
  useState(false);

const [emailOtpStep, setEmailOtpStep] =
  useState(false);

const [profileData, setProfileData] =
  useState({
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul@gmail.com",
  });

const [phoneForm, setPhoneForm] =
  useState({
    currentPhone: "9876543210",
    newPhone: "",
    otp: "",
  });

const [emailForm, setEmailForm] =
  useState({
    currentEmail: "rahul@gmail.com",
    newEmail: "",
    otp: "",
  });


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
                    "Personal information",
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

              {/* BUTTONS */}

<div className="bg-white rounded-3xl p-6 shadow-sm">

  {/* STEP 1 — PERSONAL INFORMATION */}

  {currentStep === 1 && (

    <div>

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        Personal Information
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-8">
        Enter customer personal details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            value={userData?.name || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={userData?.mobile || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                mobile: e.target.value,
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            value={userData?.email || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
            Date Of Birth
          </label>

          <input
            type="date"
            value={userData?.dob || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                dob: e.target.value,
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
          />
        </div>

      </div>

    </div>

  )}

  {/* STEP 2 — KYC */}

  {currentStep === 2 && (

    <div>

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        KYC Documents
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-8">
        Upload PAN Card and Aadhaar Card
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PAN */}

        <div className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]">

          <label className="text-sm font-semibold text-[#0B2A4A] block mb-3">
            PAN Number
          </label>

          <input
            type="text"
            placeholder="ABCDE1234F"
            value={userData?.pan || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                pan: e.target.value.toUpperCase(),
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 px-5"
          />

          <label className="text-sm font-semibold text-[#0B2A4A] block mt-5 mb-2">
            Upload PAN Card
          </label>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setUserData({
                ...userData,
                panFile: e.target.files[0],
              })
            }
            className="w-full text-sm
            file:mr-4 file:px-4 file:py-2
            file:rounded-xl file:border-0
            file:bg-[#0B2A4A]
            file:text-white"
          />

        </div>

        {/* AADHAAR */}

        <div className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]">

          <label className="text-sm font-semibold text-[#0B2A4A] block mb-3">
            Aadhaar Number
          </label>

          <input
            type="text"
            maxLength={12}
            placeholder="Enter Aadhaar Number"
            value={userData?.aadhaar || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                aadhaar: e.target.value.replace(/\D/g, ""),
              })
            }
            className="w-full h-14 rounded-2xl border border-gray-200 px-5"
          />

          <label className="text-sm font-semibold text-[#0B2A4A] block mt-5 mb-2">
            Upload Aadhaar Card
          </label>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setUserData({
                ...userData,
                aadhaarFile: e.target.files[0],
              })
            }
            className="w-full text-sm
            file:mr-4 file:px-4 file:py-2
            file:rounded-xl file:border-0
            file:bg-[#0B2A4A]
            file:text-white"
          />

        </div>

      </div>

    </div>

  )}

  {/* STEP 3 — RESIDENTIAL */}

  {currentStep === 3 && (

    <div>

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        Residential Details
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-8">
        Address information and residential proof
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="City"
          value={userData?.city || ""}
          onChange={(e) =>
            setUserData({
              ...userData,
              city: e.target.value,
            })
          }
          className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
        />

        <input
          type="text"
          placeholder="State"
          value={userData?.state || ""}
          onChange={(e) =>
            setUserData({
              ...userData,
              state: e.target.value,
            })
          }
          className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5"
        />

      </div>

      <textarea
        rows={5}
        placeholder="Complete Address"
        value={userData?.address || ""}
        onChange={(e) =>
          setUserData({
            ...userData,
            address: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 py-4 mt-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* LIGHT BILL */}

        <div className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]">

          <h3 className="font-semibold text-[#0B2A4A]">
            Light Bill
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Upload latest electricity bill
          </p>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setUserData({
                ...userData,
                lightBill: e.target.files[0],
              })
            }
            className="mt-4 w-full text-sm
            file:mr-4 file:px-4 file:py-2
            file:rounded-xl file:border-0
            file:bg-[#0B2A4A]
            file:text-white"
          />

        </div>

        {/* RENT AGREEMENT */}

        <div className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]">

          <h3 className="font-semibold text-[#0B2A4A]">
            Rent Agreement
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Upload rental agreement copy
          </p>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setUserData({
                ...userData,
                rentAgreement: e.target.files[0],
              })
            }
            className="mt-4 w-full text-sm
            file:mr-4 file:px-4 file:py-2
            file:rounded-xl file:border-0
            file:bg-[#0B2A4A]
            file:text-white"
          />

        </div>

      </div>

    </div>

  )}

  {/* STEP 4 — INCOME */}

  {currentStep === 4 && (

    <div>

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        Income Proof
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-8">
        Upload employment and income documents
      </p>

      <select
        value={userData?.employmentType || ""}
        onChange={(e) =>
          setUserData({
            ...userData,
            employmentType: e.target.value,
          })
        }
        className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 mb-8"
      >
        <option value="">Select Employment Type</option>
        <option value="Salaried">Salaried</option>
        <option value="Self Employed">Self Employed</option>
      </select>

      {/* SALARIED */}

      {userData?.employmentType === "Salaried" && (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            "Appointment Letter",
            "3 Months Salary Slips",
            "6 Months Bank Statement",
          ].map((doc, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]"
            >

              <h3 className="font-semibold text-[#0B2A4A]">
                {doc}
              </h3>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="mt-4 w-full text-sm
                file:mr-4 file:px-4 file:py-2
                file:rounded-xl file:border-0
                file:bg-[#0B2A4A]
                file:text-white"
              />

            </div>

          ))}

        </div>

      )}

      {/* SELF EMPLOYED */}

      {userData?.employmentType === "Self Employed" && (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            "ITR Copy",
            "6 Months Bank Statement",
          ].map((doc, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]"
            >

              <h3 className="font-semibold text-[#0B2A4A]">
                {doc}
              </h3>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="mt-4 w-full text-sm
                file:mr-4 file:px-4 file:py-2
                file:rounded-xl file:border-0
                file:bg-[#0B2A4A]
                file:text-white"
              />

            </div>

          ))}

        </div>

      )}

    </div>

  )}

  {/* STEP 5 — VEHICLE */}

  {currentStep === 5 && (

    <div>

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        Vehicle Documents
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-8">
        Upload vehicle related documents
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {[
          "RC Copy",
          "Insurance Copy",
          "Front Car Image",
          "Rear Car Image",
          "Chassis Number Image",
          "Odometer Image (KM Visible)",
        ].map((doc, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-3xl p-5 bg-[#F8FAFC]"
          >

            <h3 className="font-semibold text-[#0B2A4A]">
              {doc}
            </h3>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="mt-4 w-full text-sm
              file:mr-4 file:px-4 file:py-2
              file:rounded-xl file:border-0
              file:bg-[#0B2A4A]
              file:text-white"
            />

          </div>

        ))}

      </div>

    </div>

  )}

  {/* STEP 6 — VERIFY */}

  {currentStep === 6 && (

    <div>

      <div className="text-center mb-8">

        <div className="w-24 h-24 mx-auto rounded-full bg-[#EAFBF8]
        flex items-center justify-center text-5xl">
          ✅
        </div>

        <h2 className="text-2xl font-bold text-[#0B2A4A] mt-6">
          Verify Details
        </h2>

        <p className="text-gray-500 mt-3">
          Please verify all information before final submit
        </p>

      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-6 space-y-4">

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            Name:
          </span>{" "}
          {userData?.name}
        </div>

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            Mobile:
          </span>{" "}
          {userData?.mobile}
        </div>

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            PAN:
          </span>{" "}
          {userData?.pan}
        </div>

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            Aadhaar:
          </span>{" "}
          {userData?.aadhaar}
        </div>

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            Employment:
          </span>{" "}
          {userData?.employmentType}
        </div>

        <div>
          <span className="font-semibold text-[#0B2A4A]">
            Address:
          </span>{" "}
          {userData?.address}
        </div>

      </div>

    </div>

  )}

  {/* BUTTONS */}

  <div className="flex items-center justify-between mt-10">

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

    {currentStep !== 6 ? (

      <button
        onClick={() =>
          setCurrentStep((prev) => prev + 1)
        }
        className="bg-[#0B2A4A] hover:bg-[#081f36]
        text-white px-6 py-3 rounded-2xl
        text-sm font-semibold"
      >
        Next →
      </button>

    ) : (

      <button
        onClick={() => {

          alert("Submitted For Approval Successfully");

          setCurrentStep(1);

        }}
        className="bg-[#27D3C3] hover:bg-[#1fb5a7]
        text-[#0B2A4A] px-8 py-3 rounded-2xl
        text-sm font-bold"
      >
        Final Submit
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

{/* SETTINGS */}

{activeMenu === "Settings" && (

  <div className="max-w-4xl mx-auto space-y-6">

    {/* HEADER */}

    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-[#0B2A4A]">
        User Settings
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Manage profile and security settings
      </p>

    </div>

    {/* PROFILE CARD */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      {/* TOP */}

      <div className="flex items-center gap-5 mb-8">

        <div
          className="w-20 h-20 rounded-full
          bg-[#EAFBF8]
          flex items-center justify-center
          text-3xl"
        >
          👤
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#0B2A4A]">
            {profileData.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {profileData.email}
          </p>

        </div>

      </div>

      {/* FORM */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* NAME */}

        <div>

          <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={profileData.name}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                name: e.target.value,
              })
            }
            className="w-full bg-[#F8FAFC]
            border border-gray-200
            rounded-2xl px-5 py-4
            outline-none"
          />

        </div>

        {/* PHONE */}

        <div>

          <div className="flex items-center justify-between mb-2">

            <label className="text-sm font-semibold text-[#0B2A4A]">
              Phone Number
            </label>

            <button
              onClick={() =>
                setShowPhoneModal(true)
              }
              className="w-8 h-8 rounded-full
              bg-[#EAFBF8]
              flex items-center justify-center"
            >
              ✏️
            </button>

          </div>

          <input
            type="text"
            value={profileData.phone}
            readOnly
            className="w-full bg-[#F8FAFC]
            border border-gray-200
            rounded-2xl px-5 py-4"
          />

        </div>

        {/* EMAIL */}

        <div className="md:col-span-2">

          <div className="flex items-center justify-between mb-2">

            <label className="text-sm font-semibold text-[#0B2A4A]">
              Email Address
            </label>

            <button
              onClick={() =>
                setShowEmailModal(true)
              }
              className="w-8 h-8 rounded-full
              bg-[#EAFBF8]
              flex items-center justify-center"
            >
              ✏️
            </button>

          </div>

          <input
            type="email"
            value={profileData.email}
            readOnly
            className="w-full bg-[#F8FAFC]
            border border-gray-200
            rounded-2xl px-5 py-4"
          />

        </div>

      </div>

      {/* BUTTONS */}

      <div className="flex gap-4 mt-8">

        <button
          className="bg-[#0B2A4A]
          text-white px-6 py-3
          rounded-2xl font-semibold"
        >
          Save Changes
        </button>

        <button
          onClick={() =>
            setShowPasswordForm(
              !showPasswordForm
            )
          }
          className="bg-[#EAFBF8]
          text-[#0B2A4A]
          px-6 py-3 rounded-2xl
          font-semibold"
        >
          Update Password
        </button>

      </div>

      {/* PASSWORD FORM */}

      {showPasswordForm && (

        <div className="mt-8 border-t pt-8">

          <h3 className="text-lg font-bold text-[#0B2A4A] mb-5">
            Change Password
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <input
              type="password"
              placeholder="Current Password"
              className="bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4"
            />

            <input
              type="password"
              placeholder="New Password"
              className="bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4"
            />

          </div>

          <button
            className="mt-5 bg-[#27D3C3]
            text-[#0B2A4A]
            px-6 py-3 rounded-2xl
            font-bold"
          >
            Save Password
          </button>

        </div>

      )}

    </div>

  </div>

)}
{/* PHONE MODAL */}

{showPhoneModal && (

  <div
    className="fixed inset-0 bg-black/40
    flex items-center justify-center z-50"
  >

    <div className="bg-white rounded-3xl p-8 w-full max-w-md">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0B2A4A]">
            Update Phone Number
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Verify using OTP
          </p>

        </div>

        <button
          onClick={() => {
            setShowPhoneModal(false);
            setPhoneOtpStep(false);
          }}
          className="w-10 h-10 rounded-full
          bg-[#F4F6F9]
          hover:bg-gray-200
          flex items-center justify-center
          text-lg"
        >
          ✕
        </button>

      </div>

      {!phoneOtpStep ? (

        <div className="space-y-5">

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              Current Number
            </label>

            <input
              type="text"
              value={phoneForm.currentPhone}
              readOnly
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4"
            />

          </div>

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              New Number
            </label>

            <input
              type="text"
              value={phoneForm.newPhone}
              onChange={(e) =>
                setPhoneForm({
                  ...phoneForm,
                  newPhone: e.target.value,
                })
              }
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <button
            onClick={() =>
              setPhoneOtpStep(true)
            }
            className="w-full bg-[#0B2A4A]
            text-white py-4 rounded-2xl
            font-semibold"
          >
            Send OTP
          </button>

        </div>

      ) : (

        <div className="space-y-5">

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              Enter OTP
            </label>

            <input
              type="text"
              value={phoneForm.otp}
              onChange={(e) =>
                setPhoneForm({
                  ...phoneForm,
                  otp: e.target.value,
                })
              }
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <button
            onClick={() => {

              setProfileData({
                ...profileData,
                phone: phoneForm.newPhone,
              });

              setShowPhoneModal(false);

              setPhoneOtpStep(false);
            }}
            className="w-full bg-[#27D3C3]
            text-[#0B2A4A]
            py-4 rounded-2xl
            font-bold"
          >
            Verify & Update
          </button>

        </div>

      )}

    </div>

  </div>

)}

{/* EMAIL MODAL */}

{showEmailModal && (

  <div
    className="fixed inset-0 bg-black/40
    flex items-center justify-center z-50"
  >

    <div className="bg-white rounded-3xl p-8 w-full max-w-md">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0B2A4A]">
            Update Email Address
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Verify using OTP
          </p>

        </div>

        <button
          onClick={() => {
            setShowEmailModal(false);
            setEmailOtpStep(false);
          }}
          className="w-10 h-10 rounded-full
          bg-[#F4F6F9]
          hover:bg-gray-200
          flex items-center justify-center
          text-lg"
        >
          ✕
        </button>

      </div>

      {!emailOtpStep ? (

        <div className="space-y-5">

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              Current Email
            </label>

            <input
              type="email"
              value={emailForm.currentEmail}
              readOnly
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4"
            />

          </div>

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              New Email
            </label>

            <input
              type="email"
              value={emailForm.newEmail}
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  newEmail: e.target.value,
                })
              }
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <button
            onClick={() =>
              setEmailOtpStep(true)
            }
            className="w-full bg-[#0B2A4A]
            text-white py-4 rounded-2xl
            font-semibold"
          >
            Send OTP
          </button>

        </div>

      ) : (

        <div className="space-y-5">

          <div>

            <label className="text-sm font-semibold text-[#0B2A4A] block mb-2">
              Enter OTP
            </label>

            <input
              type="text"
              value={emailForm.otp}
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  otp: e.target.value,
                })
              }
              className="w-full bg-[#F8FAFC]
              border border-gray-200
              rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <button
            onClick={() => {

              setProfileData({
                ...profileData,
                email: emailForm.newEmail,
              });

              setShowEmailModal(false);

              setEmailOtpStep(false);
            }}
            className="w-full bg-[#27D3C3]
            text-[#0B2A4A]
            py-4 rounded-2xl
            font-bold"
          >
            Verify & Update
          </button>

        </div>

      )}

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