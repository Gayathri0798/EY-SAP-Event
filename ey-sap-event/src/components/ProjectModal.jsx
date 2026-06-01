export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header */}

        <div className="modal-header">
          <div className="modal-title">
            <div className="project-code">{project.code}</div>
            <h2>{project.title}</h2>
          </div>

          <div className="header-actions">
            <div className="share-btn">
  <svg
    className="share-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="2" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="19" r="2" />
    <line x1="8" y1="12" x2="16" y2="6" />
    <line x1="8" y1="12" x2="16" y2="18" />
  </svg>
  <span>Share</span>
</div>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* LEFT */}
          <div className="modal-left">
            <div className="section">
              <span className="label">Description</span>
              <p>Assess Knowledge Graph, ontology...</p>
            </div>

            <div className="section">
              <span className="label">Expected Business Benefits</span>
              <p>The insights generated to guide internal technology...</p>
            </div>

            <div className="section">
              <span className="label">Current Status</span>
              <p>Research concluded, socialization in progress</p>
            </div>
            <div className="section row-two">
              <div>
                <span className="label">Sponsoring Function</span>
                <p>Client Technology</p>
              </div>

              <div>
                <span className="label">Serviceline</span>
                <p>Client Technology</p>
              </div>
            </div>
            <div className="section">
              <span className="label">Key Contacts</span>

              <div className="contacts-grid">
                <div className="contact">
                  <div className="avatar"></div>
                  <div>
                    <p>Sumanta Mukherjee</p>
                    <span>Sprint Lead</span>
                  </div>
                </div>

                <div className="contact">
                  <div className="avatar"></div>
                  <div>
                    <p>Jannik Luxemburger</p>
                    <span>Requestor</span>
                  </div>
                </div>

                <div className="contact">
                  <div className="avatar"></div>
                  <div>
                    <p>Tomasz Butowicz</p>
                    <span>Stakeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="modal-right">
            <div className="section">

              <div className="stages">
                <div className="stage-item active">
                  <div className="bar"></div>
                  <span>Ideate</span>
                  <small>Apr-2026</small>
                </div>

                <div className="stage-item">
                  <div className="bar"></div>
                  <span>Incubation</span>
                </div>

                <div className="stage-item">
                  <div className="bar"></div>
                  <span>Build</span>
                </div>

                <div className="stage-item">
                  <div className="bar"></div>
                  <span>Launch</span>
                </div>
              </div>
            </div>

            <div>
            <h4 className="right-title">Deliverables</h4>
            <p className="deliverables">
              Summary of competitive insights covering persona generation, VoC,
              trend analysis, opportunity mapping, experimentation, journey
              optimization, and integration potential to inform roadmap,
              positioning, and strategic differentiation.
            </p></div>
            <h4 className="right-title">Who benefits from this?</h4>
            <p className="deliverables">CT Team</p>
            <h4 className="right-title">Applicability</h4>
            <p className="deliverables">Global</p>
          </div>
        </div>
      </div>
    </div>
  );
}
