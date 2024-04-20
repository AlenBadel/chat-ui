import { smallModel } from "$lib/server/models";
import type { Conversation } from "$lib/types/Conversation";

export async function generateFromDefaultEndpoint({
	messages,
	preprompt,
	generateSettings,
}: {
	messages: Omit<Conversation["messages"][0], "id">[];
	preprompt?: string;
	generateSettings?: Record<string, unknown>;
}): Promise<string | undefined> {
	try {
		const endpoint = await smallModel.getEndpoint();

		const tokenStream = await endpoint({ messages, preprompt, generateSettings });
		// Add a return statement here
		return "";
	} catch (error) {
		// Add a catch block here
		// Handle the error here
		throw error;
	}
}
