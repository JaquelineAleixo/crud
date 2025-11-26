import "../Login.css";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { registerUser } from "../../../authService";
import { useNavigate } from "react-router-dom";
import FormMessage from "../../../components/FormMessage/FormMessage";
import PasswordField from "../../../components/PasswordField/PasswordField";
import SelectField from "../../../components/SelectField/SelectField";

function Register() {
  const [status, setStatus] = useState({ type: "info", text: "" });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Crie sua conta</h1>

      <Formik
        initialValues={{
          location: "",
          email: "",
          pass: "",
        }}
        onSubmit={(values) => {
          setStatus({ type: "info", text: "" });

          const result = registerUser({
            email: values.email,
            password: values.pass,
            location: values.location,
          });

          if (!result.ok) {
            setStatus({ type: "error", text: result.message });
          } else {
            setStatus({
              type: "info",
              text: "Cadastro realizado com sucesso! 🎉",
            });
            setTimeout(() => navigate("/"), 1000);
          }
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
              <a
                href="/"
                className="link-button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Já tenho conta
              </a>
            </div>

            <button type="submit" className="btn-login">
              Cadastrar
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

export default Register;
