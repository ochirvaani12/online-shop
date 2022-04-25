import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductCard from "../components/ProductCard";
import { Link } from "@mui/material";
import axios from "axios";

const theme = createTheme();

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/all", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Яг одоо захиал.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Link href="\marketplace">
                  <Button variant="contained" sx={{ width: "180px" }}>
                    Дэлгүүр
                  </Button>
                </Link>
              </Stack>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
      <div className="w-full flex justify-center text-2xl font-medium">
        Шинэ бараа
      </div>
      <div className="w-full flex justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.prodId} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
