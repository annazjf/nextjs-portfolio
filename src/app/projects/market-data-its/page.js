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

        {/* Objectives */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Impact Quantification</h4>
                <p className="text-gray-300">
                  Quantify the impact of marketing promotions on key metrics such as occupancy, bookings, and revenue using statistical analysis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Effectiveness Scoring</h4>
                <p className="text-gray-300">
                  Create a promotion effectiveness scoring model combining short-term lift and long-term retention metrics.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">External Factors</h4>
                <p className="text-gray-300">
                  Identify external demand drivers (e.g., flight arrivals) influencing booking trends and market dynamics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Strategic Recommendations</h4>
                <p className="text-gray-300">
                  Recommend strategies to reduce OTA dependency and improve return on marketing investment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights & Results */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Insights & Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Short-term promotions generated the strongest booking lift (+28%) while maintaining retention (1.99x).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  One OTA outperformed other OTAs, suggesting value in partnership diversification strategies.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Partnership campaigns appeared inflated due to data gaps; filtering clarified actual effectiveness.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  ITS modeling validated that shorter, deadline-driven promotions maximize returns and preserve higher-paying customers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Flight arrival trends closely correlated with booking spikes, offering predictive power for future demand forecasting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Strategic Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Shorten promotion windows for optimal revenue lift and customer retention.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Integrate flight and rate data into marketing mix models for predictive forecasting capabilities.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Develop customer identifiers to enable individualized marketing attribution and targeting.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Focus on agile, deadline-driven campaigns to capture demand efficiently and maximize ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Future Work */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Impact & Future Work</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The project established a quantitative foundation for the company&apos;s marketing strategy, enabling more efficient budget allocation and reduced OTA dependency through data-driven decision making.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Future Directions</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Integrating competitor rate data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Expanding to ML-based forecasting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Creating real-time tracking dashboard</span>
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
}