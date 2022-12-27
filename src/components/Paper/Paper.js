import { Container, Typography, Card, CardContent, Breadcrumbs } from "@mui/material";
import {Link as RouterLink } from 'react-router-dom';

const Paper = props => {

    let breadcrumb = null;

    if (props.breadcrumb) {
        breadcrumb = (
            <Breadcrumbs
                sx={{
                    margin: 3
                }}
                aria-label="breadcrumb">
                {props.breadcrumb.map((item, index) => {
                    if (index === (props.breadcrumb.length -1 )) {
                        return <Typography color="text.primary">{item.text}</Typography>
                    } else {
                        return (
                            <RouterLink style={{textDecoration: 'none'}} to={item.link} color="inherit">
                                {item.text}
                            </RouterLink>
                        )
                    }
                })}
            </Breadcrumbs>
        )
    }
    return (
        <Container maxWidth="sm">
            <Typography
                sx={{
                    width: "100%",
                    marginTop: 20,
                    marginLeft: 3,
                }}
                variant="h3"
                gutterBottom
            >
                {props.title}
            </Typography>
            { breadcrumb }
            <Card elevation={5}>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Paper;