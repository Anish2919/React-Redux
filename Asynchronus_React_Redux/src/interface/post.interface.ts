interface Post {
    userId: number, 
    id: number, 
    title:string, 
    body:string,
}

interface InitalState {
    loading: boolean, 
    error: string, 
    posts: [Post], 
    post: {}, 
} 