import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const SoftwarePhases = () => {

    const questionArray = [
        {
            "question": "Which SDLC phase would most likely involve creating a mock-up or prototype to visualize the system before full-scale development begins?",
            "options": [
              "System Design",
              "System Testing",
              "Feasibility Study",
              "System Implementation"
            ],
            "correct": "System Design",
            "explain": "During the System Design phase, creating prototypes or mock-ups helps stakeholders visualize how the final system will look and function, facilitating better feedback and adjustments before development."
          },
          {
            "question": "Why is it critical to involve end-users early in the **System Requirements & Analysis** phase?",
            "options": [
              "To ensure the system's design is technically feasible.",
              "To understand user needs and expectations for accurate requirement gathering.",
              "To begin coding the system's core functionalities.",
              "To finalize the project budget and timeline."
            ],
            "correct": "To understand user needs and expectations for accurate requirement gathering.",
            "explain": "Involving end-users early helps ensure that their needs and expectations are accurately captured, leading to a system that better meets user requirements and reduces costly changes later."
          },
          {
            "question": "What unexpected problem might arise if the **System Testing** phase is skipped or rushed?",
            "options": [
              "The system may lack user-friendly features.",
              "The project may exceed its budget.",
              "Undetected bugs could cause system failures or user dissatisfaction.",
              "The system may not be compatible with all operating systems."
            ],
            "correct": "Undetected bugs could cause system failures or user dissatisfaction.",
            "explain": "Skipping or rushing System Testing can result in unresolved bugs and issues, leading to system failures or user dissatisfaction due to unaddressed errors and defects."
          },
          {
            "question": "In the **Feasibility Study**, which factor is most critical to assess for ensuring the project's success?",
            "options": [
              "The number of developers available.",
              "The project's return on investment (ROI) and alignment with business goals.",
              "The preferred programming languages and tools.",
              "The length of the project's timeline."
            ],
            "correct": "The project's return on investment (ROI) and alignment with business goals.",
            "explain": "Assessing the ROI and alignment with business goals during the Feasibility Study ensures that the project will deliver value and meet the strategic objectives of the organization."
          },
          {
            "question": "How does **System Maintenance** impact the long-term success of a software application?",
            "options": [
              "It ensures the application remains compatible with evolving technologies and user needs.",
              "It speeds up the initial development process.",
              "It reduces the cost of system design.",
              "It simplifies the system's user interface."
            ],
            "correct": "It ensures the application remains compatible with evolving technologies and user needs.",
            "explain": "System Maintenance is crucial for adapting to technological changes and evolving user needs, ensuring the software continues to perform well and remain relevant over time."
          },
          {
            "question": "Which phase of SDLC would benefit most from the use of Agile methodologies for iterative development and feedback?",
            "options": [
              "System Implementation",
              "System Design",
              "System Requirements & Analysis",
              "Feasibility Study"
            ],
            "correct": "System Design",
            "explain": "Agile methodologies are particularly effective during System Design as they allow for iterative development and continuous feedback, improving design quality and adaptability to changes."
          },
          {
            "question": "What is a key difference in the approach to **System Development** between traditional Waterfall and modern Agile methodologies?",
            "options": [
              "Waterfall emphasizes iterative development while Agile follows a linear approach.",
              "Agile focuses on iterative development and continuous feedback, whereas Waterfall follows a sequential and rigid process.",
              "Waterfall requires more frequent user feedback than Agile.",
              "Agile does not involve testing until the final implementation phase."
            ],
            "correct": "Agile focuses on iterative development and continuous feedback, whereas Waterfall follows a sequential and rigid process.",
            "explain": "Agile methodologies prioritize iterative development and ongoing feedback, allowing for flexibility and adjustment throughout the process, while Waterfall follows a linear and fixed sequence of phases."
          },
          {
            "question": "What would be an immediate next step if a critical issue is discovered during the **System Testing** phase just before deployment?",
            "options": [
              "Proceed with deployment as scheduled.",
              "Ignore the issue if it is minor.",
              "Document the issue, fix it, and retest the system.",
              "Delay the project indefinitely until all issues are resolved."
            ],
            "correct": "Document the issue, fix it, and retest the system.",
            "explain": "Identifying and addressing critical issues during System Testing is essential. The issue should be documented, resolved, and retested to ensure it does not affect the system's performance or reliability before deployment."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Why is it critical to have a detailed System Requirements Specification (SRS) during the initial phases of software development, and how does its absence impact the entire SDLC?",
            "answer": "A detailed SRS ensures that all stakeholders have a clear understanding of the system's requirements and expectations. It serves as a foundation for design, development, and testing. Without an SRS, there can be miscommunication, leading to scope creep, delays, and increased costs. Key impacts include misalignment with client expectations, poor system design, and an overall decrease in product quality."
          },
          {
            "no": "2",
            "question": "What types of feasibility studies are essential before starting a project, and how do they each influence whether or not a project is pursued?",
            "answer": "Feasibility studies are conducted to assess whether a project is viable before significant resources are committed. The key types include:<br><br><b>1. Technical Feasibility:</b> Evaluates whether the required technology is available and capable of supporting the system.<br><b>2. Economic Feasibility:</b> Analyzes the cost-effectiveness of the project and whether the benefits outweigh the costs.<br><b>3. Legal Feasibility:</b> Checks if the system complies with legal requirements and regulations.<br><b>4. Operational Feasibility:</b> Determines whether the system can be successfully integrated into the organization's operations.<br><b>5. Schedule Feasibility:</b> Assesses whether the project can be completed within the timeframe."
          },
          {
            "no": "3",
            "question": "How does the transition from system design to system development act as a bridge between abstract ideas and actual functionality in the software development lifecycle?",
            "answer": "The transition from system design to development involves converting abstract system designs into executable code. This phase acts as a bridge by translating design models, such as data flow diagrams and entity-relationship diagrams, into a working system. Without a seamless transition, the project risks deviating from its initial goals, causing functionality issues or misalignment with the original system requirements."
          },
          {
            "no": "4",
            "question": "What are the key differences between black box testing and white box testing, and how do these differences impact their effectiveness in the software development lifecycle?",
            "answer": "<table style='border-collapse: collapse; width: 100%;'><tr><th style='border: 1px solid black; padding: 2px;'>Aspect</th><th style='border: 1px solid black; padding: 2px;'>Black Box Testing</th><th style='border: 1px solid black; padding: 2px;'>White Box Testing</th></tr><tr><td style='border: 1px solid black; padding: 2px;'>Definition</td><td style='border: 1px solid black; padding: 2px;'>Tests the functionality of an application without peeking into its internal code structure.</td><td style='border: 1px solid black; padding: 2px;'>Tests the internal structures or workings of an application, based on the knowledge of the code.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Focus</td><td style='border: 1px solid black; padding: 2px;'>Focuses on input-output verification, checking if the software meets user requirements.</td><td style='border: 1px solid black; padding: 2px;'>Focuses on the internal logic, code paths, and conditions.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Knowledge Required</td><td style='border: 1px solid black; padding: 2px;'>Does not require knowledge of the internal code structure.</td><td style='border: 1px solid black; padding: 2px;'>Requires detailed knowledge of the internal code and architecture.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Testing Level</td><td style='border: 1px solid black; padding: 2px;'>Typically used for functional testing and acceptance testing.</td><td style='border: 1px solid black; padding: 2px;'>Typically used for unit testing and integration testing.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Test Cases</td><td style='border: 1px solid black; padding: 2px;'>Test cases are derived from the functional specifications and requirements.</td><td style='border: 1px solid black; padding: 2px;'>Test cases are derived from the internal code and design specifications.</td></tr></table>"
          },
          {
            "no": "5",
            "question": "Describe the importance of system maintenance in the software development lifecycle and the common challenges faced during this phase.",
            "answer": "System maintenance is critical for ensuring that software remains functional and relevant after its initial deployment. This phase involves ongoing updates, bug fixes, and enhancements to adapt to changing user needs and technology. Common challenges include:<br><br><b>1. Bug Fixing:</b> Addressing issues that were not identified during the initial testing phase.<br><b>2. Enhancements:</b> Adding new features to meet evolving user requirements and business needs.<br><b>3. Compatibility:</b> Ensuring the system remains compatible with new hardware or software updates.<br><b>4. Security:</b> Implementing patches and updates to protect against new security threats.<br><b>5. Resource Management:</b> Allocating sufficient time and budget for ongoing maintenance activities."
          }
    ];

  return (
    <div>
      <QuestDisplay title="Software Engineering - Software Development Life Cycle" question={questionArray} subjective={subjective} sub="SE" />
    </div>
  )
}

export default SoftwarePhases
