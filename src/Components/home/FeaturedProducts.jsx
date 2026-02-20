import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const featuredProducts = [
    { id: 1, name: 'VoltCrafters 1.5 Ton Split AC', price: 450, category: 'Air Conditioners', image: '/images/product_split_ac.png' },
    { id: 2, name: 'Arctic Breeze Desert Cooler', price: 120, category: 'Air Coolers', image: '/images/product_desert_cooler.png' },
    { id: 3, name: 'AeroSpin Designer Ceiling Fan', price: 85, category: 'Fans', image: '/images/product_designer_fan.png' },
    { id: 4, name: 'EcoGlow 20W LED Tube (Pack of 4)', price: 30, category: 'Lighting', image: '/images/product_led_tube.png' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function FeaturedProducts({ handleAddToCart }) {
    return (
        <Box id="featured" sx={{ bgcolor: 'white', py: 12, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Box>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
                            Featured Appliances
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, fontSize: '1.1rem' }}>
                            Top-rated performance and unmatched reliability. Add them straight to your cart.
                        </Typography>
                    </Box>
                    <Button color="secondary" sx={{ fontWeight: 700, display: { xs: 'none', sm: 'flex' } }}>
                        View All Products &rarr;
                    </Button>
                </Box>

                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <Grid container spacing={4}>
                        {featuredProducts.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={3}>
                                <MotionCard
                                    variants={itemVariants}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)'
                                        },
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        boxShadow: 'none'
                                    }}
                                >
                                    <Box sx={{ position: 'relative', pt: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.name}
                                            sx={{
                                                position: 'absolute',
                                                top: 0, left: 0,
                                                width: '100%', height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 12, left: 12,
                                            bgcolor: 'background.paper',
                                            px: 1.5, py: 0.5,
                                            borderRadius: 1,
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                            {product.category}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, pt: 3, pb: 2 }}>
                                        <Typography gutterBottom variant="subtitle1" component="h3" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                                            {product.name}
                                        </Typography>
                                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 800, mt: 1 }}>
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0 }}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            onClick={() => handleAddToCart(product)}
                                            sx={{ borderRadius: 2, fontWeight: 700, py: 1, boxShadow: 'none' }}
                                            startIcon={<ShoppingCartIcon />}
                                        >
                                            Add to Cart
                                        </Button>
                                    </CardActions>
                                </MotionCard>
                            </Grid>
                        ))}
                    </Grid>
                </MotionBox>
            </Container>
        </Box>
    );
}
