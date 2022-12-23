import groq from 'groq'
import Layout, { siteTitle } from '../components/atoms/Layout'
import client from '../client'
import styles from '../styles/Home.module.css'
import Card from '../components/molecule/Card';

const Index = ({posts}) => {
    return (
      <Layout home>
        <div>
          <div>
            <h2 className='sf-gradient text-2xl py-6 lg:w-6/12 lg:mx-auto lg:text-center' >Why a smart home?</h2>
          </div>
          <div>
            <p className='text-sf-dark-gray lg:text-center lg:w-8/12 lg:mx-auto'>Irure et do occaecat sit enim irure eu fugiat voluptate minim nulla. Reprehenderit duis non minim Lorem eiusmod velit. Veniam consequat excepteur nulla cupidatat dolor labore. Anim et ea occaecat sunt ullamco reprehenderit non ut amet exercitation ut. Aliquip ipsum do elit nisi velit. Officia dolor reprehenderit exercitation consectetur.</p>
          </div>
        </div>
        <div className='lg:flex flex-row flex-wrap'>
        {posts.length > 0 && posts.map(
          post =>
           (
              <Card key={post._id} 
                title={post.title}
                tags={post.categories}
                image={post.mainImage}
                description={post.body[0].children[0].text.length < 100 ? post.body[0].children[0].text : post.body[0].children[0].text.slice(0, 101)}
                slug={post.slug}
                imgPadding={post.imgPadding}
              />
            )
        )}
        </div>
      </Layout>
    )
}
const query = groq`*[_type == "post" && publishedAt < now()][0...9]{
  title,
  "categories": categories[]->slug.current,
  "mainImage": mainImage.asset->url,
  "slug": slug.current,
  "id":_id,
  body,
  imgPadding
}`

let lastId = ''

async function fetchNextPage() {
  if (lastId === null) {
    return []
  }
  const result = await fetch(
    groq`*[_type == "post" && _id > "051dbb4b-dba6-446d-8e9a-be46abac055a"] | order(_id) [0...10] {
      _id, title, body
    }`, {lastId})
  
  if (result?.length > 0) {
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  console.log(lastId)
  console.log(result)
  return result
}
export async function getStaticProps() {
    const posts = await client.fetch(query)
    return {
      props: {
        posts
      }
    }
}

export default Index