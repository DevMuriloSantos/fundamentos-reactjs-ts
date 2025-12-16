import styles from './App.module.css'

import Header from './components/Header.js'
import Post from './components/Post.js'
import Sidebar from './components/Sidebar.js'

type Content = {
  type: 'paragraph' | 'link';
  content: string;
}

type PostType = {
  id: number;
  author: {
    avatar: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],

    publishedAt: new Date('2025-12-15 17:00:00')
  },

  {
    id: 2,
    author: {
      avatar: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],

    publishedAt: new Date('2025-12-15 17:10:00')
  }
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main className={styles.main}>
          {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            /* preciso do return senão não tem retorno nenhum sem ele*/
          })}
        </main>
      </div>
    </div>
  )
}

export default App
