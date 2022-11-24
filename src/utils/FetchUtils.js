import ErrorHandler from "./ErrorHandler";

const FetchUtils = async (url, method, data) => {
	try {
		const APIurl = "http://206.189.91.54/api/v1" + url;
		const config = {
			method: method,
			headers: { "Content-Type": "application/json" },
			body: data ? JSON.stringify(data) : null,
		};

		const res = await fetch(APIurl, config);

		if (res.status !== 200) {
			const errors = await res.json();
			ErrorHandler(errors.errors.full_messages || errors.errors);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.log(error);
	}
};

export default FetchUtils;
