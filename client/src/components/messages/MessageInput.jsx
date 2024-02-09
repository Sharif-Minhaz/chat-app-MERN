import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
	const { loading, sendMessage } = useSendMessage();
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="px-4 my-3" onSubmit={handleSubmit}>
			<div className="w-full relative">
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
					placeholder="Send a message"
				/>
				<button
					disabled={loading || !message}
					type="submit"
					className="absolute disabled:cursor-not-allowed inset-y-0 end-0 flex items-center pe-3"
				>
					{loading ? <span className="loading loading-spinner"></span> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;
