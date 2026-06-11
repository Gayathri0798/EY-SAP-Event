import { useState } from "react";
import "../styles/skillSet.css";

export default function BpaLibrary() {
  const [selectedBucket, setSelectedBucket] = useState("All");

 const data = {
  "Finance": [
    {
      skill: "Accounts Payable - Invoice Approval Process",
      desc: "Automates invoice approval with document extraction, UI5 form, validation decisions and email notifications to approvers"
    },
    {
      skill: "Accounts Payable - Supplier Invoice Creation with Reference (Public Cloud)",
      desc: "Automates supplier invoice creation with variable amounts using monthly/weekly reference invoices in S/4HANA public cloud"
    },
    {
      skill: "General Ledger - Journal Entry Validation and Posting",
      desc: "Validates journal entry details and posts to SAP S/4HANA on-premise; covers period-end adjustments and business transactions"
    },
    {
      skill: "General Ledger - Automated Upload of Manual Journal Entries via API (4CA)",
      desc: "Automates posting of journal entries to GL accounts for period-end closing and recording transactions without source documents"
    },
    {
      skill: "Capital Expenditure - Capital Expenditure Approval Process",
      desc: "Automates CAPEX request creation and multi-step approval routing based on investment amount and attributes"
    },
    {
      skill: "Period-End Closing - Manage Posting Period Approval",
      desc: "Digitalises and accelerates the manage posting period approval process in a transparent and auditable way"
    },
    {
      skill: "Accounts Payable - Safe Deactivation Procedure for Central Finance Replication",
      desc: "Automates safe deactivation of Central Finance replication objects with proper sequencing and validation"
    },
    {
      skill: "Central Finance - Central Finance Replication Monitoring and Error Resolution",
      desc: "Automates mapping, replication monitoring and error resolution for Central Finance; maintained by Central Finance team"
    }
  ],

  "Procurement": [
    {
      skill: "Purchase Requisition - Purchase Requisition Header Approval and Release",
      desc: "Automates PR approval and release in SAP ERP. UI5 form for header and item details; process triggers on submission; real-time visibility dashboard included"
    },
    {
      skill: "Goods Receipt - Goods Receipt for Purchase Orders (Low Value)",
      desc: "Reads open POs, checks delivery due date, prepares template with order details, creates GR for low-value POs; generates log and emails requestor"
    },
    {
      skill: "Vendor Management - Inactive Vendor Identification and Deactivation",
      desc: "Retrieves vendor data, applies Excel rules to identify inactive vendors, triggers approval workflow, marks vendors for deletion or block; sends log to stakeholders"
    },
    {
      skill: "Vendor Management - Vendor Onboarding",
      desc: "Flexible vendor creation process with configurable approval variants and automatic vendor master creation in SAP ERP"
    },
    {
      skill: "Purchase Order - Purchase Order Approval",
      desc: "Multi-level PO approval workflow triggered from SAP S/4HANA; configurable approval levels based on PO value and attributes"
    },
    {
      skill: "Goods Receipt - Goods Receipt Approval for Purchase Orders",
      desc: "After approval task completion, template enables GR creation for PO data with auto-generated log file emailed to requestor"
    }
  ],

  "Human Resources": [
    {
      skill: "Recruiting - Creation and Approval of Job Requisition",
      desc: "Automates basic job requisition creation and approval process in SAP SuccessFactors"
    },
    {
      skill: "Recruiting - Creation and Approval of Mass Job Requisition",
      desc: "Manages large-scale recruitment; allows HR to create multiple job openings simultaneously with approval for budgetary control and compliance"
    },
    {
      skill: "Recruiting - Handle Questions and Approvals in SAP SuccessFactors Recruiting",
      desc: "Handles recruiter queries and routes approvals within SAP SuccessFactors Recruiting module"
    },
    {
      skill: "Employee Contracts - Contract Employee End Date Extension",
      desc: "Automates the process of extending contract employee end dates including approval routing in SAP SuccessFactors"
    },
    {
      skill: "Access Management - Create Permission Group in SuccessFactors",
      desc: "Automates creation of permission groups in SAP SuccessFactors to streamline access management"
    },
    {
      skill: "Learning Management - Merge User in Learning Management System",
      desc: "Automates merging of duplicate user records in SAP SuccessFactors Learning Management System"
    }
  ],

  "Sales": [
    {
      skill: "Order Management - Manage Credit Block on Sales Order",
      desc: "Automates credit block management on sales orders with configurable business validation decisions and approval routing"
    },
    {
      skill: "Order Management - Sales Agent for Open Sales Order",
      desc: "Joule agent to fetch open sales order details for a specific customer from SAP S/4HANA backend"
    }
  ],

  "IT / Cross-Functional": [
    {
      skill: "ERP Transactions - Create Reservation – MB21 (ECC) – Cloud Studio",
      desc: "Automates creation of reservations using SAP ECC transaction MB21 via Cloud Studio bot"
    },
    {
      skill: "UI Automation - Pilot a UI Automation Application (calc.exe)",
      desc: "SAP-published starter template to learn and pilot UI automation capabilities using calc.exe as example"
    }
  ]
};

  //   Flatten data
  const allCards = Object.keys(data).flatMap(bucket =>
    data[bucket].map(item => ({
      ...item,
      bucket
    }))
  );

  //   Filter
  const filteredCards =
    selectedBucket === "All"
      ? allCards
      : allCards.filter(card => card.bucket === selectedBucket);

  return (
    <div className="skillsPage animatePage">

      {/*   HEADING */}
      <div className="headingText animateFadeUp delay-1">
        <h1>
          Skills Are Brewing
        </h1>

        <p>
         Get ready for a library of reusable capabilities and enterprise-ready building blocks.
        </p>
      </div>

      <div className="skills-layout">

        {/*   SIDEBAR */}
        <div className="sidebar">
  <h3>Quick Filters</h3>
  
  <div className="filter-options-list"> {/* Updated line 239 with class */}
    <div
      className={`filterItem ${selectedBucket === "All" ? "active" : ""}`}
      onClick={() => setSelectedBucket("All")}
    >
      All
    </div>

    {Object.keys(data).map((bucket) => (
      <div
        key={bucket}
        className={`filterItem ${selectedBucket === bucket ? "active" : ""}`}
        onClick={() => setSelectedBucket(bucket)}
      >
        {bucket}
      </div>
    ))}
  </div>
</div>

        {/*   CONTENT */}
        <div className="skills-content">
          <div className="grid">
            {filteredCards.map((item, i) => (
              <div className="skillCard" key={item.id || i}>
                <div className="bucket">{item.bucket}</div>
                <div className="title">{item.skill}</div>
                <div className="desc-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}