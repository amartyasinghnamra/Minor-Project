# Amartya: A Dataset-Driven Emotion Analyzer
### Department of Artificial Intelligence & Machine Learning (Session 2025-26)

Amartya is a sophisticated Natural Language Processing (NLP) application designed to identify and categorize complex human emotions in text. Moving beyond traditional binary sentiment analysis (Positive/Negative), this project utilizes fine-grained emotional categories inspired by the GoEmotions dataset.

## 🚀 Key Features

- **Live Emotion Analysis**: Real-time processing of text inputs using advanced NLP patterns.
- **Granular Classification**: Detects a wide spectrum of emotions including Joy, Sadness, Anger, Fear, Surprise, Love, and Optimism.
- **Probabilistic Distribution**: Visualizes emotion scores using interactive bar charts powered by Recharts.
- **AI Reasoning**: Provides explainable AI (XAI) insights into why specific emotions were detected.
- **Adaptive UI**: High-performance dashboard with persistent Light and Dark theme support.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **AI Engine**: Google Gemini 2.5 Flash (GenAI SDK)
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Theming**: Class-based dark mode with LocalStorage persistence

## 🧠 Methodology

The project follows a standard machine learning pipeline:
1. **Data Acquisition**: Utilizing the GoEmotions dataset framework.
2. **Preprocessing**: Tokenization, Stopword removal, and Stemming (Porter Stemmer).
3. **Feature Engineering**: TF-IDF (Term Frequency-Inverse Document Frequency) vectorization.
4. **Classification**: Stochastic Gradient Descent (SGD) based classifier for efficient multi-class prediction.
5. **Output**: Probability-calibrated emotional distribution.

## 👥 Project Team

- **Amartya Singh Namra** (Presenter - 0131CL231016)
- **Priyanshu Tiwari** (Team Member - 0131CL231070)
- **Saurabh Pandey** (Team Member - 0131CL2381)

**Under the Guidance of:**
**Ayonija Pathre**
Assistant Professor (AIML)

## 📖 How to Use

1. Navigate to the **Live Analyzer** section via the sidebar.
2. Enter any sentence or paragraph into the input area.
3. Click **Analyze Emotion**.
4. Review the top emotion, confidence score, and the visual distribution of related emotional states.

---
*Developed as part of the AIML Department Session 2025-26.*