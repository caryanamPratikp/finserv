import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  const [selectedUser, setSelectedUser] =
    useState(null);

  

  const [showStatusModal, setShowStatusModal] =
    useState(false);

  const [showDetailsModal, setShowDetailsModal] =
    useState(false);

  const [statusFilter, setStatusFilter] =
    useState("All");

    const [activeMonth, setActiveMonth] =
  useState(0);

const [showRemarksModal, setShowRemarksModal] =
  useState(false);

const [selectedRemark, setSelectedRemark] =
  useState("");

  /* LIVE FEED */

  const updates = [
    "New user registered with dealer code DLR2091",
    "ICICI Bank requested additional verification",
    "Loan approved for Rahul Sharma",
    "Admin rejected incomplete application",
    "Documents verified for Priya Singh",
    "Axis Bank started review process",
    "New customer added by dealer",
    "HDFC Bank approved car finance request",
  ];

  const [activityFeed, setActivityFeed] =
    useState([
      {
        id: 1,
        message:
          "Rahul Sharma submitted documents",
        time: "Just now",
      },
      {
        id: 2,
        message:
          "Bank started review for Amit Verma",
        time: "2 mins ago",
      },
    ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        updates[
          Math.floor(
            Math.random() *
              updates.length
          )
        ];

      setActivityFeed((prev) => [
        {
          id: Date.now(),
          message: random,
          time: "Just now",
        },
        ...prev.slice(0, 6),
      ]);
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  /* USERS */

  const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    mobile: "9876543210",
    loan: "₹8,50,000",
    status: "Bank Review",
    type: "Dealer Added",
    editable: true,
    hasRemark: true,
    remark:
      "Admin requested updated bank statement and income proof.",
  },

  {
    id: 2,
    name: "Priya Singh",
    mobile: "9011223344",
    loan: "₹11,00,000",
    status: "Loan Approved",
    type: "Dealer Code",
    editable: false,
    hasRemark: false,
    remark: "",
  },

  {
    id: 3,
    name: "Amit Verma",
    mobile: "9988776655",
    loan: "₹6,20,000",
    status: "Documents Submitted",
    type: "Dealer Added",
    editable: true,
    hasRemark: true,
    remark:
      "Customer PAN image is blurred. Please re-upload.",
  },

  {
    id: 4,
    name: "Karan Patel",
    mobile: "8899776655",
    loan: "₹5,75,000",
    status: "Rejected",
    type: "Dealer Code",
    editable: false,
    hasRemark: false,
    remark: "",
  },
];

  const statusUsers = [
    "Documents Submitted",
    "Documents Verified",
    "Bank Review",
    "Loan Approved",
    "Rejected",
  ];

  const statusData = [
    {
      name: "Rahul Sharma",
      mobile: "9876543210",
      status: "Bank Review",
    },
    {
      name: "Amit Verma",
      mobile: "9988776655",
      status: "Documents Submitted",
    },
    {
      name: "Priya Singh",
      mobile: "9011223344",
      status: "Loan Approved",
    },
    {
      name: "Karan Patel",
      mobile: "8899776655",
      status: "Rejected",
    },
    {
      name: "Rohit Mehta",
      mobile: "9988112233",
      status: "Documents Verified",
    },
    {
      name: "Anjali Verma",
      mobile: "8899001122",
      status: "Bank Review",
    },
    {
      name: "Sahil Khan",
      mobile: "8877665544",
      status: "Loan Approved",
    },
    {
      name: "Deepak Sharma",
      mobile: "7766554433",
      status: "Rejected",
    },
    {
      name: "Pooja Singh",
      mobile: "9090909090",
      status: "Documents Submitted",
    },
    {
      name: "Akash Jain",
      mobile: "8080808080",
      status: "Loan Approved",
    },
    {
      name: "Mohit Arora",
      mobile: "7070707070",
      status: "Bank Review",
    },
    {
      name: "Ritika Sharma",
      mobile: "9998887776",
      status: "Documents Verified",
    },
    {
      name: "Manish Patel",
      mobile: "9090112233",
      status: "Rejected",
    },
    {
      name: "Komal Verma",
      mobile: "7878787878",
      status: "Loan Approved",
    },
    {
      name: "Neha Joshi",
      mobile: "6767676767",
      status: "Bank Review",
    },
    {
      name: "Tarun Yadav",
      mobile: "9988771122",
      status: "Documents Submitted",
    },
  ];

  const filteredUsers =
    statusFilter === "All"
      ? statusData
      : statusData.filter(
          (item) =>
            item.status === statusFilter
        );

  /* FLOW */

  const steps = [
    "Documents Submitted",
    "Documents Verified",
    "Sent To Bank",
    "Bank Review",
    "Loan Approved",
    "Amount Disbursed",
  ];

  /* LOGOUT */

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };


  const reportsData = [
  {
    month: "January",
    values: [45, 70, 58, 95, 120, 85],
  },
  {
    month: "February",
    values: [60, 82, 74, 110, 138, 96],
  },
  {
    month: "March",
    values: [75, 90, 84, 125, 150, 118],
  },
  {
    month: "April",
    values: [55, 76, 66, 104, 132, 92],
  },
  {
    month: "May",
    values: [82, 105, 96, 138, 170, 130],
  },
];


