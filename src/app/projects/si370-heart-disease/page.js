"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

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
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Heart Disease Analysis Project SI370
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            A comprehensive analysis of heart disease datasets using Python and machine learning 
            techniques to identify key factors, trends, and predictive models for cardiovascular health.
          </p>

          {/* Tools & Technologies Section */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook", "Machine Learning", "Statistical Analysis"].map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1 bg-[#33353F] rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          {/* Spacer between Tools & Technologies and Project Overview */}
          <div className="h-4 md:h-6 lg:h-8" />

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://github.com/annazjf/Heart-Disease-Analysis-Project-SI370"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Repository
            </a>
          </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary-400 mb-2">Objective</h3>
                <p className="text-[#ADB7BE]">
                  Analyze heart disease datasets to identify key risk factors, develop predictive models, 
                  and provide insights into cardiovascular health trends using data science methodologies 
                  and machine learning algorithms.
                </p>
              </div>



              <div>
                <h3 className="text-lg font-medium text-primary-400 mb-2">Key Analysis Areas</h3>
                <ul className="text-[#ADB7BE] space-y-2">
                  <li>• Exploratory Data Analysis (EDA)</li>
                  <li>• Feature correlation and selection</li>
                  <li>• Machine learning model development</li>
                  <li>• Risk factor identification</li>
                  <li>• Predictive accuracy evaluation</li>
                  <li>• Data visualization and insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Report Display */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Interactive Project Report</h2>
              <p className="text-[#ADB7BE] text-sm mt-2">
                Flip through the complete data science analysis report
              </p>
            </div>
            
            {/* FlipHTML5 Embed */}
            <div className="bg-[#181818] p-4 rounded-lg">
              <div 
                style={{
                  position: "relative",
                  paddingTop: "max(60%, 324px)",
                  width: "100%",
                  height: 0
                }}
              >
                <iframe 
                  style={{
                    position: "absolute",
                    border: "none",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0
                  }}
                  src="https://online.fliphtml5.com/riccr/imrl/"
                  seamless="seamless"
                  allowTransparency="true"
                  allowFullScreen="true"
                  title="SI 370 Heart Disease Analysis Interactive Report"
                />
              </div>
            </div>
            
            {/* Interaction Guide */}
            <div className="mt-4 text-left">
              <div className="text-[#ADB7BE] text-sm space-y-1">
                <p>🔍 Use built-in zoom &quot;+&quot; icon on the bottom left corner</p>
                <p>📱 Swipe on mobile</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Analysis Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Analysis Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#181818] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary-400">Data Science Methodology</h3>
              <p className="text-[#ADB7BE] mb-4">
                Applied systematic data science workflow including data cleaning, exploratory analysis, 
                feature engineering, model selection, and performance evaluation using industry-standard 
                Python libraries and statistical techniques.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">EDA</div>
                <div className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs">ML Models</div>
                <div className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Statistics</div>
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