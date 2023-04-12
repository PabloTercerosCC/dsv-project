import { users } from '../db/users';

import type {PageServerLoad} from './$types'

const serializeNonPOJOs = (value: object | null) => {
    return structuredClone(value)
};

export const load: PageServerLoad = async function() {
	const data = await users.find().toArray();

	return {
		users: JSON.parse(JSON.stringify(data))
	}
}