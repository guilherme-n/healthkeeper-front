import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextInput";
import { Container } from "./styles";
import { Lock, User } from "@phosphor-icons/react";
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post("/authenticate", { email, password });
      navigate("/");
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <Container onSubmit={handleLogin}>
      <h1>Login</h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="standard"
        label="Email"
        InputProps={{ startAdornment: <User /> }}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        variant="standard"
        label="Password"
        InputProps={{ startAdornment: <Lock /> }}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Container>
  );
}
