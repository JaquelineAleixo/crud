import "../index.css";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { changePassword } from "../../../authService";
import { useNavigate } from "react-router-dom";
import FormMessage from "../../../components/FormMessage/FormMessage";
import PasswordField from "../../../components/PasswordField/PasswordField";

function ForgotPassword() {
  const [status, setStatus] = useState({ type: "info", text: "" });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Altere sua senha</h1>

      <Formik
        initialValues={{
          email: "",
          newPass: "",
        }}
        onSubmit={(values) => {
          setStatus({ type: "info", text: "" });

          const result = changePassword({
            email: values.email,
            newPassword: values.newPass,
          });

          if (!result.ok) {
            setStatus({ type: "error", text: result.message });
          } else {
            setStatus({
              type: "info",
              text: "Senha alterada com sucesso! ✅",
            });
            setTimeout(() => navigate("/"), 1000);
          }
        }}
      >
        {(formik) => (
          <Form>
            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Email cadastrado"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            <div className="field">
              <PasswordField
                name="newPass"
                value={formik.values.newPass}
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
                Fazer login
              </a>
            </div>

            <button type="submit" className="btn-login">
              Salvar
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

export default ForgotPassword;
