import React from "react";

export function NameListing(props) {
    return (
        <div className="flex justify-between px-4 py-4 text-gray-900">
            <h1 className="text-lg">
                { props.name }
            </h1>
            <h1 className="text-lg">
                { props.year }
            </h1>
        </div>
    );
}