import { div } from 'framer-motion/client';
import styles from './MovieCard.module.css'
import Button from '../ButtonComponent/Button';

interface MovieCardProps {
    title: string;
    poster: string;
}

function MovieCard({ title, poster }: MovieCardProps) {

    return (
            <div className={styles.movieCard}> 
                <img className={styles.movieImage} src={`/assets/MovieCard/${poster}`} alt={title} />

                <div className={styles.hovered}>
                    <Button 
                        text="Watch Now" 
                        onClick={() => console.log(`Opening ${title}`)} 
                    />
                </div>
                
            </div>
    )
}

export default MovieCard