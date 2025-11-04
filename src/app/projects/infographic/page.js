"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const InfographicProject = () => {

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
            Wine Infographic Design
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
            Educational infographic design showcasing grape wine varieties, taste profiles, 
            and wine characteristics through engaging visual storytelling and design to enhance wine appreciation.
          </p>

          {/* Tools & Technologies Section */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {["Adobe Illustrator", "Photoshop", "Color Theory", "Typography", "Visual Design", "Graphic Design"].map((tool) => (
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
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Project Overview</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Create an educational and visually appealing infographic that explains wine varieties, taste characteristics, and wine knowledge in an accessible and engaging format for wine enthusiasts and beginners.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Wine variety classifications (Red, Rosé, White)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Taste profile breakdown and descriptors</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Seasonal availability information</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Visual world map with wine consumption data</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Report */}
        <div className="bg-[#181818] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Interactive Wine Infographic</h2>
          <p className="text-gray-300 mb-6 text-center">
            Click the &quot;+&quot; button to expand to full screen for the best viewing experience.
          </p>
          
          {/* FlipHTML5 Embed */}
          <div className="w-full">
            <div style={{position:"relative", paddingTop:"max(60%,324px)", width:"100%", height:"0"}}>
              <iframe 
                style={{position:"absolute", border:"none", width:"100%", height:"100%", left:"0", top:"0"}} 
                src="https://online.fliphtml5.com/riccr/mpui/" 
                seamless="seamless" 
                allowTransparency="true" 
                allowFullScreen="true"
                title="Interactive Wine Infographic"
              />
            </div>
          </div>
        </div>
        {/* Design Elements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Design Elements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#181818] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary-400">Color Psychology</h3>
              <p className="text-[#ADB7BE] mb-4">
                This infographic demonstrates foundational wine information using direct complementary 
                 and contrast color. High contrast between red and green creates visual impact, while 
                lighter tones provide varieties.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#700A08'}} title="Dark Red - #700A08"></div>
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#B03A38'}} title="Medium Red - #B03A38"></div>
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#F08A89'}} title="Light Red - #F08A89"></div>
                  </div>
                  <span className="text-xs text-[#ADB7BE]">Red Wine Spectrum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#50C575'}} title="Medium Green - #50C575"></div>
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#087029'}} title="Dark Green - #087029"></div>
                  </div>
                  <span className="text-xs text-[#ADB7BE]">Complementary Green Accents</span>
                </div>
              </div>  
            </div>
            
            <div className="bg-[#181818] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary-400">Typography & Layout</h3>
              <p className="text-[#ADB7BE]">
                Clean, modern typography with elegant script elements for the main heading. 
                Information organized in clear sections with visual wine glass centerpiece 
                creating intuitive flow and professional presentation.
              </p>
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

export default InfographicProject;
