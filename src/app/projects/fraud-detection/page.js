import Link from "next/link";

export const metadata = {
  title: "Shipment Fraud Detection Dashboard | Annabel Zhuang Portfolio",
  description: "Advanced fraud detection and visualization project built with Looker Studio to monitor high-volume shipping transactions, identify anomalies, and quantify fraud risk in global logistics.",
};

export default function FraudDetectionPage() {
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
          Shipment Fraud Detection Dashboard
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
          An advanced fraud detection and visualization project built with Looker Studio to monitor high-volume shipping transactions, identify anomalies, and quantify fraud risk in a global logistics context.
        </p>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {["Google Looker Studio", "Data Visualization", "KPI Monitoring", "Time-Series Analysis", "Geographic Analysis", "Data Analytics", "Dashboard Design"].map((tool) => (
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
          <h2 className="text-2xl font-bold mb-4 text-left">Project Overview</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This project aimed to establish a data-driven framework for risk mitigation by providing an intuitive, real-time-like dashboard to monitor shipping fraud. The core approach involved creating a comprehensive set of KPIs, trend analysis, and geographic visualizations to instantly spot anomalies that could indicate fraudulent activity.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-gray-300">Note:</span> All data presented in the dashboard is synthetic and was used solely for the purpose of demonstrating this project. No proprietary or company-specific information is included, maintaining strict confidentiality.
            </p>
          </div>
        </div>
        </div>

        {/* Interactive Dashboard */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Interactive Fraud Detection Dashboard</h2>
          <p className="text-gray-300 mb-6 text-center">
            Click the &quot;+&quot; button to expand to full screen for the best viewing experience.
          </p>
          
          {/* Interactive Flipbook Dashboard */}
          <div className="w-full">
            <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:'0'}}>
              <iframe 
                style={{position:'absolute', border:'none', width:'100%', height:'100%', left:'0', top:'0'}} 
                src="https://online.fliphtml5.com/riccr/nfhi/" 
                seamless="seamless" 
                allowTransparency="true" 
                allowFullScreen="true"
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
                <h4 className="font-semibold mb-2 text-primary-400">Risk Quantification</h4>
                <p className="text-gray-300">
                  Quantify the total volume, Fraud Flagged count (987 out of 5,252 total shipments), and the overall Fraud Ratio for rapid risk assessment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Trend Monitoring</h4>
                <p className="text-gray-300">
                  Visualize shipment volumes over time (Jan 1 to Jul 14) to detect unusual spikes or patterns indicative of coordinated fraud attempts.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Geographic Profiling</h4>
                <p className="text-gray-300">
                  Map the geographic distribution of transactions and fraud flags across 15 destination countries, focusing on global regions like ASIA and EUROPE to identify high-risk routes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Platform Analysis</h4>
                <p className="text-gray-300">
                  Analyze fraud activity broken down by Platform Type (Android, Web, iOS, XK) to pinpoint the origin of risk and guide security enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights & Results */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Key Insights & Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>International Risk:</strong> International shipments accounted for 37.6% of volume, with 13.6% specifically flagged as fraudulent, confirming higher risk for global logistics.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Volume Tracking:</strong> Successfully monitored 5,252 total shipments with 987 fraud-flagged transactions versus 1,639 clear records, establishing baseline risk metrics.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Anomaly Detection:</strong> Time-series charts effectively visualized daily transaction volumes, providing mechanisms to detect anomalous activity outside normal operating ranges.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Platform Risk Analysis:</strong> Isolated which transaction channels (Android, Web, iOS) contributed most significantly to fraud counts, guiding security resource allocation.
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
                  <strong>Geographic Focus:</strong> Prioritize additional security protocols and review processes for shipments in high-risk regions identified on the World Shipping Map.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Platform Hardening:</strong> Initiate security reviews and increased authentication for platform channels showing highest fraud rates relative to volume.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Alert Thresholds:</strong> Use historical time-series data to set automated thresholds for transaction volume spikes, triggering alerts when daily transactions exceed limits.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Anomaly Investigation:</strong> Utilize detailed transaction tables filtered by UUID and TransactionID for deep-dive investigations into high anomaly score records.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Future Work */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Impacts</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The Shipment Fraud Detection Dashboard provided the organization with an essential tool for risk management, shifting the fraud detection process from reactive manual reviews to proactive visual monitoring. It established a quantitative foundation for managing logistics security and reducing potential financial losses.
            </p>
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