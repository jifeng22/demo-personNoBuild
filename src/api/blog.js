import request from './request';


export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    
    return await request.get('/api/blog', { //分页获取博客
        params: {
            page,
            limit,
            categoryid
        }
    })
}
export async function getBlogTypes() { //获取所有博客分类
    return await request.get('/api/blogtype')
}
 
//获取单个博客
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

export async function postComment (commentInfo) {
    return request.post('/api/comment', commentInfo)
} 
//分页获取评论
export async function getComments(page=1, limit=10, blogId=-1) {
    return await request.get('/api/comment', {
        params: {
            page,
            limit,
            blogId
        }
    })
}
