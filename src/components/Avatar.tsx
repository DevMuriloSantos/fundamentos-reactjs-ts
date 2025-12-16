import type { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    AvatarBorder: boolean;
}

/* extends -> herda todas as propriedades de ImgHTMLAttributes (como src, alt, etc), sendo assim não é necessário definir elas manualmente */

function Avatar (props: AvatarProps) {
    return (
        <img className={props.AvatarBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />
    )
}

export default Avatar;

{
    /*
        consicao ? true : false
        ? => se
        : => senao
    */

    /*
        Se props.AvatarBorder for true, então aplica styles.avatarWithBorder
        Senão aplcia styles.avatar
    */
}