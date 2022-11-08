import React from "react";

// MUI
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
  Link,
} from "@mui/material";

// redux
import { openAlert, closeAlert } from "../features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";

// emailjs
import { send } from "emailjs-com";

// icons
import { FaLinkedin, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

const textFieldStyle = {
  borderRadius: "5px",
  backgroundColor: "#fff",
  width: "90%",

  "input, textarea, .MuiFilledInput-root, .MuiFilledInput-root:hover": {
    backgroundColor: "#fff",
  },
};

const buttonStyle = {
  padding: "1rem 2rem",
  width: "90%",
  maxWidth: 200,
  borderRadius: "2rem",
  mx: "auto",
  fontWeight: 700,
  backgroundColor: "#883f76",
  color: "white",
};

function ContactMeScreen() {
  const { user } = useSelector((state) => state.user);
  const [toSend, setToSend] = React.useState({
    object: "",
    message: "",
    from_name: user?.name,
    to_name: "Ali",
  });

  const dispatch = useDispatch();

  //   function to make components controlled
  function handleChange(e) {
    const target = e.target;
    setToSend((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  // function to handle submit

  const onSubmit = (e) => {
    for (let input in toSend) {
      if (!toSend[input]) {
        dispatch(
          openAlert({ message: "Please complete the form", severity: "error" })
        );
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
        return;
      }
    }
    let isAborted = false;
    e.preventDefault();
    send("service_barraza", "template_1n6a3pq", toSend, "mMD3lCvskkDRCL8ir")
      .catch((error) => {
        isAborted = true;
        console.log(error);
        dispatch(openAlert({ message: error.text, severity: "error" }));
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
      })
      .then((response) => {
        if (isAborted) return;
        dispatch(
          openAlert({
            message: "Message successfully sent",
            severity: "success",
          })
        );
        setTimeout(() => {
          dispatch(closeAlert());
        }, 2000);
      });
  };

  return (
    <>
      <Box
        sx={{
          py: { xs: "15%", sm: "10%" },
          px: 3,
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            sx={{ color: "secondary.main", fontWeight: 600 }}
            variant="h4"
            mb={5}
          >
            Hi, {user?.name}!
          </Typography>

          <Card sx={{ marginBottom: 5, boxSizing: "border-box" }}>
            <CardContent sx={{ margin: "auto" }}>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontWeight={600}
              >
                Contact me
              </Typography>
              <Typography variant="body">
                Feel free to tell me anything you'd like by filling in the form
                below.
              </Typography>
            </CardContent>
          </Card>

          {/* form to send message */}
          <Card
            component="form"
            sx={{
              padding: 3,
              border: "2px solid ",
              borderColor: "primary.main",
              mx: "auto",
              width: "100%",
              maxWidth: "500px",
              boxSizing: "border-box",
              marginBottom: 5,
            }}
          >
            <Stack gap={3} alignItems="center" my={3}>
              <TextField
                // html input attribute
                sx={textFieldStyle}
                name="object"
                type="text"
                color="secondary"
                label="Object"
                variant="filled"
                onChange={handleChange}
                value={toSend.object}
              />

              <TextField
                // html input attribute
                sx={textFieldStyle}
                multiline
                minRows={4}
                maxRows={6}
                name="message"
                type="text"
                color="secondary"
                label="Message"
                variant="filled"
                onChange={handleChange}
                value={toSend.message}
              />
              <Button
                sx={buttonStyle}
                variant="contained"
                color="secondary"
                onClick={onSubmit}
              >
                Send
              </Button>
            </Stack>
          </Card>

          {/* socials */}
          <Box
            sx={{
              padding: 3,
              mx: "auto",
              width: "100%",
              maxWidth: "500px",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="subtitle1" textAlign="center">
              Or you can reach out on any of my socials
            </Typography>
            <Stack direction="row" justifyContent="center">
              <Link
                color="secondary.main"
                m={2}
                href="https://www.linkedin.com/in/ali-sher-khan-1331a8205/"
              >
                <FaLinkedin size="24px" />
              </Link>
              <Link
                color="secondary.main"
                m={2}
                href="https://discordapp.com/users/Metaxa#5113"
              >
                <FaDiscord size="24px" />
              </Link>
              <Link
                m={2}
                color="secondary.main"
                href="https://discordapp.com/users/Metaxa#5113"
              >
                <FaGithub size="24px" />
              </Link>
              <Link
                m={2}
                color="secondary.main"
                href="https://twitter.com/AliSher03212351"
              >
                <FaTwitter size="24px" />
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ContactMeScreen;
