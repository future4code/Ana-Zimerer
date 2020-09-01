import BaseDatabase from "./BaseDatabase";

export interface Post {
    postId: string,
    urlPhoto: string,
    description: string,
    creationDate: string,
    type: string,
    userCreatorId: string
}
export default class PostsDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_post";

    public async createPost(
        postId: string,
        urlPhoto: string,
        description: string,
        creationDate: string,
        type: string,
        userCreatorId: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                post_id: postId,
                url_photo: urlPhoto,
                description: description,
                creation_date: creationDate,
                type: type,
                user_creator_id: userCreatorId,
            })
            .into(PostsDatabase.TABLE_NAME);
        await BaseDatabase.destroyConnection();
    }

    public async deletePost(id: string) {
        await this.getConnection()
            .select()
            .from(PostsDatabase.TABLE_NAME)
            .where(id);
        await BaseDatabase.destroyConnection();
    }

    public async getPostById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select()
            .where(id)
            .from(PostsDatabase.TABLE_NAME)

        return result
        await BaseDatabase.destroyConnection();
    }
}
