import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartDrawer({
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    handleUpdateQuantity,
    handleRemoveItem
}) {
    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            PaperProps={{ sx: { width: { xs: '100%', sm: 400 }, p: 0 } }}
        >
            <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Your Cart ({cartCount})</Typography>
                <IconButton onClick={() => setIsCartOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                {cartItems.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
                        <Typography variant="h6" color="text.secondary">Your cart is empty</Typography>
                    </Box>
                ) : (
                    <List sx={{ pt: 0 }}>
                        {cartItems.map((item) => (
                            <ListItem key={item.id} alignItems="flex-start" sx={{ px: 0, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                                <ListItemAvatar sx={{ mr: 2 }}>
                                    <Avatar variant="rounded" src={item.image} alt={item.name} sx={{ width: 80, height: 80 }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}>{item.name}</Typography>}
                                    secondary={
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="body2" color="primary.main" sx={{ fontWeight: 800, mb: 1 }}>
                                                ${item.price}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'action.hover', borderRadius: 2, width: 'fit-content' }}>
                                                <IconButton size="small" onClick={() => handleUpdateQuantity(item.id, -1)}>
                                                    <RemoveIcon fontSize="small" />
                                                </IconButton>
                                                <Typography sx={{ px: 2, fontWeight: 700 }}>{item.quantity}</Typography>
                                                <IconButton size="small" onClick={() => handleUpdateQuantity(item.id, 1)}>
                                                    <AddIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    }
                                />
                                <IconButton edge="end" color="error" onClick={() => handleRemoveItem(item.id)} sx={{ mt: 1 }}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>

            {cartItems.length > 0 && (
                <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.default' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Total</Typography>
                        <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800 }}>${cartTotal.toFixed(2)}</Typography>
                    </Box>
                    <Button variant="contained" color="secondary" fullWidth size="large" sx={{ py: 1.5, borderRadius: 2, fontWeight: 800, fontSize: '1.1rem' }}>
                        Checkout Securely
                    </Button>
                </Box>
            )}
        </Drawer>
    );
}
