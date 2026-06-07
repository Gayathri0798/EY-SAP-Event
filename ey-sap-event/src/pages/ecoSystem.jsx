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
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDDTK7FEeMDRIG2K-bTRtZMAV7FOm_wyloPoaU61bOKLTE?e=tpDoxn",
    },
    {
      sno: 2,
      category: "Finance",
      name: "Behavioural Insights for Contract Accounting",
      desc: "Analyze historical customer behavior and predict, explain payment risk.",
      url: "",
    },
    {
      sno: 3,
      category: "Finance",
      name: "Configuration for US Tax Jurisdictions",
      desc: "Simplify tax maintenance for the internal sales & use tax solution for the US.",
      url: "https://eygermany.sharepoint.com/:f:/r/sites/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Shared Documents/SAP Business AI capabilites/Joule use cases/Cloud ERP Solutions/Configuration for US Tax Jurisdictions?csf=1&web=1&e=kcBNPp",
    },
    {
      sno: 4,
      category: "Finance",
      name: "Enterprise Search",
      desc: "Search business data with natural language queries in SAP Fiori Launchpad.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgC-BzkGkhgtS6uUxCKxJ3nOAY_593VjlCnv1rltIe8orEY?e=1QaDnS",
    },
    {
      sno: 5,
      category: "Finance",
      name: "Joule for developers, ABAP AI capabilities",
      desc: "Accelerate ABAP development with Joule.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EuvQv0mrPfNHpRXUQKmaoNsB9qEIheePYVr_6k9Ny2ICxg?e=ecJ4kL",
    },
    {
      sno: 6,
      category: "Finance",
      name: "Smart Summarization",
      desc: "Jump start your communications or follow-ups by generated text proposals.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgBOHcU3b8XEToF8a18Rq7wGAXjnNvDCVkCoLn9GB6ifjsE?e=FTHCay",
    },
    {
      sno: 7,
      category: "Finance",
      name: "creation of fixed asset master Data",
      desc: "Facilitate the creation of fixed asset master data with Joule.",
      url: "",
    },
    {
      sno: 8,
      category: "Finance",
      name: "Posting issue handling for billing documents",
      desc: "Assist billing clerks to efficiently process billing docs with posting issues.",
      url: "",
    },
    {
      sno: 9,
      category: "Finance",
      name: "Sales order status check",
      desc: "Track sales order fulfillment and spot issues blocking completion.",
      url: "",
    },
    {
      sno: 10,
      category: "Finance",
      name: "Joule with SAP S4/HANA Cloud Private Edition",
      desc: "Streamline your informational, navigational, and transactional tasks.",
      url: "",
    },
    {
      sno: 11,
      category: "Spend",
      name: "Catalog Item Recommendations",
      desc: "Suggest products and services based on users' past purchases.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EkIKIjsWiSpKiaN8c9-fc7sBIbbiUNMneplIDtObF32yQw?e=3IGMto",
    },

    {
      sno: 12,
      category: "Spend",
      name: "Category Segmentation",
      desc: "Generate content recommendations based on AI.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Epv6GcWCKrRNlgyjVdUaabsBFPA9M5mZMD5TEFtprm_xZw?e=DS2dXe",
    },
    {
      sno: 13,
      category: "Spend",
      name: "Category Strategy recommendations",
      desc: "Accelerate category planning with AI-powered recommendations.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EoWmjgqLPnFHmx1NGF5I4-ABD1qGjMo6vnGprybSiivR0g?e=R6Khat",
    },
    {
      sno: 14,
      category: "Spend",
      name: "Cost Structure Creation",
      desc: "Generate content recommendations based on AI.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EmEX52Pr9fJMg8SaaUQdSOABjV4PmbPeOnoPnoWuzyQPLQ?e=sBn1TC",
    },
    {
      sno: 15,
      category: "Spend",
      name: "Experience Assessment",
      desc: "How closely a job seeker's professional background aligns with a job posting.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Ehk4hYbEQ91Chvotr0hxKakBQ5gQ1f_8ErJkVyFHPNQ1wQ?e=RjOdMM",
    },
    {
      sno: 16,
      category: "Spend",
      name: "Market Dynamic Chart Plotting",
      desc: "Generate content recommendations based on AI.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eo_-tbtlD21IjfPMIwvw8gwB2yxkNqd4_TenIcbjm43Zkw?e=TeievF",
    },
    {
      sno: 17,
      category: "Spend",
      name: "O*NET Labelling",
      desc: "Recommend O*NET codes for job classifications.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Ei-_KfPA3btPmEnKWZC7ua4B5CZWqppWnwllQx_lBo5LFA?e=eCQIsf",
    },
    {
      sno: 18,
      category: "Spend",
      name: "Resume Assessment",
      desc: "Evaluate how compatible is a job seeker's resume with a job posting.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Emzflc7I7vpJgGZ5j3H3spMBNU9oNb0nNuSALMnnyceZxQ?e=Kr4BMi",
    },
    {
      sno: 19,
      category: "Spend",
      name: "Skill Based Job Posting",
      desc: "AI-powered skill-based hiring for faster, smarter talent matching.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Evg2MGy0JcJDlOyh-OBwHwkBVxcFdQEuzudDlYM2Jz9pIw?e=YWFGpN",
    },
    {
      sno: 20,
      category: "Spend",
      name: "Supplier Prediction",
      desc: "Suggests suppliers for guided sourcing events based on past similar events.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eqj8swTYcZhBnzBIOvKYJugBwkIRRNND-JOXen4Oh1oRzw?e=ThU5hM",
    },
    {
      sno: 21,
      category: "Spend",
      name: "Strategy Summarizer",
      desc: "Generate summaries of category strategy documents.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EoMTEO9dtWxKkL78J8qf00ABtIAgJidO7caWWMIP9_aI_Q?e=OyDi7S",
    },

    {
      sno: 22,
      category: "CX",
      name: "Account Synopsis for SAP Sales Cloud Version 2",
      desc: "Facilitate targeted and relevant sales conversations.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eg20V7d5Ne1Il0bZXn_miZkB8KMTVXWIwx-vtARiFwCfZg?e=oykKkU",
    },
    {
      sno: 23,
      category: "CX",
      name: "Account Synopsis for Service Cloud Version 2",
      desc: "Provides all the information related to an account that helps service agents.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/ErzaMuVtQQlDkbgaFJXM4igBIjJyokeS0yQNM6yui2TfKQ?e=9pj2Wo",
    },
    {
      sno: 24,
      category: "CX",
      name: "Business Text Intelligence for Sales Cloud Version 2",
      desc: "Get actionable insights for appointments from note texts.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EqZx3ZPLTpdBqQ1SEehvmTMBuNbDlakOuoJSEe0m_QrNSA?e=pgcSdH",
    },
    {
      sno: 25,
      category: "CX",
      name: "Case Summary for SAP Service Cloud Version 2",
      desc: "Create a case summary using the email communications.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EjxUCyVRoaJElu6RlQLr_I0BRROkvCesuL2q2JVp6cA1XA?e=K4GOWe",
    },
    {
      sno: 26,
      category: "CX",
      name: "Custom AI Tool Builder",
      desc: "Create custom AI tools for business users grounded in SAP data.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/ErbJSAAEgBlHk3hq0C2KCOQBQpDi065SKl-3r6lZVxJyiA?e=d1gQoc",
    },
    { sno: 27, category: "CX", name: "CX Agents (Deferred by SAP)", desc: "", url:"https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/ErBDatF1sG9EvsnSae6eapoBBuG18BrZKRZd_obbjmMrkw?e=gEJCcH" },
    {
      sno: 28,
      category: "CX",
      name: "E-mail Recommender for SAP Sales Cloud Version 2",
      desc: "Reduce time to draft responses based on previous interactions.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Epy4utow5udBrhaBByLyJMcB746PLulGDbgkf06CuzBtCg?e=fAYFKe",
    },
    {
      sno: 29,
      category: "CX",
      name: "E-mail Recommender for SAP Service Cloud Version 2",
      desc: "Produce email drafts using AI based on previous exchanges.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eppnimrd5jNJjbpRUH05-cQB5z41hRbEJxQF9kR-ka4J-A?e=LJped7",
    },
    {
      sno: 30,
      category: "CX",
      name: "Lead Booster for Sales Cloud Version 2",
      desc: "Increase lead generation effectiveness.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EoGcgE-BIKZJqYNWHKWQXNABuhbEMgMKrYGfjBGwgXPkfw?e=qA4sCL",
    },
    {
      sno: 31,
      category: "CX",
      name: "Intelligent Q&A",
      desc: "Find answers to work-related questions by analyzing your company's content.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EpLIt0I4m0VInwiCx__JmEIBjly_0y3tA4MjhPSIWmjLaQ?e=RXRZ38",
    },
    {
      sno: 32,
      category: "CX",
      name: "Image Generation",
      desc: "Use AI tools for seamless product visual transformation and editing.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EtzvH74z2gdFvgGiBxffpqUBMeBUll7sGwnnMZT0J3pOBg?e=DIK7QH",
    },
    {
      sno: 33,
      category: "CX",
      name: "Case Classification Agent",
      desc: "Analyze and classify customer service tickets and cases.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Erm9udcDqwJFgPzd2mh8kIABHM62dB4Ti3scIVajzBKkNg?e=NXCbje",
    },
    {
      sno: 34,
      category: "CX",
      name: "Product Recommendation",
      desc: "Make quick upselling offers to customers.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EoCNVL8PVG5Lg7N5h2sglowBVqDTKKwmn4qYbr3WuiTHNQ?e=g1QTvT",
    },
    {
      sno: 35,
      category: "CX",
      name: "Knowledge Creation Agent",
      desc: "Create knowledge base articles based on customer tickets.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EkUt94vkGJxEmfMtzRefVQgBZYNYlPF0Qo06o2SZ4iM_zQ?e=pRMXSt",
    },
    {
      sno: 36,
      category: "CX",
      name: "Shopping Agent",
      desc: "Transform your online shopping experience with an AI shopping agent.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDLh3wixSKhTajxl58SQacNAXTpu4WPPkJK0QmzcLSFyLs?e=gOMHhA",
    },
    {
      sno: 37,
      category: "CX",
      name: "Business Interaction Intelligence",
      desc: "Provides insights for appointments and visits.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgCX28pca8hYTbHdnzEcr4yWAVti2YWXYGCcyDOCmPFny50?e=s2aDXH",
    },
    {
      sno: 38,
      category: "CX",
      name: "Deal Intelligence",
      desc: "Predict if an opportunity can be won or lost.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgB8S23vjjrDSIn4GRuykxsFAXryhcOFa6DeOw7Azab3GVs?e=9tirew",
    },
    {
      sno: 39,
      category: "CX",
      name: "Case Topic Analyzer",
      desc: "View trending topics from cases.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgBs1IcFsgrgRrMITxa2co7qAdqRLroBq1XpKBfbr6X9s8g?e=ijvQxO",
    },
    {
      sno: 40,
      category: "CX",
      name: "NLP Classification for Sales Cloud Version 2",
      desc: "Identify sentiment from emails.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EthCcukFe1ZNpVEjQJPDqLUBJqFnNz1EfpnT_OYvLKRlSA?e=cb64fL",
    },
    {
      sno: 41,
      category: "CX",
      name: "NLP Classification for Service Cloud Version 2",
      desc: "Identify sentiment from emails.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eqj8cPCU7UFKkpskTFU63cUBC8Ed3INxcdIkkf9my8PM9A?e=yZcr12",
    },
    {
      sno: 42,
      category: "CX",
      name: "Profanity Check",
      desc: "Define a set of pejorative vocabulary.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EvdfANWDo-NIs-fIqRmI28cBxwpO9GBHblxxpwu1nF4Obw?e=AZEznR",
    },
    {
      sno: 43,
      category: "CX",
      name: "Requirements Processing",
      desc: "Extract needs from unstructured text description of customer requirements.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EnVeYNRmIqhKljqSeF9vR2EBUIcBQA-EqHMz1qr-4AyO9Q?e=3aWloA",
    },
    {
      sno: 44,
      category: "CX",
      name: "Similar Case Recommendation",
      desc: "Find solutions from previous similar cases that can be applied to your case.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EsUI2EX5eINOqBWe-d0Nl98BDXgDRCQfANxnIE9DjBoa6w?e=Uv1hvB",
    },
    {
      sno: 45,
      category: "CX",
      name: "Standard Tools",
      desc: "Role specific prompts utilizing CX data to generate discovery questions etc.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EvJNg1BijSlJjkFwhnzuisUBi4bUdlxzJuMyCdEZU_4_dQ?e=Z7U4Nm",
    },
    {
      sno: 46,
      category: "CX",
      name: "Machine Translation",
      desc: "Use machine translation to translate emails.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EhJX2EV26NdJgHdSUFXVc5UB3GDq9f67hsXr5hyVOo-zNQ?e=oOoYko",
    },
    {
      sno: 47,
      category: "CX",
      name: "Registered Product Summary",
      desc: "Generate registered product summaries.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eq1HG9Xp5D1OsciTrNdwwgwBj8vVasca5vOuGyewjSeHGw?e=eZQWfd",
    },
    {
      sno: 48,
      category: "CX",
      name: "Product Tagging",
      desc: "Extract and enrich your product tags with AI.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EkUmi-PL9o5GsqJ4S-SidqcBK1yJg_2y1CNbYNGgRL93cg?e=xLU59y",
    },
    {
      sno: 49,
      category: "CX",
      name: "Product Descriptions",
      desc: "Create personalized product descriptions that enrich your catalog data.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EoPQnI6DsItJuo77hNNym5EBb7yLcQBBkazyFqYWoJBjcQ?e=ig63sP",
    },
    {
      sno: 50,
      category: "CX",
      name: "Survey Trend Summary",
      desc: "Provide contextual guidance on improving the sales representative’s store visits.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EpWyYibDgMpAiYT55mko_ukBFcc9aHbhWesGwl4bm4izQQ?e=kBAhd1",
    },
    {
      sno: 51,
      category: "CX",
      name: "Case Categorization",
      desc: "Automate the case categorization process.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EmbLzZRZUyBPpyOa1whDpdwByR_edpgRkxhVtZ7h6aqAIw?e=bjvpaP",
    },
    {
      sno: 52,
      category: "CX",
      name: "Q&A Agent",
      desc: "Autonomously process and answer questions from existing customer data.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgC9lMwfEgxSS4kzk4qamAclASHh2pNS8Ud8d7BsKjKZdno?e=Q6TI53",
    },
    {
      sno: 53,
      category: "CX",
      name: "Visual Search",
      desc: "Find products in your catalog that match an uploaded image.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgAaEBeBKyoaS4Lc4voNrUIsAciDOX6yYkXL28b_aUhJFCM?e=IRsDWQ",
    },
    {
      sno: 54,
      category: "CX",
      name: "Sales Order Summary",
      desc: "Analyze and present insights from pricing simulations in sales orders.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDEW13-_GF9ToOJKNLSr8P1AdCBuH8BOHkZ_UhfDstFxgM?e=h2RSbt",
    },
    {
      sno: 55,
      category: "CX",
      name: "Case Summary for SAP Enterprise Service Management",
      desc: "Generate Case summary based on email interactions.",
      url: "",
    },
    {
      sno: 56,
      category: "CX",
      name: "E-mail Recommender for SAP Enterprise Service",
      desc: "Generate e-mail drafts based on past interactions via AI.",
      url: "",
    },

    {
      sno: 57,
      category: "SCM",
      name: "Anomaly Detection",
      desc: "Identify and monitor unusual patterns or behavior in technical objects.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EvvGWL2C3dlDuHXPHwB6_y4B_4H-OMPdJ_rwJJEDqeq2Nw?e=lZEkS7",
    },
    {
      sno: 58,
      category: "SCM",
      name: "Auto-Scheduling",
      desc: "Fully automate your planning and streamline your field service operations.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eq1LqkD1-uVAn45tboT0fZ8B8wzRNRObWiL1OEx-g0aFZA?e=HM3qVa",
    },
    {
      sno: 59,
      category: "SCM",
      name: "Joule with SAP Asset Performance Management",
      desc: "Get quick answers based on product documentation.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/El3mJyAb1LREuby2N-hXuNEB2OfuCEY9o8ku1qA_QOAMeQ?e=oXG9L3",
    },
    {
      sno: 60,
      category: "SCM",
      name: "Joule with SAP IBP",
      desc: "Get quick answers based on product documentation.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EnyKtBqLD0BGqiRwTi4PuZkBJC-LTVyOuj2JMRN9UQdJxQ?e=GaLDps",
    },
    {
      sno: 61,
      category: "SCM",
      name: "Outlier Job Detection",
      desc: "Detect jobs that are taking longer or shorter than expected.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/El2ou2WW4i9Iv52cOaNbH54BT4Kj3z_H8DJ96h4qdh7udw?e=Cy03gu",
    },
    {
      sno: 62,
      category: "SCM",
      name: "Failure Curve Analytics",
      desc: "Predict probabilities of failures for technical objects.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EiNjEuktsZRMouTetZ-27mcBC1TSnWTPZJsHoAaKYrcsqQ?e=gKzi91",
    },
    {
      sno: 63,
      category: "SCM",
      name: "Master data Consistency",
      desc: "Discover patterns in your master data.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EkPsZbwHAURMtTjHVGHxy5QB1-srK3L5k0O7T6662xcN3g?e=TDAggB",
    },
    {
      sno: 64,
      category: "SCM",
      name: "Automatic Outlier Correction",
      desc: "Automatically detect and correct outliers in time series data.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDAqjfvKTiCSaC6Hq29NHgnASrDamItYmvGtZhFLsSsNHM?e=LwRdoP",
    },
    {
      sno: 65,
      category: "SCM",
      name: "AI-Assisted Forecasting",
      desc: "Generate forecasts for scenarios or areas of your business.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgD31Y1cN_47TLubiGQ4APqsAZfqxKNUffRKd_YSYOIi8aE?e=mNnWha",
    },
    {
      sno: 66,
      category: "SCM",
      name: "AI-assisted planning",
      desc: "AI-Assisted generation of SAP IBP formulas.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgABrCgAIoD2QICKfLE38UUlAbp6nyyW73UVDRCFW2WATOM?e=KhYoue",
    },
    {
      sno: 67,
      category: "SCM",
      name: "Analysis of inventory optimization",
      desc: "Analyze safety stock output and support root cause analysis.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDnnL_4iDP3Qqru3pt27CfjATDgey1EUlLOQpcvUzzCCjw?e=sn5JE9",
    },
    {
      sno: 68,
      category: "SCM",
      name: "Forecast result analysis",
      desc: "Explain the forecast outcome and recommend ways to improve accuracy.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgDlpefQgFeaQpDRQDUeQoBRAUV_fGHHszEd8AN-fhvn4YQ?e=DVARBz",
    },
    {
      sno: 69,
      category: "SCM",
      name: "Curve based forecasting",
      desc: "Create reliable predictions when historical data is sparse or incomplete.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgBRri_f6R-NSY_FLcr0pdqUAVAJrOQJndGMARExtKzIKh0?e=a2Paoq",
    },
    {
      sno: 70,
      category: "SCM",
      name: "Machine learning alerts",
      desc: "Prevent supply chain issues before they happen.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgA_6_A2ay1HRY8B538mARHUAX3SFoj0UVexkHEu3k0KGZI?e=cCouui",
    },
    {
      sno: 71,
      category: "SCM",
      name: "Demand Sensing",
      desc: "Create optimized daily forecasts for multiple products based on demand.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/IgD_47zf4qZ-QJStJof016HKAZE95hllarWYjqW9_q6ivEI?e=ykZ06E",
    },
    {
      sno: 72,
      category: "SCM",
      name: "Matching Improvement",
      desc: "Find the best-fit suppliers based on requirements.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Es_C4LsfLltJpTxKquc64HcBLt1Pqkol4_X6eqsJQR2lzQ?e=YMTr0I",
    },
    {
      sno: 73,
      category: "SCM",
      name: "Enhanced Responses to Discovery Posting",
      desc: "Generate accurate responses to buyers’ request for information.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/Eh5G4_1wdetFq1gxmKjXREsBZsGJB504keh_RopsPEBuEg?e=OYZRIz",
    },

    {
      sno: 74,
      category: "HCM",
      name: "Person Insights for Compensation Discussions",
      desc: "Generate insights into an employee's compensation.",
      url: "",
    },
    {
      sno: 75,
      category: "HCM",
      name: "AI-Assisted Authoring",
      desc: "Enrich enablement content automatically with AI support.",
      url: "",
    },
    {
      sno: 76,
      category: "HCM",
      name: "AI-Assisted Writing",
      desc: "Enhance the quality of the content writing in text fields.",
      url: "",
    },
    {
      sno: 77,
      category: "HCM",
      name: "Joule Q&A",
      desc: "Get answers about an organization’s HR policy documents.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EtnYT5yhicdLjQ75IjucdHIBPn_8NVv7bumgzqueZ1SHug?e=UiQxhK",
    },
    {
      sno: 78,
      category: "HCM",
      name: "Joule with SAP SuccessFactors Solutions",
      desc: "Elevate the employee experience with an AI copilot.",
      url: "https://eygermany.sharepoint.com/:f:/s/SAPTechnologyInnovationOffice-SAPTDP-Documentation/EhM6JajXpndIr65O5ZVHPe8BZwOtL7NfekE5M4G2zHmT6w?e=qeyjf0",
    },
    {
      sno: 79,
      category: "HCM",
      name: "Career Insights",
      desc: "Get insights into employees' development actions towards target role.",
      url: "",
    },
    {
      sno: 80,
      category: "HCM",
      name: "Development Goal Creation",
      desc: "Build meaningful and inspiring development goals.",
      url: "",
    },
    {
      sno: 81,
      category: "HCM",
      name: "Job Description Enhancement",
      desc: "Generate enhanced job descriptions using generative AI.",
      url: "",
    },
    {
      sno: 82,
      category: "HCM",
      name: "Successor Insights",
      desc: "Get insights on candidates to help with succession planning.",
      url: "",
    },
    {
      sno: 83,
      category: "HCM",
      name: "Successor Recommendation",
      desc: "View recommended successors based on skills, competencies, and experience.",
      url: "",
    },
    {
      sno: 84,
      category: "HCM",
      name: "Performance Goal Creation",
      desc: "Build meaningful and inspiring performance goals.",
      url: "",
    },
    {
      sno: 85,
      category: "HCM",
      name: "Insights into Detailed 360 Report",
      desc: "Gain insights into Detailed 360 Report.",
      url: "",
    },
    {
      sno: 86,
      category: "HCM",
      name: "Skill Inference for Assignment Creation",
      desc: "Create and edit assignments using generative AI.",
      url: "",
    },
    {
      sno: 87,
      category: "HCM",
      name: "Performance and Goals Agent",
      desc: "Get insights into employees' development actions towards target role.",
      url: "",
    },
    {
      sno: 88,
      category: "HCM",
      name: "Sentiment Analysis in 360 Reviews",
      desc: "Analyze the sentiment of a feedback delivered in a 360 review.",
      url: "",
    },
    {
      sno: 89,
      category: "HCM",
      name: "Team Goals",
      desc: "Build meaningful and inspiring team goals.",
      url: "",
    },
    {
      sno: 90,
      category: "HCM",
      name: "Text Analyzer",
      desc: "Analyze content within supported text areas for bias, safety, and responsibility.",
      url: "",
    },
    {
      sno: 91,
      category: "HCM",
      name: "Interview Feedback Insights",
      desc: "Get insights into interviewer feedback and notes about a given candidate.",
      url: "",
    },
    {
      sno: 92,
      category: "HCM",
      name: "Assignment Creation",
      desc: "Create and edit assignments using generative AI.",
      url: "",
    },
    {
      sno: 93,
      category: "HCM",
      name: "Skill Identification from Resume",
      desc: "Identify skills from a resume and display the skills on the Growth Portfolio.",
      url: "",
    },
    {
      sno: 94,
      category: "HCM",
      name: "Writing – translation",
      desc: "Translate written content in supported text areas.",
      url: "",
    },
    {
      sno: 95,
      category: "HCM",
      name: "Bulk Translation",
      desc: "Instantly translate preset page content into multiple languages with ease.",
      url: "",
    },
    {
      sno: 96,
      category: "HCM",
      name: "Extended AI Locales",
      desc: "Review, customize, and enable AI-translated locales for use.",
      url: "",
    },
    {
      sno: 97,
      category: "HCM",
      name: "Performance Insights",
      desc: "Get insights on an employee's performance based on the feedback received.",
      url: "",
    },
    {
      sno: 98,
      category: "HCM",
      name: "Skill Inference for Continuous Performance Mgmt",
      desc: "Infer skills to employees using Continuous Performance Management data.",
      url: "",
    },
  ];

  const categories = ["All", "Finance", "Spend", "CX", "SCM", "HCM"];

  const filtered =
    active === "All" ? data : data.filter((item) => item.category === active);

  return (
    <div className="ai-container">
      {/*   SIDEBAR */}
     <div className="sidebar">
  <h2 className="filter-main-heading">Solution Filter</h2>
  
  <div className="filter-options-list">
    {categories.map((cat) => (
      <div
        key={cat}
        className={`filter-item ${active === cat ? "active" : ""}`}
        onClick={() => setActive(cat)}
      >
        {cat}
      </div>
    ))}
  </div>
</div>

      {/*   CONTENT */}
      <div className="content-area">
        <h2 className="ai-font">{active} Solutions</h2>

        <div className="pill-grid">
          {filtered.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.sno}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="big-pill">
                {/* HEADER ROW */}
                <div className="pill-header">
                  <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#faec6a"><path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/></svg></span>
                  <h4>{item.name}</h4>
                </div>

                <p className="box-descr">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
