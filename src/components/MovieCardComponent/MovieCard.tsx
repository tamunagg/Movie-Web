import styles from './MovieCard.module.css'

import poster1 from '../../assets/MovieCard/poster1.png'
import poster2 from '../../assets/MovieCard/poster2.png'
import poster3 from '../../assets/MovieCard/poster3.png'
import poster4 from '../../assets/MovieCard/poster4.png'
import poster5 from '../../assets/MovieCard/poster5.png'
import poster6 from '../../assets/MovieCard/poster6.png'
import poster7 from '../../assets/MovieCard/poster7.png'
import poster8 from '../../assets/MovieCard/poster8.png'
import { div } from 'framer-motion/client'

function MovieCard() {

    const moviePosters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8];

    return (
        <div className={styles.container}>
            <div className={styles.movieContainer}>

                {moviePosters.map((posterImg, i) => (
                    <div key={i} className={styles.movieCard}>
                        <img className={styles.movieImage} src={posterImg} alt='movie poster'/>
                        <div className={styles.hovered}>
                            <button className={styles.button} >
                                Watch Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCard