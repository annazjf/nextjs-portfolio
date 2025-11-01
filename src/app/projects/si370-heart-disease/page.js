"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const SI370HeartDiseaseProject = () => {

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header with Back Button */}
      <div className="container mx-auto px-12 py-8">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-primary-500 hover:text-primary-400 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Heart Disease Analysis Project SI370
          </h1>
          <p className="text-xl text-[#ADB7BE] max-w-3xl">
            A comprehensive analysis of heart disease datasets using Python and machine learning 
            techniques to identify key factors, trends, and predictive models for cardiovascular health.
          </p>
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
                <h3 className="text-lg font-medium text-primary-400 mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"].map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-[#33353F] rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
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
            <div className="mt-4 text-center">
              <p className="text-[#ADB7BE] text-sm">
                📖 Click and drag to flip pages • 🔍 Use zoom controls • 📱 Swipe on mobile
              </p>
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

        {/* Links Section */}
        <div className="mb-12 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://github.com/annazjf/Heart-Disease-Analysis-Project-SI370"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#33353F] hover:bg-[#454751] text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View GitHub Repository
            </a>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="text-center">
          <Link 
            href="/#projects" 
            className="inline-block bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SI370HeartDiseaseProject;