import React from "react";
import { CodeBracketIcon, EyeIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, type = "web" }) => {
  // Check if gitUrl is valid (not empty, not "/", and not just whitespace)
  const hasValidGitUrl = gitUrl && gitUrl.trim() !== "" && gitUrl !== "/";
  
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {type === "pdf" ? (
            // PDF Project Actions - Conditional GitHub & Preview
            <>
              {hasValidGitUrl && (
                <Link
                  href={gitUrl}
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  title="View GitHub Repository"
                >
                  <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
              )}
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                title="View Project Report"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            </>
          ) : type === "figma" ? (
            // Figma Project Actions - Conditional GitHub & Preview
            <>
              {hasValidGitUrl && (
                <Link
                  href={gitUrl}
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  title="View GitHub Repository"
                >
                  <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
              )}
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                title="View Design Project"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            </>
          ) : (
            // Regular Project Actions - Conditional GitHub & Preview
            <>
              {hasValidGitUrl && (
                <Link
                  href={gitUrl}
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  title="View GitHub Repository"
                >
                  <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
              )}
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                title="View Project"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
