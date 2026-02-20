import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function Hero() {
    return (
        <Box sx={{
            bgcolor: 'background.default',
            pt: { xs: 8, md: 15 },
            pb: { xs: 8, md: 15 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            <MotionBox
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                sx={{
                    position: 'absolute',
                    top: -150,
                    right: -100,
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%)',
                    filter: 'blur(100px)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <MotionTypography
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '-1px',
                        fontSize: { xs: '3rem', md: '4.5rem' },
                        lineHeight: 1.1
                    }}
                >
                    Premium Electrical <span className="gradient-text">Appliances</span>
                </MotionTypography>

                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    variant="h5"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 6, maxWidth: '85%', mx: 'auto', lineHeight: 1.6 }}
                >
                    Stay cool, stay bright. Discover our exceptional range of air conditioners, coolers, designer fans, and high-efficiency LED lighting designed for modern living.
                </MotionTypography>

                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}
                >
                    <Button
                        href="#featured"
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{
                            px: 5,
                            py: 1.8,
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 25px -5px rgba(71, 85, 105, 0.3)',
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'translateY(-2px)' }
                        }}
                    >
                        Shop Now
                    </Button>
                    <Button
                        href="#categories"
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{
                            px: 5,
                            py: 1.8,
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            bgcolor: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(5px)',
                            borderWidth: '2px',
                            '&:hover': { borderWidth: '2px', bgcolor: 'rgba(255,255,255,0.9)' }
                        }}
                    >
                        Browse Categories
                    </Button>
                </MotionBox>
            </Container>
        </Box>
    );
}
