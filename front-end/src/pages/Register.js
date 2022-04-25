import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Register = () => {
  const { loginData } = useContext(UserContext);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post(
        "http://localhost:4000/users",
        {
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
          phone: data.get("phone"),
          email: data.get("email"),
          password: data.get("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        loginData(response.data.userId);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Link href="/">
        <div className="absolute m-10 cursor-pointer">
          <ArrowBackIosIcon />
          Буцах
        </div>
      </Link>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ boxShadow: "none" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Бүртгүүлэх
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div className="block sm:flex sm:justify-between">
                  <Grid item xs={12} sm={5.5}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="fistname"
                      label="Нэр"
                      name="firstname"
                      autoComplete="firstname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={5.5}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lastname"
                      label="Овог"
                      name="lastname"
                      autoComplete="lastname"
                      autoFocus
                    />
                  </Grid>
                </div>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Утас"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="И-мэйл"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Нууц үг"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Бүртгүүлэх
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Нэвтрэх"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Register;
