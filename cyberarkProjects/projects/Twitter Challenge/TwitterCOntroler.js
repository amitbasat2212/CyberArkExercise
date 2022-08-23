const TweitterRender = TwetterRenderModule();
const TwitterData = TwetterModule();
const posts = TwitterData.GetPosts();
TweitterRender.renderPosts(posts);
