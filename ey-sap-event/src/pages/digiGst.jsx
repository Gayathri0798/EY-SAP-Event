import "../styles/digiGst.css";

// import CaterPillerVideo from "../video/CaterPiller.mp4";

// import FinolexVideo from "../video/Finolex.mp4";


// import GMRVideo from "../video/GMR.mp4";
// import MediaVideo from "../video/Media.mp4";
// import CopioltVideo from "../video/copoilt.mp4"

export default function DigiGST() {
    const stats = [
        {
            value: "5,200+",
            label: "Client entities served",
            sub: "(GST market leader)",
        },
        {
            value: "9%",
            label: "of India's GST",
            sub: "transaction volume",
        },
        {
            value: "3 Bn+",
            label: "Invoices submitted",
            sub: "to GST portal",
        },
        {
            value: "10%",
            label: "of India's GDP",
            sub: "reported to GSTN",
        },
        {
            value: "10 Lakh+",
            label: "Monthly IRNs across",
            sub: "2,000+ entities",
        },
    ];

    const logos = [
        "images/Designer (3).png",
        "images/vst.png",
        "images/agro.png",
        "images/fab.png",
        "images/balmer.png",
        "images/siemens.png",
        "images/schwing.png",
        "images/indigo.png",
        "images/sony.png",
        "images/tataRealty.png",
        "images/duro.png",
        "images/tvs.png",
        "images/hcl.png",
        "images/kel.png",
        "images/nalco.png",
        "images/Designer (2).png",
        "images/Designer (1).png",
        "images/parle.png",
        "images/fino.png",
        "images/capiller.png",
        "images/voltas.png",
        "images/ceat.png",
        "images/Designer.png",
        "images/shree.png",
        "images/exide.png",
    ];

    return (
        <>
            {/* HERO */}
            <section className="dg-hero">
                <a
                    className="dg-sap-store-badge"
                    href="https://www.sap.com/products/erp/partners/ernst-young-llp-ey-digigst.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="dg-sap-store-badge-tag">
                        LISTED ON SAP STORE
                    </span>

                    <img
                        src="/sap-store.png"
                        alt="SAP Store"
                    />
                </a>

                <div className="dg-hero-inner">

                    <h1 className="dg-hero-title">
                        DigiGST

                        <small>
                            Integrated Solution for E-Invoicing,
                            E-Way Bills and GST Returns Compliance
                        </small>
                    </h1>

                    <div className="dg-hero-tagline">

                        <span className="dg-hero-tag-pill">
                            SAP-certified PAT File add-on for ERP
                        </span>

                        <span className="dg-hero-dot"></span>

                        <span className="dg-hero-tag-pill">
                            Deployed on SAP BTP Cloud Foundry
                        </span>

                    </div>

                    <p className="dg-hero-desc">
                        SAP certified ERP add-on and cloud native platform on SAP BTP
                        (Cloud Foundry) that automates, validates and manages the
                        entire GST lifecycle — from transaction processing and
                        reconciliations to return filing and analytics — within and
                        beyond SAP, enabling businesses to reduce manual effort,
                        strengthen compliance control, gain end-to-end visibility
                        and make faster, insight-driven decisions.
                    </p>

                </div>
            </section>

            {/* STATS */}
            <section className="dg-stats-section">

                <div className="dg-stats-row">

                    {stats.map((item, index) => (
                        <div key={index} className="dg-stat">

                            <div className="dg-stat-value">
                                {item.value}
                            </div>

                            <div className="dg-stat-label">
                                {item.label}
                                <br />
                                {item.sub}
                            </div>

                        </div>
                    ))}

                </div>

            </section>

            {/* CLIENTS */}
            <section className="dg-clients-strip">

                <div className="dg-clients-strip-label">
                    TRUSTED BY LEADING ENTERPRISES
                </div>

                <div className="dg-marquee">

                    <div className="dg-marquee-track">

                        {[...logos, ...logos].map((logo, index) => (

                            <div className="dg-client-logo" key={index}>

                                <img
                                    src={`/${logo}`}
                                    alt="client"
                                    className="dg-client-logo-img"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* TRANSFORM */}
            <section className="section transform-section">
                <div className="grid-bg"></div>

                <div className="transform-container">

                    <h2 className="transform-title">
                        How <span>DigiGST</span> can transform your business
                    </h2>

                    <p className="transform-subtitle">
                        A unified, ERP-native and cloud-powered compliance platform —
                        purpose-built to simplify GST operations, enhance control and
                        drive faster, more accurate outcomes.
                    </p>

                    {/* TOP LARGE PANELS */}

                    <div className="top-panels">

                        <div className="big-panel left-panel">


                            <video
                                className="panel-video"
                                src="https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FMedia1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ec3199364%2De19a%2D4007%2D963d%2Dd9ce8185fb8d"
                                autoPlay
                                muted
                                loop
                                playsInline

                            />
                            <button
                                className="top-play-btn"
                                onClick={() => window.open("https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FMedia1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ec3199364%2De19a%2D4007%2D963d%2Dd9ce8185fb8d", "_blank")}
                            > ▶</button>
                        </div>

                        <div className="big-panel right-panel">

                            <p>
                                A guided command center for DigiGST platform —
                                from e-Invoicing & E-way Bills, returns and
                                reconciliations across SAP and beyond.
                            </p>

                        </div>

                    </div>

                    {/* FEATURE CARDS */}

                    <div className="feature-grid">

                        <div className="feature-card yellow">
                            <div className="feature-icon">□</div>

                            <h3>Complete ERP-native cockpit</h3>

                            <p>
                                Seamlessly integrates with SAP through ERP-native
                                architecture for intelligent compliance.
                            </p>
                        </div>

                        <div className="feature-card cyan">
                            <div className="feature-icon">△</div>

                            <h3>Role-based controls in SAP</h3>

                            <p>
                                Strong segregation of duties, embedded workflow
                                controls and complete approval framework.
                            </p>
                        </div>

                        <div className="feature-card blue">
                            <div className="feature-icon">▣</div>

                            <h3>Smart ITC & ERP control</h3>

                            <p>
                                AI-led eligibility checks identify mismatches with
                                automated action workflows.
                            </p>
                        </div>

                        <div className="feature-card green">
                            <div className="feature-icon">✓</div>

                            <h3>Embedded validations & checks</h3>

                            <p>
                                250+ automated checks with audit trail and intelligent
                                reconciliations.
                            </p>
                        </div>

                        <div className="feature-card purple">
                            <div className="feature-icon">◈</div>

                            <h3>Automated repetitive automation</h3>

                            <p>
                                Eliminate recurring & repetitive digital compliance
                                tasks with automation rules engine.
                            </p>
                        </div>

                        <div className="feature-card orange">
                            <div className="feature-icon">◉</div>

                            <h3>Integrated GST compliance platform</h3>

                            <p>
                                Returns, ITC, notices, reconciliations &
                                approvals unified together on one platform.
                            </p>
                        </div>

                    </div>

                    {/* BOTTOM PANELS */}

                    <div className="bottom-panels">

                        {/* <div className="big-panel left-panel">
                            <div className="play-btn">›</div>
                        </div> */}

                        <div className="big-panel left-panel">


                            <video
                                className="panel-video"
                                src="https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FVideos%2FClipchamp%2FVideo%20Project%203%2FExports%2FCopilot%201%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1FbWFpbCIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee327feaa%2De7a0%2D436e%2Da4c2%2D8da06537c694"
                                autoPlay
                                muted
                                loop
                                playsInline

                            />
                            <button
                                className="top-play-btn"
                                onClick={() => window.open("https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FVideos%2FClipchamp%2FVideo%20Project%203%2FExports%2FCopilot%201%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1FbWFpbCIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee327feaa%2De7a0%2D436e%2Da4c2%2D8da06537c694", "_blank")}
                            > ▶</button>
                        </div>

                        <div className="big-panel right-panel bottom-text">

                            <small>UNIFIED WORKSPACE</small>

                            <h4>
                                DigiGST unifies e-Invoice, e-Way bill,
                                ITC and tax workflows through one
                                intelligent GST compliance experience.
                            </h4>

                        </div>

                    </div>

                </div>
            </section>


            {/* AI */}
            <section className="section ai-action-section">
                <div className="grid-bg"></div>

                <div className="ai-action-container layout-with-video">

                    {/* LEFT SIDE VIDEO */}
                    <div className="ai-video-wrapper">
                        <video
                            src="https://eyindia-my.sharepoint.com/personal/neha_jodha_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fneha%5Fjodha%5Fin%5Fey%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCopilot%5FTRA%5FRCM%5FITC%20V1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E169730b1%2D65d2%2D4f67%2Da94d%2D6ebf371f10ae&ct=1781156603144&or=Teams%2DHL&ga=1&LOF=1"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        <button
                        className="ai-play-btn"
                        onClick={() => window.open("https://eyindia-my.sharepoint.com/personal/neha_jodha_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fneha%5Fjodha%5Fin%5Fey%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCopilot%5FTRA%5FRCM%5FITC%20V1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E169730b1%2D65d2%2D4f67%2Da94d%2D6ebf371f10ae&ct=1781156603144&or=Teams%2DHL&ga=1&LOF=1", "_blank")}
                        type="button"
                    >
                        ▶
                    </button>
                    </div>
                    
                    

                    {/* RIGHT SIDE CONTENT */}
                    <div className="ai-content-wrapper">

                        <h2 className="ai-action-title">
                            DigiGST - AI in <span>Action</span>
                        </h2>

                        <p className="ai-action-desc">
                            DigiGST — an AI-ready platform, rapidly advancing with AI-driven
                            capabilities to enable smarter insights, automated actions and
                            future-ready tax operations for the business.
                        </p>

                        <div className="ai-action-grid">
                            {/* KEEP YOUR CARDS SAME */}
                            {/* CARD 1 */}
                            <div className="ai-action-card">
                                <div className="icon-box">✧</div>
                                <div className="card-number">01</div>
                                <h3>Reverse Charge Identifier</h3>
                                <p>
                                    Auto-detects transactions liable for reverse-charge.
                                    Flags missed RCM liabilities — eliminates audit exposure.
                                </p>
                            </div>

                            {/* CARD 2 */}
                            <div className="ai-action-card">
                                <div className="icon-box">✓</div>
                                <div className="card-number">02</div>
                                <h3>GST ITC Eligibility Classifier</h3>
                                <p>
                                    Classifies every line item as eligible / ineligible /
                                    blocked under Sec 17(5). Protects ITC claims.
                                </p>
                            </div>

                            {/* CARD 3 */}
                            <div className="ai-action-card">
                                <div className="icon-box">☰</div>
                                <div className="card-number">03</div>
                                <h3>Tax Research Assistant (LLM)</h3>
                                <p>
                                    Conversational AI grounded on GST law, notifications,
                                    circulars and case-law.
                                </p>
                            </div>

                            {/* CARD 4 */}
                            <div className="ai-action-card">
                                <div className="icon-box">▣</div>
                                <div className="card-number">04</div>
                                <h3>AI-enabled Dashboards</h3>
                                <p>
                                    Scans KPIs to surface anomalies and predict risks.
                                </p>
                            </div>
                        </div>

                        <div className="bottom-line">
                            <span>Smarter compliance. Faster decisions.</span>
                            <strong> Audit-ready outcomes.</strong>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECURITY */}
            <section className="section security-section">
                <div className="grid-bg"></div>

                <div className="section-inner">

                    <h2 className="section-title">
                        Data Security <span>Key Features</span>
                    </h2>

                    <p className="section-description">
                        Enterprise-grade controls and certifications protect your
                        data across every layer — from access and infrastructure
                        to monitoring and disaster recovery.
                    </p>

                    <div className="security-grid">

                        <div className="sec-card">
                            <div className="sec-num">01</div>

                            <div className="sec-text">
                                <strong>Role-based Single Sign-On (SSO)</strong> enabled with
                                moderator access and audit trail maintained.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">02</div>

                            <div className="sec-text">
                                <strong>Periodic VAPT / Penetration testing</strong> by empanelled
                                vendors obtained with minimal to nil observations.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">03</div>

                            <div className="sec-text">
                                EY DigiGST platform certified for
                                <strong>
                                    {" "}ISO 27001, ISO 27017, ISO 27018,
                                    ISO 20000 and SOC 1 Type 2 & SOC 2 Type 2
                                </strong>
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">04</div>

                            <div className="sec-text">
                                <strong>Dedicated BCP / DR servers</strong> in different locations,
                                monitored regularly and tested for several exigencies.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">05</div>

                            <div className="sec-text">
                                <strong>Third-party audits</strong> of IT security and data
                                infrastructure aligned with industry best standards.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">06</div>

                            <div className="sec-text">
                                <strong>Data retention & confidentiality policy</strong> in place
                                with weekly backups — no instance of data breach.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">07</div>

                            <div className="sec-text">
                                <strong>Workplace controls</strong> demonstrated in terms of
                                appropriate security, controls and maintenance of data centres.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">08</div>

                            <div className="sec-text">
                                <strong>Layered security control on Cloud</strong> —
                                end-to-end encryption of data in transit and at rest.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">09</div>

                            <div className="sec-text">
                                <strong>24x7 monitoring</strong> using cloud providers'
                                monitoring services.
                            </div>
                        </div>

                        <div className="sec-card">
                            <div className="sec-num">10</div>

                            <div className="sec-text">
                                <strong>Change management process</strong> in place to track every
                                change through a change advisory board — first tested on UAT,
                                then production.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonials-section">
                <div className="grid-overlay"></div>

                <div className="testimonials-container">
                    <h2 className="testimonials-title">
                        Client <span>Testimonials</span>
                    </h2>

                    <p className="testimonials-desc">
                        Hear directly from our clients about how DigiGST is simplifying GST
                        compliance, strengthening control and accelerating decisions across
                        their organisations.
                    </p>



                    <div className="testimonials-grid">

                        {/* Card 1 */}
                        <div className="video-card">
                            {/* <video className="video-element" controls>
                                <source src={CaterpillerVideo} type="video/mp4" />
                            </video> */}

                            {/* <video
                                className="video-element"
                                controls
                                src={CaterPillerVideo}
                            /> */}

                            <button
                                className="play-btn"
                                onClick={() => window.open("https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FDocuments%2F1%2E%20ASP%2DGSP%2FSAP%2FSuccess%20Stories%20SAP%2FCater%20piller%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee4d7dd5d%2D3a44%2D45df%2D822f%2D0a16aed90505&isSPOFile=1&xsdata=MDV8MDJ8fDhlOTgwZDMxM2M2MTQ2MmMyNzcxMDhkZWM3N2FlMDQ4fDViOTczZjk5NzdkZjRiZWJiMjdkYWEwYzcwYjg0ODJjfDB8MHw2MzkxNjc1Mjc2OTU5NTE3Mjl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21Ga09EZ3dZV1kyTFRVMk1qQXRORGhsWmkxaVpEazRMVE16WWpGaU5UTTNZakF6Tmw5a01qUXhZVEUzWmkwNU1URTJMVFJsWVRZdE9UTTNNQzA0Tm1FM1lUQmhaRGxtWlRSQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjNE1URTFOVGsyT1RBM05RPT18Y2Y1ZDFmMmYxMWZmNGFlYzhhZDMwOGRlYzc3YWUwNDd8ZGQwNTJiNGY3NmYzNDI0Y2I2N2I0N2NiNGVmYmFhZTI%3D&sdata=UkpkMkczMHljY0N1N3RNWENuTmxZb3JFd0VNTE9MVVhxcnZrQTNZMTlxUT0%3D&ovuser=5b973f99-77df-4beb-b27d-aa0c70b8482c%2CRohit.Sharma1%40in.ey.com", "_blank")}
                            />

                            <video
                                className="video-element"
                                src="https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj%5Fkinra%5Fin%5Fey%5Fcom%2FDocuments%2FDocuments%2F1%2E%20ASP%2DGSP%2FSAP%2FSuccess%20Stories%20SAP%2FCater%20piller%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee4d7dd5d%2D3a44%2D45df%2D822f%2D0a16aed90505&isSPOFile=1&xsdata=MDV8MDJ8fDhlOTgwZDMxM2M2MTQ2MmMyNzcxMDhkZWM3N2FlMDQ4fDViOTczZjk5NzdkZjRiZWJiMjdkYWEwYzcwYjg0ODJjfDB8MHw2MzkxNjc1Mjc2OTU5NTE3Mjl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21Ga09EZ3dZV1kyTFRVMk1qQXRORGhsWmkxaVpEazRMVE16WWpGaU5UTTNZakF6Tmw5a01qUXhZVEUzWmkwNU1URTJMVFJsWVRZdE9UTTNNQzA0Tm1FM1lUQmhaRGxtWlRSQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjNE1URTFOVGsyT1RBM05RPT18Y2Y1ZDFmMmYxMWZmNGFlYzhhZDMwOGRlYzc3YWUwNDd8ZGQwNTJiNGY3NmYzNDI0Y2I2N2I0N2NiNGVmYmFhZTI%3D&sdata=UkpkMkczMHljY0N1N3RNWENuTmxZb3JFd0VNTE9MVVhxcnZrQTNZMTlxUT0%3D&ovuser=5b973f99-77df-4beb-b27d-aa0c70b8482c%2CRohit.Sharma1%40in.ey.com"
                                autoPlay
                                muted
                                loop
                                playsInline

                            />

                            <div className="video-footer">
                                Caterpillar
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="video-card">
                            {/* <video className="video-element" controls>
                                <source src={FinolexVideo} type="video/mp4" />
                            </video> */}
                            <button
                                className="play-btn"
                                onClick={() => window.open("https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj_kinra_in_ey_com%2FDocuments%2FDocuments%2F1.+ASP-GSP%2FSAP%2FSuccess+Stories+SAP%2FFinolex.mp4&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.7ff907e8-f590-4bbc-a398-dc4742a41a46&web=1&TeamsCID=70004092-23da-4581-8673-54a41c99a7d8", "_blank")}
                            />

                            <video
                                className="video-element"
                                src="https://eyindia-my.sharepoint.com/personal/manuj_kinra_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuj_kinra_in_ey_com%2FDocuments%2FDocuments%2F1.+ASP-GSP%2FSAP%2FSuccess+Stories+SAP%2FFinolex.mp4&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.7ff907e8-f590-4bbc-a398-dc4742a41a46&web=1&TeamsCID=70004092-23da-4581-8673-54a41c99a7d8"
                                autoPlay
                                muted
                                loop
                                playsInline

                            />

                            <div className="video-footer">
                                Finolex
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="video-card">
                            {/* <video className="video-element" controls>
                                <source src={GMRVideo} type="video/mp4" />
                            </video> */}
                            <button
                                className="play-btn"
                                onClick={() => window.open("https://eyindia-my.sharepoint.com/:v:/r/personal/manuj_kinra_in_ey_com/Documents/Documents/1.%20ASP-GSP/SAP/Success%20Stories%20SAP/GMR.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ff4BcV", "_blank")}
                            />

                            <video
                                className="video-element"
                                src="https://eyindia-my.sharepoint.com/:v:/r/personal/manuj_kinra_in_ey_com/Documents/Documents/1.%20ASP-GSP/SAP/Success%20Stories%20SAP/GMR.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ff4BcV"
                                autoPlay
                                muted
                                loop
                                playsInline

                            />

                            <div className="video-footer">
                                GMR
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="dg-footer">
                <div className="dg-footer-text">
                    EY DigiGST — Integrated GST Compliance Platform
                </div>
            </footer>
        </>
    );
}