OpenAI GPT-4 Article Summarizer
===============================

An open-source article summarizer engineered to transform lengthy articles into concise, high-impact summaries. This project leverages **GPT-4** orchestration through a modular React architecture to highlight core insights with precision.

<img width="1477" height="925" alt="project5" src="https://github.com/user-attachments/assets/c581bead-f34d-4006-8723-4bd0cd6844af" />


🚀 Overview
-----------

This web-based project uses RapidAPI's endpoint to break down long articles into clear and concise summaries, highlighting the most important points. It is designed for efficiency, utilizing modern data-fetching patterns to provide a seamless user experience.


🛠️ Tech Stack & Key Features
-----------------------------

*   **AI Integration:** Leverages the **RapidAPI GPT-4** endpoint for advanced natural language processing.
    
*   **State Management:** Implemented **RTK Query** for optimized data fetching, caching, and state synchronization.
    
*   **Modern UI:** A sleek, responsive interface built with **Tailwind CSS** featuring glassmorphism aesthetics.
    
*   **Persistence:** Local storage integration to maintain a historical log of processed summaries.
    

⚙️ Setup & Configuration
------------------------

To run this project, you must register at the RapidAPI website and select the Basic subscription for the required API:

1.  **API Access:** [Article Extractor and Summarizer API Pricing](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/pricing)
    
2.  **Environment Variables:** Create a .env file in the project root folder and add your key:
    

```
https://rapidapi.com/restyler/api/article-extractor-and-summarizer/pricing
```
then add .env file under project folder. File should look  like this:

```
VITE_RAPID_API_ARTICLE_KEY=your_key
```

🎓 Acknowledgments & Attribution
--------------------------------

This project was built following the architectural patterns and guidance provided by **Adrian Hajdin (JS Mastery)**.

### My Contributions:

*   **Implementation:** Completed the full-stack integration and environment configuration.
    
*   **Deployment:** Orchestrated the production build and hosted the application.


📜 License
--------------------------------

This project is licensed under the MIT License.
