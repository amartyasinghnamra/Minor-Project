# A Dataset-Driven Emotion Analyzer

**Department of Artificial Intelligence & Machine Learning**  
**Session 2025-26**

---

## 📝 Introduction
**A Dataset-Driven Emotion Analyzer** is a computational study focused on identifying and categorizing emotions expressed in text data using Natural Language Processing (NLP). Unlike traditional sentiment analysis, which focuses on binary polarity (Positive/Negative), Amartya dives into the nuanced spectrum of human communication to enable more effective human-computer interaction.

### Applications:
*   Customer service optimization
*   Mental health monitoring
*   Social media analysis
*   Nuanced human-computer interfaces

## 🚩 Problem Statement
Traditional systems often fail to capture the complexity of human emotion.
*   **Need for Nuance**: Binary analysis misses emotions like sarcasm, fear, or surprise.
*   **Context & Multi-labeling**: Most systems struggle with context and multi-label emotion detection.
*   **Interpretablity**: There is a significant need for efficient and interpretable emotion detection systems in practical applications.

## 🎯 Project Objectives
*   **Build a Multi-class Classifier**: Capable of detecting fine-grained emotional states.
*   **Robust Preprocessing**: Implement a comprehensive pipeline for text normalization.
*   **Efficient Vectorization**: Utilize TF-IDF combined with Stochastic Gradient Descent (SGD) models.
*   **High Performance**: Achieve high accuracy across diverse text samples.
*   **Explainability**: Create an interpretable system with probability-based predictions.

## ⚙️ Methodology & System Design
The system follows a lightweight, efficient pipeline combining classical NLP with modern Machine Learning:

1.  **Dataset**: GoEmotions (Large-scale dataset with 345+ emotion categories).
2.  **Data Cleaning**: Splitting text into words, removing noise, and simplifying vocabulary.
3.  **NLP Preprocessing**:
    *   **Tokenization**: Breaking text into individual units.
    *   **Stopword Removal**: Eliminating common words with little semantic value.
    *   **Stemming**: Reducing words to their root form using the **Porter Stemmer**.
4.  **Text Vectorization**: Converting text to numerical features weighted by importance via **TF-IDF**.
5.  **Model Training**: Using an **SGDClassifier** for efficient training and high-dimensional sparse data handling.
6.  **Probability Calibration**: Utilizing **CalibratedClassifierCV** for reliable confidence scores.

## 🛠️ Technologies Used
*   **Language**: Python 3.x
*   **Libraries**: NLTK, Scikit-Learn, Pandas, NumPy
*   **ML Components**: TF-IDF Vectorizer, SGDClassifier, CalibratedClassifierCV
*   **Frontend**: React 19 (for the Live Dashboard), Tailwind CSS, Recharts

## 📊 Results & Output
*   **Accuracy**: High classification accuracy achieved on the test set.
*   **Precision & Recall**: Balanced performance across diverse emotion categories.
*   **Interpretable Results**: Real-time processing providing top emotion and confidence scores.
## Screenshots
<img width="1427" height="747" alt="Screenshot from 2025-12-18 10-23-32" src="https://github.com/user-attachments/assets/bc216cfb-fde6-460e-a6a3-fe8d15a86228" />
<img width="1427" height="747" alt="Screenshot from 2025-12-18 10-23-45" src="https://github.com/user-attachments/assets/3b68e01c-6b9d-4ae4-a7a6-327e378742e3" />
<img width="1427" height="747" alt="Screenshot from 2025-12-18 10-24-10" src="https://github.com/user-attachments/assets/33dacaea-6bea-4f47-a3ee-ed44fbcd8f0a" />

<img width="1427" height="747" alt="Screenshot from 2025-12-18 10-24-38" src="https://github.com/user-attachments/assets/27e4f307-f476-4b08-904e-467e6a342938" />


## 🚀 Future Scope
*   **Deep Learning**: Integration of LSTM and Transformer-based models (BERT, RoBERTa).
*   **Rest API**: Deployment as a service for real-time application integration.
*   **Multi-Language**: Extending support to diverse linguistic datasets.
*   **Cloud Deployment**: Scaling via AWS/Azure/GCP for high-volume processing.

## 👥 Project Team
*   **Amartya Singh Namra** (Presenter) - *0131CL231016*
*   **Priyanshu Tiwari** (Member) - *0131CL231070*
*   **Saurabh Pandey** (Member) - *0131CL2381*

**Guided By / HOD:**
**Ayonija Pathre**  
Assistant Professor (AIML)

---
*Demszky et al., "GoEmotions: A Dataset of Fine-Grained Emotions", ACL 2020.*
### Test here: https://acesse.one/minorProject-TeamHumas
