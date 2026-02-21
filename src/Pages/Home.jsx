import {
 Grid, Card, CardContent, CardMedia, CardActions,
 Typography, Button
} from "@mui/material";
const items = [
 { id: 1, title: "React", desc: "UI Library",
 img: "https://via.placeholder.com/300" },
 { id: 2, title: "MUI", desc: "Component Library",
 img: "https://via.placeholder.com/300" },
 { id: 3, title: "Node.js", desc: "Backend Runtime",
 img: "https://via.placeholder.com/300" },
];

function Home() {
 return (
    <Grid container spacing={3}>
        {items.map(item => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { boxShadow: 8 },
                transition: 'box-shadow 0.3s'
         }}>
            <CardMedia component="img" height={180}
                image={item.img} alt={item.title} />
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
            {item.title}
            </Typography>
            <Typography color="text.secondary">
                {item.desc}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
 </Grid>
 ))}
 </Grid>
 );
}
export default Home;