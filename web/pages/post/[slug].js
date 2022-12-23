import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import styles from '../../styles/Card.module.css'
import Layout from '../../components/atoms/Layout'
import Link from 'next/link'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->slug.current,
  "authorImage": author->image,
  "mainImage": mainImage.asset->url,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  console.log(client);
  console.log(paths);
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  let post =  null; 
  const { slug = "" } = context.params
  try {
    post = await client.fetch(query, { slug })
    console.log(post)
  } catch (err) { };
  return {
    props: {
      post
    }
  }
}

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    body = []
  } = post
  if(post)return (
    <Layout post>
      <article className='pt-10 mx-auto w-fit'>
        <h1 className='text-4xl pb-1 sf-gradient'>{title}</h1>
        <span>By {name}</span>

        {mainImage && (
          <div>
            <img
              src={urlFor(mainImage)
                .width(400)
                .url()}
                alt={`${name}'s picture`}
                className="rounded-sm pb-6 pt-3"
            />
          </div>
        )}
        <div className='w-full text-center'>
          <PortableText
            value={body}
            components={ptComponents}
          />
        </div>
              {categories && (
          <div className='flex flex-row w-fit mx-auto'>
            {categories.map(category => 
              (<div key={category} className={`${styles[category.replaceAll(' ', '-')]} ${styles.roundButton}`} >
                <Link href={"/category/" + [category]}>
                  {category.toUpperCase().replaceAll("-",' ')}
                </Link>
              </div>))}
          </div>
        )}
      </article>
    </Layout>
  )
}

export default Post