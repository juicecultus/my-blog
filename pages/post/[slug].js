import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import '../../styles/main.scss';
import Layout from '../../components/Layout';
import Link from 'next/link';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = props => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = props;

  return (
    <Layout>
      {categories && (
        <div className='categoriesTop'>
          {categories.map(category => (
            <span key={category}>{category} </span>
          ))}
        </div>
      )}
      <h1>{title}</h1>
      <div className='authorName'>
        <p> - - - </p>
        <span>By {name}</span>
      </div>
      {/* <div className='authorImage'>
        <>
          {authorImage && (
            <div>
              <img
                src={urlFor(authorImage)
                  .width(50)
                  .url()}
              />
            </div>
          )}
        </>
      </div> */}

      <BlockContent
        blocks={body}
        imageOptions={{ w: 700, h: 1024, fit: 'max' }}
        {...client.config()}
      />
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  'authorImage': author->image,
  body
}`;

Post.getInitialProps = async function(context) {
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
