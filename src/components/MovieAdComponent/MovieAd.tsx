import styles from './MovieAd.module.css'
import star from '../../../public/assets/star.png'
import Button from '../ButtonComponent/Button';

interface MovieAdProps {
    data: {
        subtitle: string;
        title: string;
        imdbRating: number;
        category: string;
        year: number;
        description: string;
        mainImg: string;
        bgImg: string;
    }
}

function MovieAd ({data}: MovieAdProps) {

        return (
        <div className={styles.adContainer}
            style={{ backgroundImage: `url(/assets/${data.bgImg})`}}>

                <div className={styles.content}>
                    <section className={styles.infoSection}>

                        <p className={styles.smallText}>{data.subtitle}</p>
                        <h2 className={styles.movieTitle}>{data.title}</h2>

                        <div className={styles.rating}>
                            <span>IMDB rating</span>
                            <div className={styles.stars}>
                                {[...Array(data.imdbRating)].map((_, i) => (
                                    <img key={i} src={star} alt="star" className={styles.starIcon}/>
                                ))}
                            </div>
                        </div>

                    </section>

                    <section className={styles.descriptionSection}>
                        <p className={styles.category}>
                            {data.category} &nbsp; {data.year}
                        </p>

                        <p className={styles.description}>
                            {data.description}
                        </p>

                        <Button 
                            text="Watch Now" 
                            onClick={() => console.log(`Playing ${data.title}`)} 
                        />

                    </section>
                </div>

                <img src={`/assets/${data.mainImg}`} alt={data.title} className={styles.batmanImg}/>
        </div>
    )
}

export default MovieAd