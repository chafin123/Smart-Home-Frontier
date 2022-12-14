import groq from 'groq'
import client from '../../client'
import Layout from '../../components/atoms/Layout'
import Card from '../../components/molecule/Card'

const Category = ({posts}) => {
  return (
    <Layout>
        <div>
            <h2 className='pt-4 sf-gradient text-2xl w-fit mx-auto'>{posts[0].catTitle[0]}</h2>
        </div>
        <div>
            {posts[0].description && <p className='pt-2 w-fit mx-auto'>{posts[0].description}</p>}
        </div>
        <div className='lg:flex flex-row flex-wrap'>
        {posts.length > 0 && posts.map(
            post =>
                <Card key={post._id} 
                    title={post.title}
                    tags={post.categories}
                    image={post.mainImage}
                    description={post.body[0].children[0].text.length < 100 ? post.body[0].children[0].text : post.body[0].children[0].text.slice(0, 101)}
                    slug={post.slug}
                />
                )

            }
        </div>
        

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[count((categories[]->slug.current)[@ in [{slug}]]) > 0].current`
  )
   console.log(paths)
  return {
    paths: paths.map((path) => ({params: {path}})),
    fallback: true,
    
  } 
}
const queryMaker = (slugger) => {
    const query = groq`*[_type == "post" && "${slugger}" in categories[]->slug.current ]{
    title,
    "categories": categories[]->slug.current,
    "description": *[type == document && slug.current == "${slugger}"].description,
    title,
    "catTitle":*[type == document && slug.current == "${slugger}"].title,
    "mainImage": mainImage.asset->url,
    "slug": slug.current,
    "id":_id,
    body
  }`
  console.log(query)
  return query
    
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const posts = await client.fetch(queryMaker(slug), { slug })
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}
export default Category