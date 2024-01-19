import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/holices.png',
      name: 'Holices Sanson',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Heyy guys 👋' },
      { type: 'paragraph', content: "I've just updated my portfolio. It's a project I developed to put into practice the react componentization part I've been studying. 🚀" },
      { type: 'link', content: 'github.com/holices' },
    ],
    publishedAt: new Date('2023-11-26 12:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joaosanson.png',
      name: 'João S',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Hello everbody 👋' },
      { type: 'paragraph', content: "Very happy to share that I've been promoted to software engineer! :)" },
      { type: 'link', content: 'github.com/joaosanson' },
    ],
    publishedAt: new Date('2023-11-19 12:00'),
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App