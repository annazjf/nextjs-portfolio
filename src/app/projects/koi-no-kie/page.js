"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const KoiNoKieProject = () => {
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
      
      <div className="container mx-auto px-12 py-8">
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Koi no Kie App Interface Design
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Mobile app interface design for Koi no Kie featuring intuitive user experience, 
            modern UI patterns, clean navigation, and engaging visual design that enhances user interaction.
          </p>
        </div>

        {/* App Interface Preview - Full Width */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">App Interface Preview</h2>
          
          <div className="bg-[#181818] p-6 rounded-lg">
            <div className="w-full">
              <iframe 
                style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                width="100%" 
                height="600" 
                src="https://embed.figma.com/design/qnJzx8EqqGGn11gtEWEDfl/HW-6?node-id=0-1&embed-host=share" 
                allowFullScreen
                className="rounded"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-[#ADB7BE]">
              Interactive Figma prototype - Explore the app interface and user flow
            </p>
          </div>
        </div>

        {/* Project Overview - Full Width */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium text-primary-400 mb-2">Objective</h3>
              <p className="text-[#ADB7BE]">
                Design an intuitive and engaging mobile app interface for Koi no Kie 
                that provides seamless user experience, modern visual appeal, 
                and efficient navigation patterns for optimal user engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-primary-400 mb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "UI/UX Design", "Prototyping", "User Research", "Mobile Design", "Design Systems"].map((tool) => (
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
                <li>• Intuitive navigation system</li>
                <li>• Modern UI components</li>
                <li>• Responsive mobile design</li>
                <li>• Interactive user flows</li>
                <li>• Accessibility considerations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-primary-400 mb-2">Impact</h3>
              <p className="text-[#ADB7BE]">
                This app interface design showcases user-centered design principles, 
                creating an engaging mobile experience that balances functionality 
                with aesthetic appeal for enhanced user satisfaction and retention.
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

export default KoiNoKieProject;