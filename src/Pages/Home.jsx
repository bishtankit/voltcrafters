import { Box } from '@mui/material';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';

export default function Home({ handleAddToCart }) {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Hero />
            <FeaturedProducts handleAddToCart={handleAddToCart} />
            <Categories />
        </Box>
    );
}
