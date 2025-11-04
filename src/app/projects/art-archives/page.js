import Link from "next/link";

export const metadata = {
  title: "Uncovering Art History: Web Scraping Archives | Annabel Zhuang Portfolio",
  description: "Web scraping and text analysis project with Archives of American Art. Used machine learning and NLP to uncover citation patterns in digital art scholarship.",
};

export default function ArtArchivesPage() {
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
          Uncovering Art History: Web Scraping Archives
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
          This project focuses on uncovering citation patterns in digital art scholarship using web scraping, machine learning, and natural language processing.
        </p>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          {/* <h2 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h2> */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {["Python", "Selenium", "BeautifulSoup", "Requests", "Pandas", "SentenceTransformer", "NLP", "Machine Learning", "Web Scraping", "Cosine Similarity", "Matplotlib"].map((tool) => (
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
              This project, conducted in collaboration with the Archives of American Art, aimed to uncover how the organization&apos;s collections and journal articles are cited across online repositories. By combining web scraping, text analysis, and natural language processing, we created a dataset of digital citations that provides insight into how researchers engage with the organization&apos;s resources.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-gray-300">Note:</span> Some sensitive information is hidden in the documentation to protect data privacy.
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
                src="https://online.fliphtml5.com/riccr/ctqw/" 
                seamless="seamless" 
                allowTransparency="true" 
                allowFullScreen="true"
                title="Art Archives Web Scraping Project Documentation"
              />
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Methodology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Web Scraping</h4>
                <p className="text-gray-300">
                  Automated extraction of metadata and snippets mentioning Archives of American Art collections and journals using Python scripts.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Data Processing</h4>
                <p className="text-gray-300">
                  Structured datasets were created (collection_title_counts.csv, snippets_with_title.csv, etc.) containing publication titles, authors, publishers, and snippet text.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Similarity Modeling</h4>
                <p className="text-gray-300">
                  Used sentence embeddings and cosine similarity to link snippets to the most relevant Archives of American Art collection titles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Aggregation and Visualization</h4>
                <p className="text-gray-300">
                  Counted occurrences and unique mentions of each collection across publications, visualizing top-referenced collections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-left">Key Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Successfully compiled datasets linking Archives of American Art collection titles to thousands of online publications.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Implemented a semantic matching model that improved citation detection beyond simple keyword search, capturing non-standard references.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Generated insights into which art collections and exhibitions were most cited, informing future curatorial and research strategies.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Produced reproducible documentation and scripts, allowing the organization to extend the scraping framework to other repositories.
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
              The project enhanced understanding of the Archives of American Art&apos;s digital footprint in art scholarship and laid groundwork for broader bibliometric analysis across museum archives.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Future Directions</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Integrating Google Scholar citations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Refining similarity thresholds for higher precision</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <span>Expanding to other art institutions</span>
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