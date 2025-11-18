import "../index.css";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { loginUser } from "../../../authService";
import { useNavigate } from "react-router-dom";
import FormMessage from "../../../components/FormMessage/FormMessage";
import PasswordField from "../../../components/PasswordField/PasswordField";
import SelectField from "../../../components/SelectField/SelectField";

function Login() {
  const [status, setStatus] = useState({ type: "error", text: "" });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Faça seu login</h1>

      <Formik
        initialValues={{
          location: "",
          email: "",
          pass: "",
        }}
        onSubmit={(values) => {
          setStatus({ type: "error", text: "" });

          const email = values.email.trim();
          const pass = values.pass.trim();
          const location = values.location.trim();

          if (!email || !pass) {
            setStatus({ type: "error", text: "Preencha email e senha." });
            return;
          }

          if (!location) {
            setStatus({ type: "error", text: "Selecione sua localização." });
            return;
          }

          const result = loginUser({
            email,
            password: pass,
            location,
          });

          if (!result.ok) {
            setStatus({ type: "error", text: result.message });
            return;
          }

          navigate("/inicialPage");
        }}
      >
        {(formik) => (
          <Form>
            <SelectField
              label="Selecione sua localização"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              options={["São Paulo", "Rio de Janeiro", "Belo Horizonte"]}
            />
            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            <div className="field">
              <PasswordField
                name="pass"
                value={formik.values.pass}
                onChange={formik.handleChange}
              />
            </div>

            <div className="links">
              <div>
                <a
                  href="/register"
                  className="link-button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register");
                  }}
                >
                  Quero me cadastrar
                </a>
              </div>
              <div>
                <a
                  href="/forgot-password"
                  className="link-button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/forgot-password");
                  }}
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <button type="submit" className="btn-login">
              Continue
            </button>

            <FormMessage type={status.type}>
              {status.text}
            </FormMessage>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
