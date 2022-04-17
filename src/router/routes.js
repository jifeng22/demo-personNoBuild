import {done, start, configure} from 'nprogress'
import NotFound from '@/components/NotFound'

configure({
  showSpinner: null,
  trickleSpeed: 20
})

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}
function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
} 
export default [{
  name: "Home",
  path: '/',
  component: getPageComponent(() => import(/* webpackChunkName: "home" */'@/views/Home')),
  meta: {
    title: '首页'
  }
},
{
  name: "Blog",
  path: '/blog',
  component: getPageComponent(() =>import(/* webpackChunkName: "Blog" */'@/views/Blog')),
  meta: {
    title: '文章'
  }
},
{
  name: "CategoryBlog",
  path: '/blog/cate/:categoryId',
  component: getPageComponent(() => import(/* webpackChunkName: "CategoryBlog" */'@/views/Blog')),
  meta: {
    title: '博客分类'
  }
},
{
  name: "BlogDetail",
  path: '/blog/detail/:id',
  component: getPageComponent(() => import(/* webpackChunkName: "BlogDetail" */'@/views/Blog/Detail')),
  meta: {
    title: '博客详情'
  }
},
{
  name: "Project",
  path: '/project',
  component: getPageComponent(() => import(/* webpackChunkName: "Project" */'@/views/Project')),
  meta: {
    title: '项目&i效果'
  }
},
{
  name: "About",
  path: '/about',
  component: getPageComponent(() => import(/* webpackChunkName: "About" */'@/views/About')),
  meta: {
    title: '关于我'
  }
},
{
  name: "Message",
  path: '/message',
  component: getPageComponent(() => import(/* webpackChunkName: "Message" */'@/views/Message')),
  meta: {
    title: '留言板'
  }
},
{
  name: 'BlogComment',
  path: '/blog/detail/:id',
  component: getPageComponent(() => import(/* webpackChunkName: "Message" */'@/views/Blog/Detail')),
},
{
  path: '*',
  component: NotFound
}
]