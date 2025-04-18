import React from "react";
import { MEDIA_TYPES } from "../utils/utils";

const MediaTypeDropdown = ({ selectedType, onChange }) => {
    return (
        <div className="dropdown-container w-full">
            <select
                id="resource_type"
                name="resource_type"
                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                value={selectedType || ""}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="" disabled>
                    Select Resource Type
                </option>
                {Object.entries(MEDIA_TYPES).map(([label, value]) => (
                    <option key={value} value={value}>
                        {label.replaceAll('_', ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MediaTypeDropdown;