import moment from 'moment';
import { Post } from './../../src/data/PostDatabase';
import PostDatabase from '../../src/data/PostDatabase'
import dotenv from 'dotenv'
dotenv.config()

describe('Test PostDatabase', () => {
    const postDatabase = new PostDatabase()

    afterEach(async () => {
        await postDatabase.deletePost('99b')
    })

    test('Create a post correctly', async () => {
        await postDatabase.createPost('99b', 'Post1_url', 'descrição 01', '2020-08-27 18:18:26', 'EVENT', '6b16dc83-1a73-4511-abf1-7af02315fd85')
        const postFromDb = await postDatabase.getPostById('99b')
        expect(postFromDb.description).toEqual('descrição 01')
        expect(postFromDb).not.toBe(undefined)

    })
})