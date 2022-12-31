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
                        return <Typography key={index} color="text.primary">{item.text}</Typography>
                    } else {
                        return (
                            <RouterLink key={index} style={{textDecoration: 'none'}} to={item.link} color="inherit">
                                {item.text}
                            </RouterLink>
                        )
                    }
                })}
            </Breadcrumbs>
        )
    }
    return (
        <Container maxWidth="lg">
            <Typography
                sx={{
                    width: "100%",
                    marginTop: 5,
                    marginLeft: 3,
                }}
                variant="h3"
                gutterBottom
            >
                {props.title}
            </Typography>
            { breadcrumb }
            <Card elevation={5} style={{ overflow: "auto"}}>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Paper;