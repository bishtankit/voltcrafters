import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    useTheme
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

export default function Navigation({ cartCount, setIsCartOpen }) {
    const theme = useTheme();

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{
            bgcolor: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            zIndex: theme.zIndex.drawer + 1
        }}>
            <Toolbar>
                <ElectricalServicesIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 32 }} />
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: '-0.5px' }}>
                    Volt<span style={{ color: theme.palette.secondary.main }}>Crafters</span>
                </Typography>
                <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>Appliances</Button>
                <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>Cooling</Button>
                <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>Lighting</Button>
                <IconButton color="inherit" sx={{ ml: 2 }} onClick={() => setIsCartOpen(true)}>
                    <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
