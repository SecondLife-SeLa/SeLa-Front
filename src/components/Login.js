import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import { Link } from "react-router-dom";

import axios from "./api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: LOGIN_URL,
        headers: { "Content-type": "application/json" },
        data: { id: user, pw: pwd },
      }).catch((err) => console.log(err));

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("서버 응답 없음");
      } else if (err.response?.status === 400) {
        setErrMsg("아이디나 비밀번호");
      } else if (err.response?.status === 401) {
        setErrMsg("권한 없음");
      } else if (err.response?.status === 402) {
        setErrMsg("로그인 실패");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>로그인이 되셨습니다.</h1>
          <br />
          <p>
            <a href="http://localhost:3000">홈으로 돌아가세요</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>로그인</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>확인</button>
          </form>
          <p>
            아이디가 없으신가요? <br />
            <span classname="line">
              <Link to="/register">
                <p>회원가입</p>
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
