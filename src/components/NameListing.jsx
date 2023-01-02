import React from "react";

export function NameListing(props) {
    return (
        <div className="flex justify-between px-1 py-3 md:px-4 md:py-4 text-gray-900">
            <h1 className="md:text-lg">
                { props.name }
            </h1>
            <h1 className="md:text-lg">
                { props.year }
            </h1>
        </div>
    );
}