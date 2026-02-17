import MovieCard from "./MovieCard";
import styles from './MovieCard.module.css'
import movieData from '../../data/mock-data.json'

interface ListProps {
    selectedCategory: string;
    searchQuery: string;
    selectedYear: string | number;
}

function MovieCardList({ selectedCategory, searchQuery, selectedYear }: ListProps) {
    const filteredMovies = movieData.recommended.filter((movie: any) => { // Using 'any' temporarily fixes the error
        const matchesCategory = selectedCategory ? movie.category === selectedCategory : true;
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = selectedYear ? movie.year?.toString() === selectedYear.toString() : true;

        return matchesCategory && matchesSearch && matchesYear;
    });
    return (
        <div className={styles.container}>
            <div className={styles.movieContainer}>
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
                ))}
            </div>
            {filteredMovies.length === 0 && (
                <div style={{ color: '#7b7b7b', textAlign: 'center', width: '100%', padding: '40px' }}>
                    No movies found matching those filters.
                </div>
            )}
        </div>
    )
}

export default MovieCardList