const weekLabels = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
];
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
              Dealer Panel
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage customers, documents &
              bank approvals
            </p>
          </div>

        </div>

        {/* CONTENT */}

        <div className="p-8 space-y-8">
          {/* DASHBOARD */}

          {activeMenu === "Dashboard" && (
            <>
              {/* STATS */}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Total Applications
                  </p>

                  <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
                    148
                  </h2>

                  <p className="text-xs text-green-600 mt-2">
                    +18 this month
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Pending Verification
                  </p>

                  <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
                    26
                  </h2>

                  <p className="text-xs text-orange-500 mt-2">
                    Needs attention
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Approved Loans
                  </p>

                  <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
                    92
                  </h2>

                  <p className="text-xs text-green-600 mt-2">
                    82% approval rate
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Loan Value
                  </p>

                  <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
                    ₹4.8Cr
                  </h2>

                  <p className="text-xs text-blue-500 mt-2">
                    Total processed amount
                  </p>
                </div>
              </div>

              {/* QUICK ACTIONS */}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div
                  className="bg-gradient-to-r from-[#0B2A4A] to-[#123E68]
                  rounded-3xl p-6 text-white"
                >
                  <h2 className="text-xl font-bold">
                    Add New Customer
                  </h2>

                  <p className="text-sm text-gray-300 mt-2">
                    Create loan applications
                    and upload documents
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-[#0B2A4A]">
                    Bank Actions
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    Monitor approvals,
                    verification & disbursal
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-[#0B2A4A]">
                    Dealer Performance
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    Track monthly approvals &
                    customer growth
                  </p>
                </div>
              </div>

              {/* LIVE + RECENT */}

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* LIVE */}

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2A4A]">
                        Live Quick View
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Real-time traffic
                      </p>
                    </div>

                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  </div>

                  <div className="space-y-4">
                    {activityFeed.map(
                      (item) => (
                        <div
                          key={item.id}
                          className="bg-[#F8FAFC]
                          border border-gray-100
                          rounded-2xl p-4"
                        >
                          <p className="text-sm font-medium text-[#0B2A4A]">
                            {item.message}
                          </p>

                          <p className="text-xs text-gray-400 mt-2">
                            {item.time}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* RECENT */}

                <div className="bg-white rounded-3xl p-6 shadow-sm xl:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2A4A]">
                        Recent Applications
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Customers linked to
                        your dealer code
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="pb-4 text-left text-sm text-gray-500">
                            Customer
                          </th>

                          <th className="pb-4 text-left text-sm text-gray-500">
                            Loan
                          </th>

                          <th className="pb-4 text-left text-sm text-gray-500">
                            Status
                          </th>

                          <th className="pb-4 text-left text-sm text-gray-500">
                            Type
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {users.map((user) => (
                          <tr
                            key={user.id}
                            className="border-b border-gray-50"
                          >
                            <td className="py-5">
                              <h3 className="font-semibold text-[#0B2A4A]">
                                {user.name}
                              </h3>

                              <p className="text-sm text-gray-500 mt-1">
                                {user.mobile}
                              </p>
                            </td>

                            <td className="py-5 font-semibold text-[#0B2A4A]">
                              {user.loan}
                            </td>

                            <td className="py-5">
                              <span
                                className="px-4 py-2 rounded-full text-xs font-bold bg-[#EAFBF8] text-[#0B2A4A]"
                              >
                                {user.status}
                              </span>
                            </td>

                            <td className="py-5 text-sm text-gray-600">
                              {user.type}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* USERS */}

          {activeMenu === "User" && (
  <div className="space-y-6">
    {/* HEADER */}

    <div
      className="bg-white rounded-3xl p-6
      shadow-sm flex items-center justify-between"
    >
      <div>
        <h2 className="text-2xl font-bold text-[#0B2A4A]">
          User Management
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Add customers and manage
          documents
        </p>
      </div>

      <button
        className="bg-[#27D3C3]
        text-[#0B2A4A]
        px-6 py-3 rounded-2xl
        font-bold"
      >
        + Add User
      </button>
    </div>

    {/* USER LIST */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {users.map((user) => (
    <div
      key={user.id}
      className="bg-white rounded-3xl p-6 shadow-sm"
    >
      {/* TOP SECTION */}

      <div className="flex items-start justify-between">
        {/* USER INFO */}

        <div className="flex items-start gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#0B2A4A]">
                {user.name}
              </h2>

              {/* REMARKS BUTTON ONLY FOR DEALER ADDED */}

              {user.type === "Dealer Added" && (
                <button
                  onClick={() => {
                    setSelectedUser(user);

                    setSelectedRemark(
                      user.remark ||
                        "No remarks added by admin."
                    );

                    setShowRemarksModal(true);
                  }}
                  className="relative w-9 h-9 rounded-full
                  bg-[#F4F6F9]
                  hover:bg-[#EAFBF8]
                  border border-gray-200
                  flex items-center justify-center
                  transition"
                >
                  💬

                  {/* RED DOT */}

                  {user.hasRemark && (
                    <span
                      className="absolute top-1 right-1
                      w-3 h-3 rounded-full
                      bg-red-500 border-2 border-white
                      animate-pulse"
                    ></span>
                  )}
                </button>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {user.mobile}
            </p>
          </div>
        </div>

        {/* STATUS */}

        <span
          className="bg-[#EAFBF8]
          text-[#0B2A4A]
          px-4 py-2 rounded-full
          text-xs font-bold"
        >
          {user.status}
        </span>
      </div>

      {/* INFO CARDS */}

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="bg-[#F8FAFC] rounded-2xl p-4">
          <p className="text-xs text-gray-500">
            Loan Amount
          </p>

          <h3 className="font-bold text-[#0B2A4A] mt-2">
            {user.loan}
          </h3>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-4">
          <p className="text-xs text-gray-500">
            User Type
          </p>

          <h3 className="font-bold text-[#0B2A4A] mt-2">
            {user.type}
          </h3>
        </div>
      </div>

      {/* ACTION BUTTONS */}

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={() => {
            setSelectedUser(user);
            setShowStatusModal(true);
          }}
          className="bg-[#0B2A4A]
          text-white px-5 py-3
          rounded-2xl text-sm font-semibold"
        >
          View Status
        </button>

        <button
          onClick={() => {
            setSelectedUser(user);
            setShowDetailsModal(true);
          }}
          className="bg-[#EAFBF8]
          text-[#0B2A4A]
          px-5 py-3 rounded-2xl
          text-sm font-semibold"
        >
          View Details
        </button>

        {user.editable && (
          <button
            className="bg-yellow-100
            text-yellow-700 px-5 py-3
            rounded-2xl text-sm font-semibold"
          >
            Edit User
          </button>
        )}
      </div>
    </div>
  ))}
</div>

    {/* REMARKS MODAL */}

    {/* REMARKS MODAL */}

{showRemarksModal && selectedUser && (
  <div
    className="fixed inset-0 bg-black/40
    flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-3xl p-8 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0B2A4A]">
            Admin Remarks
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Read-only review updates
          </p>
        </div>

        <button
          onClick={() =>
            setShowRemarksModal(false)
          }
          className="text-2xl"
        >
          ×
        </button>
      </div>

      <div
        className="bg-[#F8FAFC]
        border border-gray-200
        rounded-2xl p-5 min-h-[160px]"
      >
        <p className="text-sm leading-7 text-gray-700">
          {selectedRemark}
        </p>
      </div>

      <div
        className="mt-5 bg-red-50
        border border-red-100
        rounded-2xl p-4"
      >
        <p className="text-xs text-red-600 font-medium">
          Remarks are added by admin and
          cannot be edited by dealer.
        </p>
      </div>
    </div>
  </div>
)}
  </div>
)}

          {/* STATUS */}

          {activeMenu === "Status" && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0B2A4A]">
                      Application Status
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Track customer
                      applications
                    </p>
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value
                      )
                    }
                    className="border border-gray-200 rounded-2xl px-5 py-3"
                  >
                    <option value="All">
                      All
                    </option>

                    {statusUsers.map(
                      (status, index) => (
                        <option
                          key={index}
                          value={status}
                        >
                          {status}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-4 text-left text-sm text-gray-500">
                        Name
                      </th>

                      <th className="pb-4 text-left text-sm text-gray-500">
                        Mobile
                      </th>

                      <th className="pb-4 text-left text-sm text-gray-500">
                        Current Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredUsers.map(
                      (user, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-50"
                        >
                          <td className="py-5 font-semibold text-[#0B2A4A]">
                            {user.name}
                          </td>

                          <td className="py-5 text-gray-600">
                            {user.mobile}
                          </td>

                          <td className="py-5">
                            <span
                              className="bg-[#EAFBF8]
                              text-[#0B2A4A]
                              px-4 py-2 rounded-full
                              text-xs font-bold"
                            >
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* REPORTS */}

          {/* REPORTS */}

{/* REPORTS */}

{activeMenu === "Reports" && (
  <div className="space-y-6">

    {/* HEADER */}

    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div>

          <h2 className="text-2xl font-bold text-[#0B2A4A]">
            Reports & Analytics
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Monthly dealer performance & growth analytics
          </p>

        </div>

        {/* MONTH SWITCH */}

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setActiveMonth((prev) =>
                prev === 0
                  ? reportsData.length - 1
                  : prev - 1
              )
            }
            className="w-11 h-11 rounded-2xl
            bg-[#F4F6F9]
            hover:bg-[#EAFBF8]
            transition"
          >
            ←
          </button>

          <div
            className="bg-[#0B2A4A]
            text-white px-6 py-3
            rounded-2xl text-sm font-semibold"
          >
            {reportsData[activeMonth].month}
          </div>

          <button
            onClick={() =>
              setActiveMonth((prev) =>
                prev === reportsData.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="w-11 h-11 rounded-2xl
            bg-[#F4F6F9]
            hover:bg-[#EAFBF8]
            transition"
          >
            →
          </button>

        </div>

      </div>

    </div>

    {/* GRAPH */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h3 className="text-xl font-bold text-[#0B2A4A]">
            Users Added Trend
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Weekly customer onboarding activity
          </p>

        </div>

        <div
          className="bg-[#EAFBF8]
          px-5 py-3 rounded-2xl"
        >

          <p className="text-xs text-gray-500">
            Monthly Growth
          </p>

          <h3 className="font-bold text-[#0B2A4A] mt-1">
            +18.6%
          </h3>

        </div>

      </div>

      {/* BAR GRAPH */}

      <div className="flex items-end gap-5 h-80">

        {reportsData[activeMonth].values.map(
          (value, index) => (

            <div
              key={index}
              className="flex-1 flex flex-col items-center"
            >

              {/* VALUE */}

              <div className="mb-3 text-sm font-bold text-[#0B2A4A]">
                {value}
              </div>

              {/* BAR */}

              <div
                className="w-full rounded-t-[28px]
                bg-gradient-to-t
                from-[#27D3C3]
                to-[#0B2A4A]
                transition-all duration-700
                hover:scale-105"
                style={{
                  height: `${value * 1.5}px`,
                }}
              ></div>

              {/* LABEL */}

              <p className="text-xs text-gray-500 mt-4">
                {weekLabels[index]}
              </p>

            </div>

          )
        )}

      </div>

    </div>

    {/* REPORT STATS */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm text-gray-500">
          Approval Rate
        </p>

        <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
          82%
        </h2>

        <p className="text-xs text-green-600 mt-2">
          +4.2% increase
        </p>

      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm text-gray-500">
          Avg Loan Size
        </p>

        <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
          ₹7.2L
        </h2>

        <p className="text-xs text-blue-500 mt-2">
          Higher than last month
        </p>

      </div>

      

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm text-gray-500">
          Revenue Generated
        </p>

        <h2 className="text-3xl font-bold text-[#0B2A4A] mt-3">
          ₹18.4L
        </h2>

        <p className="text-xs text-orange-500 mt-2">
          Updated from approvals
        </p>

      </div>

    </div>

    

  </div>
)}
        </div>
      </div>

      {/* STATUS MODAL */}

      {showStatusModal && selectedUser && (
        <div
          className="fixed inset-0 bg-black/40
          flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0B2A4A]">
                Loan Journey
              </h2>

              <button
                onClick={() =>
                  setShowStatusModal(false)
                }
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-full
                    bg-[#27D3C3]
                    flex items-center justify-center
                    font-bold text-[#0B2A4A]"
                  >
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">
                      {step}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Process completed
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DETAILS MODAL */}

      {showDetailsModal && selectedUser && (
        <div
          className="fixed inset-0 bg-black/40
          flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-3xl p-8 w-full max-w-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0B2A4A]">
                User Documents
              </h2>

              <button
                onClick={() =>
                  setShowDetailsModal(false)
                }
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {selectedUser.documents.map(
                (doc, index) => (
                  <div
                    key={index}
                    className="bg-[#F8FAFC]
                    rounded-2xl p-4
                    flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-[#0B2A4A]">
                      {doc}
                    </h3>

                    <span
                      className="bg-green-100
                      text-green-700 px-4 py-2
                      rounded-full text-xs font-bold"
                    >
                      Submitted
                    </span>
                  </div>
                )
              )}
            </div>

            {!selectedUser.editable && (
              <div
                className="mt-6 bg-yellow-50
                border border-yellow-200
                rounded-2xl p-4"
              >
                <p className="text-sm text-yellow-700">
                  This user registered using
                  your dealer code. Actual
                  document files cannot be
                  viewed or edited.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;