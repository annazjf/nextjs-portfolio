"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon } from "@heroicons/react/24/outline";

const InfographicProject = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  
  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };

  const resetZoom = () => {
    setZoomLevel(100);
  };

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
            Wine Infographic Design
          </h1>
          <p className="text-xl text-[#ADB7BE] max-w-3xl">
            Educational infographic design showcasing grape wine varieties, taste profiles, 
            and wine characteristics through engaging visual storytelling and design.
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
                  Create an educational and visually appealing infographic that explains 
                  wine varieties, taste characteristics, and wine knowledge in an 
                  accessible and engaging format for wine enthusiasts and beginners.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary-400 mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {["Adobe Illustrator", "Photoshop", "Color Theory", "Typography"].map((tool) => (
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
                <h3 className="text-lg font-medium text-primary-400 mb-2">Key Features</h3>
                <ul className="text-[#ADB7BE] space-y-2">
                  <li>• Wine variety classifications (Red, Rosé, White)</li>
                  <li>• Taste profile breakdown and descriptors</li>
                  <li>• Seasonal availability information</li>
                  <li>• Caloric content and nutritional facts</li>
                  <li>• Visual wine glass illustration with taste mapping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary-400 mb-2">Impact</h3>
                <p className="text-[#ADB7BE]">
                  This educational wine infographic serves as a comprehensive guide 
                  for wine enthusiasts and beginners, breaking down complex wine 
                  knowledge into digestible visual elements that enhance wine 
                  appreciation and selection confidence.
                </p>
              </div>
            </div>
          </div>

          {/* PDF Viewer with Zoom */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">View Infographic</h2>
              <div className="flex items-center gap-4">
                <span className="text-[#ADB7BE] text-sm">
                  Zoom: {zoomLevel}%
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel <= 50}
                    className="p-2 rounded-lg bg-[#33353F] hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Zoom out"
                  >
                    <MagnifyingGlassMinusIcon className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="px-3 py-2 text-sm rounded-lg bg-[#33353F] hover:bg-primary-600 transition-colors text-white"
                    title="Reset zoom"
                  >
                    Reset
                  </button>
                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel >= 200}
                    className="p-2 rounded-lg bg-[#33353F] hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Zoom in"
                  >
                    <MagnifyingGlassPlusIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#181818] p-4 rounded-lg overflow-auto">
              <div 
                className="transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: 'top left'
                }}
              >
                <iframe
                  src="/projects/data-infographic.pdf"
                  className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded"
                  title="Wine Infographic Design"
                />
              </div>
            </div>
            
            {/* Zoom Controls - Bottom */}
            <div className="mt-4 flex justify-center items-center gap-4">
              <button
                onClick={() => setZoomLevel(50)}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  zoomLevel === 50 ? 'bg-primary-500 text-white' : 'bg-[#33353F] text-[#ADB7BE] hover:bg-[#ADB7BE] hover:text-black'
                }`}
              >
                50%
              </button>
              <button
                onClick={() => setZoomLevel(75)}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  zoomLevel === 75 ? 'bg-primary-500 text-white' : 'bg-[#33353F] text-[#ADB7BE] hover:bg-[#ADB7BE] hover:text-black'
                }`}
              >
                75%
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  zoomLevel === 100 ? 'bg-primary-500 text-white' : 'bg-[#33353F] text-[#ADB7BE] hover:bg-[#ADB7BE] hover:text-black'
                }`}
              >
                100%
              </button>
              <button
                onClick={() => setZoomLevel(125)}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  zoomLevel === 125 ? 'bg-primary-500 text-white' : 'bg-[#33353F] text-[#ADB7BE] hover:bg-[#ADB7BE] hover:text-black'
                }`}
              >
                125%
              </button>
              <button
                onClick={() => setZoomLevel(150)}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  zoomLevel === 150 ? 'bg-primary-500 text-white' : 'bg-[#33353F] text-[#ADB7BE] hover:bg-[#ADB7BE] hover:text-black'
                }`}
              >
                150%
              </button>
            </div>
          </div>
        </div>
        {/* Design Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Design Elements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#181818] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary-400">Color Psychology</h3>
              <p className="text-[#ADB7BE] mb-4">
                Strategic use of burgundy, rose, and neutral tones to represent wine varieties 
                while maintaining sophisticated, wine-industry appropriate aesthetics.
              </p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#8B1538'}} title="Red Wine"></div>
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#C85A54'}} title="Rosé Wine"></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#C85A54]" title="White Wine"></div>
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

export default InfographicProject;
