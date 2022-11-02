import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styled-index"
import Cookies from "universal-cookie"
import Logo from "../../../assets/images/admin/logo.png"
function LoginComponent() {
    const cookies = new Cookies();
    const Email = useRef();
    const Password = useRef();
    const EmailError = useRef();
    const PasswordError = useRef();
    const ErrorText = useRef();
    let navigate = useNavigate();
  
    const handleSubmit = async e => {
      e.preventDefault()
  
      try {
           await fetch('https://x8ki-letl-twmt.n7.xano.io/api:oMrL5JvU/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email : Email.current.value,
                password : Password.current.value, 
              })
          })
          .then(res => res.text())
          .then(result =>  {
            if (JSON.parse(result).authToken) {
              setTimeout(() => {navigate('/admin/dashboard') 
               window.location.reload()}, "1500")
            }
            if (JSON.parse(result).authToken) {
                cookies.set("access", JSON.parse(result).authToken, { path: "/" });
                cookies.remove("error", { path: "/" });
            }else if (JSON.parse(result).message){
              console.log("error");
              PasswordError.current.style.backgroundColor = "#fe8585"
              EmailError.current.style.backgroundColor = "#fe8585"
              Password.current.style.color = "white"
              Email.current.style.color = "white"
              PasswordError.current.style.border = "2px solid red"
              EmailError.current.style.border = "2px solid red"
              ErrorText.current.style.display = "block"
            }
          })
        } catch(err) {
          console.log(err)
      }
  }
    return(
        <Wrapper>
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form  action="#" onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Авторизоваться</h2>
            <div ref={EmailError} className="input-field">
              <i className="fas fa-user"></i>
              <input id="email"  ref={Email} type="text" required placeholder="Эл. адрес" />
            </div>
            <div ref={PasswordError} className="input-field">
              <i className="fas fa-lock"></i>
              <input ref={Password} id="password" type="password" required placeholder="Пароль" />
            </div>
            <span ref={ErrorText}>Ошибка электронной почты или пароля!</span>
            <input type="submit" value="Войти" className="btn solid" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
          <img src={Logo} width={400} height={150} className="image" alt="" />
            <p>
            Добро пожаловать на внутреннюю платформу mirpotolkov.uz ! Доступ есть только у администраторов 
            </p>
          </div>
        </div>
      </div>
    </div>
        </Wrapper>
    )
}
export default LoginComponent