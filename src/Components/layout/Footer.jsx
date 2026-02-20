import {
    Box,
    Container,
    Grid,
    Typography,
    Stack
} from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#0f172a', color: 'white', py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ElectricalServicesIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 28 }} />
                            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
                                VoltCrafters
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, pr: 4, lineHeight: 1.6 }}>
                            Your trusted source for premium electrical appliances, cooling solutions, and modern lighting. Delivering quality and comfort to your home.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Shop</Typography>
                        <Stack spacing={1.5}>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Air Conditioners</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Coolers</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Fans</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Support</Typography>
                        <Stack spacing={1.5}>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Contact Us</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Shipping Policy</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Returns</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: { xs: 2, md: 0 } }}>
                        &copy; {new Date().getFullYear()} VoltCrafters. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
