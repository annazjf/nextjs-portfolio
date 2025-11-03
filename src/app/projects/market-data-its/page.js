import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Market Data ITS Analysis - SI485 | Annabel Zhuang Portfolio",
  description: "Interrupted Time Series analysis for a partner company to optimize marketing spend and reduce OTA dependency in Singapore's competitive hospitality sector.",
};

export default function MarketDataITSPage() {
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
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Market Data ITS Analysis
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
          An Interrupted Time Series (ITS) analysis for a partner company to optimize marketing spend 
          and reduce dependency on Online Travel Agencies (OTAs) in Singapore&apos;s competitive hospitality sector.
        </p>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          {/* <h2 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h2> */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {["Python", "Polars", "Seaborn", "Matplotlib", "PyArrow", "Statsmodels", "Azure Data Lake", "Great Lakes HPC", "Figma"].map((tool) => (
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

        {/* Project Overview */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Project Overview</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This project aim to provide a a data-driven framework to evaluate promotional effectiveness and optimize spend across channels. The approach is using interrupted time series (ITS) analysis and exploratory research to quantify how
              promotions impact key metrics like occupancy and bookings. By analyzing historical booking data, 
              campaign timelines, and external factors (e.g., flight arrivals), we identified actionable strategies 
              to improve promotion effectiveness which saves marketing costs.
            </p>
            <p className="text-gray-400 text-sm text">
            <span className="font-medium text-gray-300">Note:</span> Due to data sensitivity and proprietary business information, 
            some key metrics and detailed findings have been generalized to comply with confidentiality agreements.
            </p>
            </div>
            </div>
        </div>

        {/* Research Poster */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <Image
                src="/images/projects/Market-ITS-Analysis.jpg"
                width={1200}
                height={800}
                className="rounded-lg w-full h-auto shadow-lg border border-gray-700" 
                alt="Far East Hospitality ITS Analysis Research Poster - SI485 Capstone Project"
                priority
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center mt-4">
             (Some sensitive data has been covered)
          </p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-400">Research Methods</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Interrupted Time Series (ITS) Analysis</li>
              <li>• Exploratory Data Analysis (EDA)</li>
              <li>• Time Series Regression Modeling</li>
              <li>• Promotional Effectiveness Scoring</li>
              <li>• External Factor Integration</li>
              <li>• Statistical Significance Testing</li>
            </ul>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-400">Key Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <span className="font-semibold">Polars</span> - High-performance data manipulation</li>
              <li>• <span className="font-semibold">Seaborn & Matplotlib</span> - Statistical visualization</li>
              <li>• <span className="font-semibold">PyArrow</span> - Efficient data processing</li>
              <li>• <span className="font-semibold">Statsmodels</span> - Time series regression analysis</li>
              <li>• <span className="font-semibold">Azure Data Lake</span> - Cloud data storage</li>
              <li>• <span className="font-semibold">Great Lakes</span> - High-performance computing cluster</li>
              <li>• <span className="font-semibold">Figma</span> - Research poster design & presentation</li>
              <li>• <span className="font-semibold">Python</span> - Statistical analysis & modeling</li>
            </ul>
          </div>

          <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-400">Business Impact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Reduced OTA dependency strategies</li>
              <li>• Marketing cost optimization</li>
              <li>• Data-driven promotional framework</li>
              <li>• Revenue enhancement opportunities</li>
              <li>• Competitive advantage insights</li>
              <li>• Strategic decision support</li>
            </ul>
          </div>

          <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-400">Project Scope</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Multi-year historical data analysis</li>
              <li>• Cross-channel performance evaluation</li>
              <li>• External factor correlation study</li>
              <li>• Promotional timeline mapping</li>
              <li>• Occupancy & booking trend analysis</li>
              <li>• Strategic recommendations development</li>
            </ul>
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
}