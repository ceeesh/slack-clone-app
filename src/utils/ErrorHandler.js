import { toast } from "react-toastify";

export default function ErrorHandler(errors) {
	if (typeof errors === "string") {
		toast.error(errors);
	}

	errors.forEach((error) => {
		toast.error(error);
	});
}
