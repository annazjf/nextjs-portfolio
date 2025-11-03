import Link from "next/link";

export const metadata = {
  title: "EV Car Market Data Analysis - SI330 | Annabel Zhuang Portfolio",
  description: "Data-driven analysis of electric vehicle market trends using advanced statistical methods and data science techniques to uncover consumer behavior patterns and market opportunities.",
};

export default function EVAnalysisPage() {
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
          EV Car Market Data Analysis
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
          A data-driven analysis of electric vehicle market using statistical methods
          and data science techniques to uncover consumer behavior patterns and market opportunities based on buyer demographics and price listed.
        </p>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Visualization"].map((tool) => (
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
            href="https://github.com/annazjf/EV-Car-Marke-Data-Analysis-SI-300"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
        
        {/* Project Overview */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Project Overview</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This project investigates how demographics influence spending behavior in the electric vehicle (EV) market, particularly for used EVs in California. Partnering with the fictional company INTU, the goal was to help used EV dealers optimize marketing strategies by identifying consumer groups more likely to purchase higher-priced EVs, supporting both business growth and broader EV adoption.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-gray-300">Data Sources:</span> Open Sourced EV Owner Demographics (California, 2019) with 27,000+ records and Used Car Listings from TrueCar.com with 1.2M listings filtered for California EVs.
            </p>
          </div>
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
                src="https://online.fliphtml5.com/riccr/ravi/" 
                seamless="seamless" 
                allowTransparency="true" 
                allowFullScreen="true"
                title="EV Car Market Data Analysis Report"
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
                <h4 className="font-semibold mb-2 text-primary-400">Demographics & Pricing Analysis</h4>
                <p className="text-gray-300">
                  Analyze the relationship between EV prices and buyer demographics such as income, education, and household size.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Consumer Segmentation</h4>
                <p className="text-gray-300">
                  Identify consumer segments most likely to invest in higher-value EVs for targeted marketing strategies.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Behavioral Insights</h4>
                <p className="text-gray-300">
                  Explore how environmental attitudes and first-time EV ownership influence purchase behavior.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Marketing Recommendations</h4>
                <p className="text-gray-300">
                  Provide marketing recommendations to help EV dealers target the right customer segments and promote sustainable transportation adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  High-income and well-educated households are more likely to purchase expensive EVs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  First-time EV buyers spend more regardless of income, suggesting strong commitment when entering the EV market.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Lower-education but high-income groups spend disproportionately more, possibly due to brand perception or luxury preference.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Environmental concern showed little correlation with EV spending, implying financial and lifestyle motivations outweigh environmental ones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Marketing Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Target first-time EV buyers through education-based campaigns emphasizing reliability and long-term savings.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Focus marketing on high-income households and professionals with advanced education.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Explore opportunities to reach aspirational buyers with moderate education but high income through luxury-oriented promotions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Reframe environmental messaging to align with status and technology appeal rather than eco-consciousness alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Work */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Future Work</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This analysis provides a foundational understanding of EV market demographics and spending patterns, establishing data-driven strategies for targeted marketing in the growing electric vehicle sector.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Future Directions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Expand to national EV ownership data for cross-state comparison</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Include fuel vehicle datasets to benchmark EV vs. non-EV behavior</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Incorporate new car market data for pricing differentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Conduct sentiment analysis on buyer attitudes toward EV adoption</span>
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