import db from './mongo'

export const tasks = db.collection('tasks')