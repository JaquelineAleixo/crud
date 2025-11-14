import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlEye } from "react-icons/sl";
import { PiEyeClosedLight } from "react-icons/pi";
import "./index.css";

function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div>
            <h1>Faça seu login</h1>
            <form>
                <div className="campo">
                    <label>Selecione sua localização</label>
                    <div className="select-display">
                        <select>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Belo Horizonte">Belo Horizonte</option>
                        </select>
                        <span className="icon-chevron"><SlArrowDown /></span>
                    </div>
                </div>
                <div className="campo">
                    <input id="email" type="email" placeholder="Email" />
                </div>
                <div className="campo">
                    <div className="input-senha">
                        <input id="password" type={passwordVisible ? "text" : "password"} placeholder="Senha" />
                        <button type="button" className="icon-olho" onClick={() => setPasswordVisible((prev) => !prev)}>
                            {passwordVisible ? <PiEyeClosedLight /> : <SlEye />}
                        </button>
                    </div>
                </div>
                <div className="links">
                    <div><a href="/#">Quero me cadastrar</a></div>
                    <div><a href="/#">Esqueci minha senha</a></div>                    
                </div>

                <button type="submit" className="btn-login">Continue</button>
            </form>
        </div>
    );
}
export default Login;