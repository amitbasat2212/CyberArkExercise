const TwetterRenderModule=()=>{
    const renderPosts =(posts)=>{
        $('#posts').empty();
        for(let i=0;i<posts.length;i++){
            let Post = `<div class="allPost">
            <div id=${posts[i].id} class="postsPerPost">
            <div class="posttext"  data-id=${posts[i].id} >${posts[i].text} :</div>
            </div>
            </div>`
            $('#posts').append(Post)
            for(let j=0;j<posts[i].comments.length;j++){
                let comment = `<div class="comments>
                <div class="commentText" data-id=${posts[i].comments[j].id}>${posts[i].comments[j].text}:</div>
                </div>`
                $(`#${posts[i].id}`).append(comment)
            }            
        }
    }

    return {
        renderPosts :renderPosts 
    }
}

