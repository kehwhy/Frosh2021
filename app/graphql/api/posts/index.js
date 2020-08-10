const db = require('../../database/mysql')
const { errorHandler } = require('../utils')



module.exports ={
    getPost: async (id) =>

    await db    
        .select('*')
        .from('blog_posts')
        .where({id})
        .catch(errorHandler),

    getPosts: async (type, category_id) =>
    {
        let qry = db.select(
            'blog_posts.id',
            'blog_posts.description',
            'blog_posts.author_id',
            'title',
            'image',
            'created_at',
            'updated_at',
            db.raw('GROUP_CONCAT(label() as categories')
            
        )
    
        
    }
}