import { tasks } from '../db/tasks';

import type {PageServerLoad} from './$types'

const serializeNonPOJOs = (value: object | null) => {
    return structuredClone(value)
};

export const load: PageServerLoad = async function() {
	const data = await tasks.find().toArray();

	return {
		tasks: JSON.parse(JSON.stringify(data))
	}
}