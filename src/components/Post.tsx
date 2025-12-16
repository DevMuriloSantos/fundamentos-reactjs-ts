import { useState, useEffect } from 'react'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import Avatar from './Avatar.js'
import Comment from './Comment.js'

interface PostProps { // definir o tipo das props que o componente Post vai receber
  author: {
    name: string;
    role: string;
    avatar: string;
  };

  content: {
    type: 'paragraph' | 'link'; // tipo literal => só pode ser esses dois valores
    content: string;
  }[]; // indica que é um array de objetos com essas propriedades passadas acima

  publishedAt: Date;
}

function Post(props: PostProps) {

  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  useEffect(() => {
    console.log(comments)
  }, [comments])

  const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }) 
  // serve para formatar datas

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true
  }) // serve para mostrar o tempo relativo tipo "há 1 dia"

  function handleCreateNewComment(event: React.ChangeEvent<HTMLFormElement>) { 
    // React.FormEvent -> evento de formulário
    event.preventDefault()

    if (newCommentText.trim() == "") {
      alert("O comentário não pode ser vazio!")
      return

      // trim() remove os espaços em branco no início e no fim da string
    }

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(comment: string) {
    setComments(comments.filter(commentItem => commentItem !== comment))
    // do array comments, setComments com todos os comments que diferem do param... comment
    // filter -> filtra um array

    // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar AvatarBorder={true} src={props.author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type == 'paragraph') {
            return (
              <p key={line.content}>{line.content}</p>
            )
          } else if (line.type == 'link') {
            return (
              <a key={line.type} href="">{line.content}</a>
            )
          }
        })}

        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} />

        <footer>
          <button type='submit' disabled={newCommentText.trim() == ""}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}

export default Post