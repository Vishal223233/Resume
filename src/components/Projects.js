import React from 'react';

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>

            {/* Data Clustering & Transformation */}
            <h3>Data Clustering & Transformation</h3>
            <p>
                Leveraged Python’s data manipulation libraries, particularly <strong>Pandas</strong> and <strong>SciPy</strong>, to preprocess, clean, and transform extensive datasets. This project aimed to prepare the data for clustering analysis to extract actionable insights. The process involved removing outliers, handling missing values, and normalizing data to standardize input features. I employed clustering algorithms, such as K-Means and DBSCAN, to group similar data points based on their features.
            </p>
            <p>
                A significant challenge was optimizing the clustering process to manage large datasets without compromising accuracy. By fine-tuning algorithm parameters and implementing efficient data structures, I reduced computation time by 20%. The output clusters helped in identifying patterns and trends, providing valuable insights for further data analysis and supporting data-driven decision-making within the organization. This work resulted in more reliable clustering results, which significantly improved downstream machine learning models’ effectiveness.
            </p>

            {/* Housing Cost Prediction Model */}
            <h3>Housing Cost Prediction Model</h3>
            <p>
                Developed a machine learning model to predict housing costs, using <strong>Scikit-Learn</strong> and a variety of regression algorithms. This model aimed to provide accurate forecasts of housing prices based on factors like location, property size, number of rooms, and historical price data. I started by performing extensive exploratory data analysis (EDA) to understand the data distribution, correlations, and key influencing factors.
            </p>
            <p>
                The model used algorithms such as Linear Regression, Decision Trees, and Random Forest, with hyperparameter tuning to enhance accuracy. After training and testing multiple models, I achieved an accuracy of 85% with Random Forest, which proved to be the most suitable algorithm for this dataset. Model validation and regularization techniques were employed to reduce overfitting and ensure the model's generalizability to new data. This prediction model supported real estate stakeholders by enabling more informed decision-making regarding property investments and pricing strategies.
            </p>

            {/* Secure Data Transfer Application */}
            <h3>Secure Data Transfer Application</h3>
            <p>
                Designed and implemented a robust data transfer application to facilitate secure file exchanges within a highly regulated environment. This application leveraged <strong>encryption algorithms</strong> (AES-256) to ensure that data in transit remained protected against unauthorized access. I also implemented <strong>role-based access control (RBAC)</strong>, ensuring that only authorized users could initiate, access, and complete data transfers.
            </p>
            <p>
                The primary challenge was balancing security and performance, as the encryption process can be resource-intensive. By optimizing the encryption implementation and utilizing multi-threading, I reduced encryption and decryption times, maintaining high transfer speeds while securing sensitive information. The application was built with a microservices architecture, where separate services handled encryption, authentication, and data transfer tasks, ensuring modularity and scalability. This secure data transfer solution provided a reliable way to handle sensitive information, meeting stringent security standards and reducing the risk of data breaches.
            </p>
        </section>
    );
}

export default Projects;
