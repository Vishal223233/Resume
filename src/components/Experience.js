import React from 'react';

const Experience = () => {
    return (
        <section>
            <h2>Professional Experience</h2>

            {/* ENSCO */}
            <h3>Software Developer - ENSCO</h3>
            <p>Charlottesville, VA | 06/2021 - Present</p>
            <ul>
                <li>
                    <strong>Full SDLC Ownership and Agile Leadership:</strong>
                    Led projects through every phase of the Software Development Life Cycle (SDLC) in a highly Agile environment. Took ownership from requirements gathering to deployment, working directly with stakeholders to adjust based on feedback. For the CWRSAFE and Federal Railroad applications, this involved needs assessments, project scoping, and overseeing deployments to ensure that applications met all user needs effectively.
                </li>

                <li>
                    <strong>Application Modernization and Java Migration:</strong>
                    Migrated the legacy codebase from Java 7 to Java 21, which included compatibility assessments, refactoring, and testing. This upgrade enhanced processing speeds by 30% and introduced improved security protocols. I utilized tools like VisualVM to analyze memory usage and identify bottlenecks, optimizing resource management and improving response times.
                </li>

                <li>
                    <strong>Redesign with WSDG 3.0 Standards:</strong>
                    Redesigned the CWRSAFE and Federal Railroad applications based on WSDG 3.0 standards, implementing a user-centered interface and ensuring compliance with US government accessibility standards. Refactoring the UI with Angular and Tailwind CSS led to a cleaner, responsive design, reducing user onboarding time by 20%.
                </li>

                <li>
                    <strong>Efficient ETL Workflows and Data Processing:</strong>
                    Leveraged Spring Batch to redesign and optimize ETL workflows for managing extensive datasets. Migrated legacy Kettle jobs to Spring Batch workflows, reducing execution time and improving data processing efficiency by 40%. Implemented custom error handling and logging to maintain data integrity even with high data throughput.
                </li>

                <li>
                    <strong>Optimizing Database Queries and Performance:</strong>
                    Used a query performance tool to analyze and optimize SQL queries in MySQL and MSSQL, identifying inefficiencies and implementing indexing strategies that improved response times by 25%. Worked closely with DBAs to tune complex queries, ensuring minimal impact on production databases.
                </li>

                <li>
                    <strong>API Development with Spring Boot:</strong>
                    Developed scalable RESTful APIs with Spring Boot, designed for high request volumes. Implemented caching with Redis and load balancing to optimize API performance, reducing latency and enabling faster data retrieval, directly enhancing user experience in data-heavy applications.
                </li>

                <li>
                    <strong>Integration of Asynchronous Messaging and Real-Time Communication:</strong>
                    Integrated RabbitMQ and gRPC for inter-service communication, enabling real-time data synchronization. RabbitMQ facilitated asynchronous messaging, allowing components to operate independently, while gRPC and Protocol Buffers streamlined data transfer, reducing latency and improving scalability.
                </li>

                <li>
                    <strong>Comprehensive Test Automation and CI/CD Pipeline Management:</strong>
                    Developed test suites using Selenium, JUnit, and Cucumber for functional, regression, and unit testing, reducing manual testing by 60%. Managed Jenkins pipelines for automated deployment, implementing automated testing at every pipeline stage to maintain deployment consistency and minimize downtime.
                </li>
            </ul>

            {/* SHAZAM Network */}
            <h3>Software Developer - SHAZAM Network</h3>
            <p>Charlotte, NC | 11/2020 - 05/2021</p>
            <ul>
                <li>
                    <strong>Microservices Transition for Enhanced Scalability and Reliability:</strong>
                    Contributed to migrating SHAZAM’s core banking applications from a monolithic to a microservices architecture, improving scalability and deployment speed. This transition allowed applications to handle higher transaction loads with lower latency and greater fault tolerance.
                </li>

                <li>
                    <strong>Development of Secure, High-Performance APIs:</strong>
                    Created and maintained RESTful APIs with Spring Boot for securely handling sensitive banking data, implementing role-based access controls and encryption. Optimized APIs to reduce response times by 15%, particularly valuable during peak transaction periods.
                </li>

                <li>
                    <strong>Advanced Front-End Development in Angular:</strong>
                    Developed interactive Angular components, ensuring data validation and implementing role-based access for secure user experiences. The interface provided users with a seamless experience for accessing accounts and conducting transactions.
                </li>

                <li>
                    <strong>Optimized Deployment Pipelines for Efficiency:</strong>
                    Designed and implemented CI/CD pipelines using Jenkins and Maven, automating the deployment process to improve consistency and reduce manual intervention by 50%. The pipeline enabled rapid response to security vulnerabilities and smooth releases.
                </li>

                <li>
                    <strong>Database Optimization for Banking Transactions:</strong>
                    Collaborated with DBAs to optimize MySQL queries, using indexing, caching, and query refinements for faster transaction processing. This enhancement improved application response time during peak banking hours.
                </li>
            </ul>

            {/* People Tech Group Inc */}
            <h3>Software Developer Intern - People Tech Group Inc</h3>
            <p>Hyderabad, India | 06/2018 - 06/2019</p>
            <ul>
                <li>
                    <strong>Building Microservices Architecture for IT Services Applications:</strong>
                    Designed and implemented microservices for People Tech’s applications using Spring Boot and Hibernate. This architecture allowed modularized service deployment, enabling the company to introduce new features without affecting existing services.
                </li>

                <li>
                    <strong>Interactive and Responsive Front-End Development:</strong>
                    Developed front-end layouts using HTML5, CSS3, and JavaScript, optimizing for responsiveness across devices. Tailored the front end for mobile compatibility, ensuring consistent user experiences.
                </li>

                <li>
                    <strong>Core Java Implementation for Complex Business Logic:</strong>
                    Utilized core Java concepts, including collections, exception handling, and multi-threading, to implement efficient backend processes. This experience was essential for managing complex data flows and ensuring accurate data processing.
                </li>

                <li>
                    <strong>API Development and Web Services Integration:</strong>
                    Designed RESTful APIs for JSON/XML data exchanges, enabling integration with third-party services. Applied HTTP methods to facilitate CRUD operations, ensuring secure and efficient data management.
                </li>

                <li>
                    <strong>Database Management and Query Optimization:</strong>
                    Managed and optimized MySQL databases, focusing on data integrity and retrieval efficiency. Developed complex SQL scripts, reducing query execution times to improve response times in data-intensive applications.
                </li>
            </ul>
        </section>
    );
}

export default Experience;
