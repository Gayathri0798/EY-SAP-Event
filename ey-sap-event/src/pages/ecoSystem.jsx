import { useState } from "react";
import "../styles/sapEcoSystem.css";

export default function SAPEcoSystem() {
  const [active, setActive] = useState("All");

  const data = [
    {
      sno: 1,
      category: "Finance",
      name: "Business Integrity Screening",
      desc: "Scan large volumes of data in real time with increased accuracy.",
    },
    {
      sno: 2,
      category: "Finance",
      name: "Behavioural Insights for Contract Accounting",
      desc: "Analyze historical customer behavior and predict, explain payment risk.",
    },
    {
      sno: 3,
      category: "Finance",
      name: "Configuration for US Tax Jurisdictions",
      desc: "Simplify tax maintenance for the internal sales & use tax solution for the US.",
    },
    {
      sno: 4,
      category: "Finance",
      name: "Enterprise Search",
      desc: "Search business data with natural language queries in SAP Fiori Launchpad.",
    },
    {
      sno: 5,
      category: "Finance",
      name: "Joule for developers, ABAP AI capabilities",
      desc: "Accelerate ABAP development with Joule.",
    },
    {
      sno: 6,
      category: "Finance",
      name: "Smart Summarization",
      desc: "Jump start your communications or follow-ups by generated text proposals.",
    },
{
      sno: 7,
      category: "Finance",
      name: "creation of fixed asset master Data",
      desc: "Facilitate the creation of fixed asset master data with Joule.",
    },
    {
      sno: 8,
      category: "Finance",
      name: "Posting issue handling for billing documents",
      desc: "Assist billing clerks to efficiently process billing docs with posting issues.",
    },
    {
      sno: 9,
      category: "Finance",
      name: "Sales order status check",
      desc: "Track sales order fulfillment and spot issues blocking completion.",
    },
    {
      sno: 10,
      category: "Finance",
      name: "Joule with SAP S4/HANA Cloud Private Edition",
      desc: "Streamline your informational, navigational, and transactional tasks.",
    },
    { sno: 11, category: "Spend", name: "Catalog Item Recommendations", desc: "Suggest products and services based on users' past purchases." },

  { sno: 12, category: "Spend", name: "Category Segmentation", desc: "Generate content recommendations based on AI." },
  { sno: 13, category: "Spend", name: "Category Strategy recommendations", desc: "Accelerate category planning with AI-powered recommendations." },
  { sno: 14, category: "Spend", name: "Cost Structure Creation", desc: "Generate content recommendations based on AI." },
  { sno: 15, category: "Spend", name: "Experience Assessment", desc: "How closely a job seeker's professional background aligns with a job posting." },
  { sno: 16, category: "Spend", name: "Market Dynamic Chart Plotting", desc: "Generate content recommendations based on AI." },
  { sno: 17, category: "Spend", name: "O*NET Labelling", desc: "Recommend O*NET codes for job classifications." },
  { sno: 18, category: "Spend", name: "Resume Assessment", desc: "Evaluate how compatible is a job seeker's resume with a job posting." },
  { sno: 19, category: "Spend", name: "Skill Based Job Posting", desc: "AI-powered skill-based hiring for faster, smarter talent matching." },
  { sno: 20, category: "Spend", name: "Supplier Prediction", desc: "Suggests suppliers for guided sourcing events based on past similar events." },
  { sno: 21, category: "Spend", name: "Strategy Summarizer", desc: "Generate summaries of category strategy documents." },

   { sno: 22, category: "CX", name: "Account Synopsis for SAP Sales Cloud Version 2", desc: "Facilitate targeted and relevant sales conversations." },
  { sno: 23, category: "CX", name: "Account Synopsis for Service Cloud Version 2", desc: "Provides all the information related to an account that helps service agents." },
  { sno: 24, category: "CX", name: "Business Text Intelligence for Sales Cloud Version 2", desc: "Get actionable insights for appointments from note texts." },
  { sno: 25, category: "CX", name: "Case Summary for SAP Service Cloud Version 2", desc: "Create a case summary using the email communications." },
  { sno: 26, category: "CX", name: "Custom AI Tool Builder", desc: "Create custom AI tools for business users grounded in SAP data." },
  { sno: 27, category: "CX", name: "CX Agents (Deferred by SAP)", desc: "" },
  { sno: 28, category: "CX", name: "E-mail Recommender for SAP Sales Cloud Version 2", desc: "Reduce time to draft responses based on previous interactions." },
  { sno: 29, category: "CX", name: "E-mail Recommender for SAP Service Cloud Version 2", desc: "Produce email drafts using AI based on previous exchanges." },
  { sno: 30, category: "CX", name: "Lead Booster for Sales Cloud Version 2", desc: "Increase lead generation effectiveness." },
  { sno: 31, category: "CX", name: "Intelligent Q&A", desc: "Find answers to work-related questions by analyzing your company's content." },
  { sno: 32, category: "CX", name: "Image Generation", desc: "Use AI tools for seamless product visual transformation and editing." },
  { sno: 33, category: "CX", name: "Case Classification Agent", desc: "Analyze and classify customer service tickets and cases." },
  { sno: 34, category: "CX", name: "Product Recommendation", desc: "Make quick upselling offers to customers." },
  { sno: 35, category: "CX", name: "Knowledge Creation Agent", desc: "Create knowledge base articles based on customer tickets." },
  { sno: 36, category: "CX", name: "Shopping Agent", desc: "Transform your online shopping experience with an AI shopping agent." },
  { sno: 37, category: "CX", name: "Business Interaction Intelligence", desc: "Provides insights for appointments and visits." },
  { sno: 38, category: "CX", name: "Deal Intelligence", desc: "Predict if an opportunity can be won or lost." },
  { sno: 39, category: "CX", name: "Case Topic Analyzer", desc: "View trending topics from cases." },
  { sno: 40, category: "CX", name: "NLP Classification for Sales Cloud Version 2", desc: "Identify sentiment from emails." },
  { sno: 41, category: "CX", name: "NLP Classification for Service Cloud Version 2", desc: "Identify sentiment from emails." },
  { sno: 42, category: "CX", name: "Profanity Check", desc: "Define a set of pejorative vocabulary." },
  { sno: 43, category: "CX", name: "Requirements Processing", desc: "Extract needs from unstructured text description of customer requirements." },
  { sno: 44, category: "CX", name: "Similar Case Recommendation", desc: "Find solutions from previous similar cases that can be applied to your case." },
  { sno: 45, category: "CX", name: "Standard Tools", desc: "Role specific prompts utilizing CX data to generate discovery questions etc." },
  { sno: 46, category: "CX", name: "Machine Translation", desc: "Use machine translation to translate emails." },
  { sno: 47, category: "CX", name: "Registered Product Summary", desc: "Generate registered product summaries." },
  { sno: 48, category: "CX", name: "Product Tagging", desc: "Extract and enrich your product tags with AI." },
  { sno: 49, category: "CX", name: "Product Descriptions", desc: "Create personalized product descriptions that enrich your catalog data." },
  { sno: 50, category: "CX", name: "Survey Trend Summary", desc: "Provide contextual guidance on improving the sales representative’s store visits." },
  { sno: 51, category: "CX", name: "Case Categorization", desc: "Automate the case categorization process." },
  { sno: 52, category: "CX", name: "Q&A Agent", desc: "Autonomously process and answer questions from existing customer data." },
  { sno: 53, category: "CX", name: "Visual Search", desc: "Find products in your catalog that match an uploaded image." },
  { sno: 54, category: "CX", name: "Sales Order Summary", desc: "Analyze and present insights from pricing simulations in sales orders." },
  { sno: 55, category: "CX", name: "Case Summary for SAP Enterprise Service Management", desc: "Generate Case summary based on email interactions." },
  { sno: 56, category: "CX", name: "E-mail Recommender for SAP Enterprise Service", desc: "Generate e-mail drafts based on past interactions via AI." },

  { sno: 57, category: "SCM", name: "Anomaly Detection", desc: "Identify and monitor unusual patterns or behavior in technical objects." },
  { sno: 58, category: "SCM", name: "Auto-Scheduling", desc: "Fully automate your planning and streamline your field service operations." },
  { sno: 59, category: "SCM", name: "Joule with SAP Asset Performance Management", desc: "Get quick answers based on product documentation." },
  { sno: 60, category: "SCM", name: "Joule with SAP IBP", desc: "Get quick answers based on product documentation." },
  { sno: 61, category: "SCM", name: "Outlier Job Detection", desc: "Detect jobs that are taking longer or shorter than expected." },
  { sno: 62, category: "SCM", name: "Failure Curve Analytics", desc: "Predict probabilities of failures for technical objects." },
  { sno: 63, category: "SCM", name: "Master data Consistency", desc: "Discover patterns in your master data." },
  { sno: 64, category: "SCM", name: "Automatic Outlier Correction", desc: "Automatically detect and correct outliers in time series data." },
  { sno: 65, category: "SCM", name: "AI-Assisted Forecasting", desc: "Generate forecasts for scenarios or areas of your business." },
  { sno: 66, category: "SCM", name: "AI-assisted planning", desc: "AI-Assisted generation of SAP IBP formulas." },
  { sno: 67, category: "SCM", name: "Analysis of inventory optimization", desc: "Analyze safety stock output and support root cause analysis." },
  { sno: 68, category: "SCM", name: "Forecast result analysis", desc: "Explain the forecast outcome and recommend ways to improve accuracy." },
  { sno: 69, category: "SCM", name: "Curve based forecasting", desc: "Create reliable predictions when historical data is sparse or incomplete." },
  { sno: 70, category: "SCM", name: "Machine learning alerts", desc: "Prevent supply chain issues before they happen." },
  { sno: 71, category: "SCM", name: "Demand Sensing", desc: "Create optimized daily forecasts for multiple products based on demand." },
  { sno: 72, category: "SCM", name: "Matching Improvement", desc: "Find the best-fit suppliers based on requirements." },
  { sno: 73, category: "SCM", name: "Enhanced Responses to Discovery Posting", desc: "Generate accurate responses to buyers’ request for information." },

  { sno: 74, category: "HCM", name: "Person Insights for Compensation Discussions", desc: "Generate insights into an employee's compensation." },
  { sno: 75, category: "HCM", name: "AI-Assisted Authoring", desc: "Enrich enablement content automatically with AI support." },
  { sno: 76, category: "HCM", name: "AI-Assisted Writing", desc: "Enhance the quality of the content writing in text fields." },
  { sno: 77, category: "HCM", name: "Joule Q&A", desc: "Get answers about an organization’s HR policy documents." },
  { sno: 78, category: "HCM", name: "Joule with SAP SuccessFactors Solutions", desc: "Elevate the employee experience with an AI copilot." },
  { sno: 79, category: "HCM", name: "Career Insights", desc: "Get insights into employees' development actions towards target role." },
  { sno: 80, category: "HCM", name: "Development Goal Creation", desc: "Build meaningful and inspiring development goals." },
  { sno: 81, category: "HCM", name: "Job Description Enhancement", desc: "Generate enhanced job descriptions using generative AI." },
  { sno: 82, category: "HCM", name: "Successor Insights", desc: "Get insights on candidates to help with succession planning." },
  { sno: 83, category: "HCM", name: "Successor Recommendation", desc: "View recommended successors based on skills, competencies, and experience." },
  { sno: 84, category: "HCM", name: "Performance Goal Creation", desc: "Build meaningful and inspiring performance goals." },
  { sno: 85, category: "HCM", name: "Insights into Detailed 360 Report", desc: "Gain insights into Detailed 360 Report." },
  { sno: 86, category: "HCM", name: "Skill Inference for Assignment Creation", desc: "Create and edit assignments using generative AI." },
  { sno: 87, category: "HCM", name: "Performance and Goals Agent", desc: "Get insights into employees' development actions towards target role." },
  { sno: 88, category: "HCM", name: "Sentiment Analysis in 360 Reviews", desc: "Analyze the sentiment of a feedback delivered in a 360 review." },
  { sno: 89, category: "HCM", name: "Team Goals", desc: "Build meaningful and inspiring team goals." },
  { sno: 90, category: "HCM", name: "Text Analyzer", desc: "Analyze content within supported text areas for bias, safety, and responsibility." },
  { sno: 91, category: "HCM", name: "Interview Feedback Insights", desc: "Get insights into interviewer feedback and notes about a given candidate." },
  { sno: 92, category: "HCM", name: "Assignment Creation", desc: "Create and edit assignments using generative AI." },
  { sno: 93, category: "HCM", name: "Skill Identification from Resume", desc: "Identify skills from a resume and display the skills on the Growth Portfolio." },
  { sno: 94, category: "HCM", name: "Writing – translation", desc: "Translate written content in supported text areas." },
  { sno: 95, category: "HCM", name: "Bulk Translation", desc: "Instantly translate preset page content into multiple languages with ease." },
  { sno: 96, category: "HCM", name: "Extended AI Locales", desc: "Review, customize, and enable AI-translated locales for use." },
  { sno: 97, category: "HCM", name: "Performance Insights", desc: "Get insights on an employee's performance based on the feedback received." },
  { sno: 98, category: "HCM", name: "Skill Inference for Continuous Performance Mgmt", desc: "Infer skills to employees using Continuous Performance Management data." }
  ];

  const categories = ["All", "Finance", "Spend", "CX", "SCM", "HCM"];

  const filtered =
    active === "All"
      ? data
      : data.filter((item) => item.category === active);

  return (
    <div className="ai-container">

      {/* ✅ SIDEBAR */}
      <div className="sidebar">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`filter ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* ✅ CONTENT */}
      <div className="content-area">
        <h2>{active} Solutions</h2>

        <div className="pill-grid">
          {filtered.map((item) => (
            <div className="big-pill" key={item.sno}>
              
              <div className="pill-header">
                <span className="icon">⚡</span>
                <h4>{item.name}</h4>
              </div>

              {/* ✅ FULL TEXT (NOT CUT) */}
              <p>{item.desc}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}