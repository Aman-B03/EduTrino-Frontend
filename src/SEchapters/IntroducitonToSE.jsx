import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const IntroducitonToSE = () => {
    const questionArray = [
        {
            "question": "Which of the following best describes a key goal of Software Engineering?",
            "options": [
              "To create software with minimal lines of code.",
              "To design and maintain software in a systematic, disciplined, and quantifiable manner.",
              "To write software without any bugs.",
              "To ensure that all software is written by a single developer."
            ],
            "correct": "To design and maintain software in a systematic, disciplined, and quantifiable manner.",
            "explain": "The primary goal of Software Engineering is to approach software development in a systematic and disciplined way, ensuring the software is efficient, reliable, and maintainable."
          },
          {
            "question": "In Software Engineering, the 'Waterfall Model' is best characterized as which type of process?",
            "options": [
              "Iterative",
              "Cyclical",
              "Linear and sequential",
              "Random and unstructured"
            ],
            "correct": "Linear and sequential",
            "explain": "The Waterfall Model follows a linear and sequential approach where each phase must be completed before moving to the next, unlike iterative models."
          },
          {
            "question": "Which software engineering principle helps to manage complexity by breaking down a system into smaller, manageable modules?",
            "options": [
              "Modularization",
              "Abstraction",
              "Encapsulation",
              "Concurrency"
            ],
            "correct": "Modularization",
            "explain": "Modularization involves dividing a complex system into smaller, independent modules, making it easier to design, develop, and maintain."
          },
          {
            "question": "Which of the following is an example of an Agile methodology used in Software Engineering?",
            "options": [
              "Scrum",
              "Waterfall",
              "V-Model",
              "RAD (Rapid Application Development)"
            ],
            "correct": "Scrum",
            "explain": "Scrum is a popular Agile methodology that emphasizes iterative development, where the project is divided into small cycles called sprints."
          },
          {
            "question": "Why is **software maintainability** an important aspect in Software Engineering?",
            "options": [
              "To reduce the time taken for initial software development.",
              "To ensure that the software can easily adapt to changes or be updated with new features over time.",
              "To increase the complexity of the software for future developers.",
              "To make sure that software is developed faster."
            ],
            "correct": "To ensure that the software can easily adapt to changes or be updated with new features over time.",
            "explain": "Maintainability refers to how easily software can be modified, whether for bug fixes, updates, or feature enhancements. It is crucial for long-term software success."
          },
          {
            "question": "What is the primary difference between **software development** and **software engineering**?",
            "options": [
              "Software development focuses on writing code, while software engineering involves a broader process including design, maintenance, and management.",
              "Software development involves testing, while software engineering skips testing.",
              "Software development is theoretical, while software engineering is entirely practical.",
              "Software development always uses Agile, while software engineering only uses Waterfall."
            ],
            "correct": "Software development focuses on writing code, while software engineering involves a broader process including design, maintenance, and management.",
            "explain": "Software engineering includes a comprehensive approach to the software lifecycle, including design, development, testing, and maintenance, while software development focuses more on writing code and building the product."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "How does Software Engineering improve the development process and ensure high-quality software products?",
            "answer": "Software Engineering improves the development process through systematic approaches that ensure high-quality software. It includes structured methodologies for analysis, design, coding, and testing, which minimize errors and enhance reliability. Key aspects include: <br><br> <b>1. Requirement Analysis:</b> Software engineers work closely with clients to gather clear and complete requirements, preventing miscommunication and ensuring that the software meets user needs.<br><b>2. Modularity:</b> A key principle in Software Engineering, modular design ensures that the system is broken down into smaller, manageable components, which are easier to develop, maintain, and troubleshoot.<br><b>3. Code Reusability:</b> The use of standardized practices allows for the development of reusable components, saving time and reducing costs for future projects.<br><b>4. Quality Assurance:</b> Software Engineering involves rigorous testing procedures that catch bugs early in the development lifecycle, ensuring that the final product is robust and efficient.<br><b>5. Scalability and Maintenance:</b> A structured approach ensures that the software can easily adapt to future needs and updates, reducing long-term maintenance issues."
          },
          {
            "no": "2",
            "question": "What are some real-world applications of Software Engineering, and how does it impact various industries?",
            "answer": "Software Engineering impacts a wide range of industries through the development of robust and scalable systems. Some real-world applications include: <br><br><b>1. Healthcare Systems:</b> Software Engineering is used to design systems that manage patient records, schedule appointments, and provide diagnostics support, improving the quality and efficiency of healthcare services.<br><b>2. E-commerce Platforms:</b> Online shopping websites and apps require complex systems to handle transactions, user data, and logistics efficiently, all designed using Software Engineering principles.<br><b>3. Financial Services:</b> In banking and finance, Software Engineering is used to create secure systems for online banking, fraud detection, and investment platforms, ensuring the safe handling of sensitive financial data.<br><b>4. Autonomous Vehicles:</b> Modern vehicles rely on advanced software for navigation, safety features, and self-driving technology, all developed through Software Engineering processes.<br><b>5. Entertainment and Media:</b> Streaming services, video games, and interactive media platforms are built using Software Engineering to manage large-scale content delivery and user interaction, ensuring smooth and seamless experiences."
          },
          {
            "no": "3",
            "question": "Why is modularity important in Software Engineering, and how does it contribute to better software design?",
            "answer": "Modularity is crucial in Software Engineering as it breaks down complex systems into smaller, manageable components or modules. This approach leads to better software design in several ways: <br><br> <b>1. Improved Maintainability:</b> Each module can be updated or maintained independently, reducing the risk of system-wide errors. <br> <b>2. Enhanced Reusability:</b> Modules can be reused across different projects, saving development time and effort. <br> <b>3. Easier Debugging:</b> Issues can be isolated to individual modules, making it easier to find and fix bugs. <br> <b>4. Collaboration:</b> Different teams can work on different modules simultaneously, speeding up the development process. <br> <b>5. Scalability:</b> Modular systems can be easily expanded by adding new modules without affecting the overall system."
          }
    ];


  return (
    <div>
      <QuestDisplay title="Software Engineering - Introduction to Software Engineering" question={questionArray} subjective={subjective} sub="SE" />
    </div>
  )
}

export default IntroducitonToSE
