import React, { useState } from "react";

const WebpageUploader = ({url, setUrl}) => {
	const uploadHandler = (e) => {
		setUrl(e.target[0].value);
		console.log(e.target[0].value);
		e.preventDefault();
	};

	return (
		<div className="flex flex-col gap-3 text-white p-3 px-5 items-center mb-4">
			<h1 className="text-3xl font-extrabold m-3 mx-4">
				Step 1: Upload your Link
			</h1>
			<input
				type="url"
				placeholder="https://example.com"
				pattern="https://.*"
				required
				value={url}
				onChange={e => setUrl(e.target.value)}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			></input>
		</div>
	);
};

export default WebpageUploader;
