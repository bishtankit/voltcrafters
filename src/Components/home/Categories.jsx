import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const categories = [
    { title: 'Air Conditioners', description: 'Energy-efficient split and window ACs.', image: '/images/category_ac.png' },
    { title: 'Air Coolers', description: 'Powerful desert and personal cooling solutions.', image: '/images/category_cooler.png' },
    { title: 'Ceiling Fans', description: 'High-speed, designer fans for every room.', image: '/images/category_fan.png' },
    { title: 'LED Lighting', description: 'Bright, durable LED bulbs, tubes, and panels.', image: '/images/category_led.png' }
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

export default function Categories() {
    return (
        <Container id="categories" sx={{ py: 12, flexGrow: 1 }} maxWidth="lg">
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
                    Shop by Category
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}>
                    Find the perfect appliance category for your home or office.
                </Typography>
            </Box>

            <MotionBox
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <Grid container spacing={4}>
                    {categories.map((category, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <MotionCard
                                variants={itemVariants}
                                className="glass-card"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                    },
                                    borderRadius: 4,
                                    overflow: 'hidden'
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '80%',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                                        {category.title}
                                    </Typography>
                                    <Typography color="text.secondary" variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {category.description}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ p: 3, pt: 0 }}>
                                    <Button variant="text" color="secondary" sx={{ fontWeight: 700, p: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}>
                                        Explore Products &rarr;
                                    </Button>
                                </Box>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>
            </MotionBox>
        </Container>
    );
}
