import { toast } from "react-toastify";

export default function ErrorHandler(errors) {
	errors.forEach((error) => {
		toast.error(error);
	});
}
