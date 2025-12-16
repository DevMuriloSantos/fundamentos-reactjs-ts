import styles from './Comment.module.css'
import Avatar from './Avatar.js'

import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
    // tipo da função que é passada como prop. void pq não retorna nada
}

function Comment(props: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        props.onDeleteComment(props.content)
    }

    return (
        <div className={styles.comment}>
            <Avatar AvatarBorder={false} src='https://github.com/diego3g.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='15 de Dezembro às 19:00h'>cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} className={styles.trash} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount((state) => state + 1)}>
                        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment;

//sempre que for atulizar um estado baseado no valor anterior, usar a função de atualização de estado com callback
// ex: setLikeCount((state) => {    
//      return state + 1
// })
//isso evita problemas de concorrência, fazendo com que o react pegue o valor mais atualizado