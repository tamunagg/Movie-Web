import styles from './MovieAd.module.css'
import batmanImg from '../../assets/batman.png'
import bgImg from '../../assets/Adbg.png'
import star from '../../assets/star.png'

function MovieAd () {
    return (
        <div className={styles.adContainer}
            style={{ backgroundImage: `url(${bgImg})`}}>
                <div className={styles.content}>
                    
                    <section className={styles.infoSection}>
                        <p className={styles.smallText}>Movie of the month</p>
                        <h2 className={styles.movieTitle}>The Batman</h2>

                        <div className={styles.rating}>
                            <span>IMDB rating</span>
                            <div className={styles.stars}>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>                                
                            </div>
                        </div>
                    </section>

                    <section className={styles.descriptionSection}>
                        <p className={styles.category}>Fantasy &nbsp; 2022</p>

                        <p className={styles.description}>
                            The Batman is a 2022 American superhero film based on the DC Comics character Batman.
                            Directed by Matt Reeves from a screenplay he wrote with Peter Craig,
                            it is a reboot of the Batman film franchise produced by DC Films.
                        </p>

                        <button className={styles.button}>Watch Now</button>
                    </section>
                </div>

                <img src={batmanImg} alt="Batman" className={styles.batmanImg}/>
        </div>
    )
}

export default MovieAd