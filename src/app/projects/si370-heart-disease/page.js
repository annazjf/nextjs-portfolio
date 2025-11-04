"use client";
import React from "react";
import Link from "next/link";

const SI370HeartDiseaseProject = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Floating Back Button */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 bg-[#181818] hover:bg-primary-400 text-primary-400 hover:text-white p-3 rounded-full shadow-lg border border-gray-700 hover:border-primary-400 transition-all duration-300 group"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="sr-only">Back to Portfolio</span>
      </Link>
      
      {/* Header */}
      <div className="container mx-auto px-12 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Heart Disease Risk Factor Analysis
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
          Statistical analysis of heart disease risk factors to identify key predictors and inform clinical decision-making.
        </p>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {["Python", "Pandas", "Statsmodels", "Scikit-learn", "Linear Regression", "EDA", "Feature Engineering", "Predictive Modeling"].map((tool) => (
              <span 
                key={tool}
                className="px-3 py-1 bg-[#33353F] rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Spacer between Tools & Technologies and Project Overview */}
        <div className="h-4 md:h-6 lg:h-8" />

        {/* Project Overview */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Project Overview</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Heart disease remains the leading cause of death globally, with treatment costs exceeding $250 billion over three years (CDC). This project analyzed key patient risk factors—blood pressure, cholesterol, chest pain, and exercise metrics—to quantify their predictive power and guide clinical interventions.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-gray-300">Note:</span> All data used for this analysis is anonymized, publicly available data to ensure privacy and compliance.
            </p>
          </div>
        </div>

        {/* Interactive Report */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Interactive Analysis Report</h2>
          <p className="text-gray-300 mb-6 text-center">
            Click the &quot;+&quot; button to expand to full screen for the best viewing experience.
          </p>
          
          {/* FlipHTML5 Embed */}
          <div className="w-full">
            <div style={{position:"relative", paddingTop:"max(60%,324px)", width:"100%", height:"0"}}>
              <iframe 
                style={{position:"absolute", border:"none", width:"100%", height:"100%", left:"0", top:"0"}} 
                src="https://online.fliphtml5.com/riccr/imrl/" 
                seamless="seamless" 
                allowTransparency="true" 
                allowFullScreen="true"
                title="SI 370 Heart Disease Analysis Interactive Report"
              />
            </div>
          </div>
        </div>

        {/* Project Objectives */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Project Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Variable Prioritization</h4>
                <p className="text-gray-300">
                  Determine which of the key patient health metrics (Age, Cholesterol, RestingBP, MaxHR, Oldpeak) is the strongest single predictor of heart disease.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Statistical Modeling</h4>
                <p className="text-gray-300">
                  Applied Linear Regression to quantify individual variable strength and assess dataset quality for clinical insights.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Clinical Application</h4>
                <p className="text-gray-300">
                  Translate findings into actionable recommendations for healthcare professionals and public health policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights & Results */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Key Insights & Results</h2>
          <p className="text-gray-300 mb-4">
            Analysis revealed important insights about predictor strength and model limitations:
          </p>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Single Variable Limitation:</strong> Resting blood pressure alone showed weak predictive power (R² = 0.012), explaining only 1.2% of heart disease variability.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Multivariate Approach Required:</strong> Results indicated need for models incorporating multiple factors including cholesterol, chest pain type, and exercise metrics.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Model Type Optimization:</strong> Categorical variables like ChestPainType and ExerciseAngina showed potential as stronger predictors than continuous metrics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Strategic Recommendations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Classification Models:</strong> Implement Logistic Regression for binary heart disease prediction with probability interpretation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Data Balancing:</strong> Standardize sample sizes across risk factor groups to improve model stability.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Feature Engineering:</strong> Focus on categorical variables (ChestPainType, ST_Slope) for enhanced predictive power.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Clinical Integration:</strong> Translate insights into actionable intervention priorities for healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Future Work */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Impact & Future Work</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Established foundational understanding of variable relationships and identified clear pathway for building clinically actionable predictive models.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Future Directions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span><strong>Logistic Regression Implementation:</strong> Develop and test a full Logistic Regression model to calculate meaningful probabilities and interpret risk factors for classification.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span><strong>Enhanced Data Balancing:</strong> Implement data resampling techniques to ensure balanced representation across all blood pressure groups, strengthening the robustness of future models.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span><strong>Survival Analysis:</strong> Expand the model to include time-to-event analysis (e.g., survival analysis) to predict disease progression or mortality over time.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span><strong>Model Deployment:</strong> Develop a simple dashboard (e.g., using Power BI or Figma) for doctors to input patient parameters and receive a risk score.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating View More Projects Button */}
        <Link 
          href="/#projects" 
          className="fixed bottom-6 right-6 z-50 bg-[#181818] hover:bg-primary-400 text-primary-400 hover:text-white p-3 rounded-full shadow-lg border border-gray-700 hover:border-primary-400 transition-all duration-300 group"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span className="sr-only">View More Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default SI370HeartDiseaseProject;