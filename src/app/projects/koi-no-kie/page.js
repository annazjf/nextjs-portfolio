"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const KoiNoKieProject = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
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
            Koi no Kie App Interface Design
          </h1>
          <p className="text-xl text-[#ADB7BE] max-w-3xl">
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
              <h3 className="text-lg font-medium text-primary-400 mb-2">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "UI/UX Design", "Prototyping", "User Research", "Mobile Design"].map((tool) => (
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

export default KoiNoKieProject;