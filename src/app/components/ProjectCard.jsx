import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link"

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl}) no-repeat center center/cover` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group- :flex group- :bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"   
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE]  :border-white group/link hidden md:flex"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group- /link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"   
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE]  :border-white group/link hidden md:flex"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group- /link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>
        <div className="block md:hidden flex gap-2">
          <a href={gitUrl} target="_blank" className="px-4 py-2 bg-slate-600  :bg-slate-900 rounded-full text-white">GitHub</a>
          <a href={previewUrl} target="_blank" className="px-4 py-2 bg-slate-600  :bg-slate-900 rounded-full text-white">Preview</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
