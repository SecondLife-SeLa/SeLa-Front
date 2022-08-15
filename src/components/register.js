import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import './register.css'
import bgImage2 from './backgroundImage/loginback2.mp4'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NM_REGEX = /^[A-z]{3,10}$/;
const BTH_REGEX = /^[0-9]{6}$/;

const REGISTER_URL = '/register';


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const nameRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState('');
    const [validName_name, setValidName_name] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    

    const [birth, setBirth] = useState('');
    const [validBirth, setValidBirth] = useState(false);
    const [birthFocus, setBirthFocus] = useState(false);

    const [img, setImg] = useState('');

    const [tag, setTag] = useState('');
    const [validTag, setValidTag] = useState(false);
    const [tagFocus, setTagFocus] = useState(false);

    const [career, setCareer] = useState('');
    const [validCareer, setValidCareer] = useState(false);
    const [careerFocus, setCareerFocus] = useState(false);

    const [intro, setIntro] = useState('');
    const [validIntro, setValidIntro] = useState(false);
    const [introFocus, setIntroFocus] = useState(false);

    const [intro_one, setIntro_one] = useState('');
    const [validIntro_one, setValidIntro_one] = useState(false);
    const [intro_oneFocus, setIntro_oneFocus] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidBirth(BTH_REGEX.test(birth));
    }, [birth])

    useEffect(() => {
        setValidName_name(NM_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios({
                method: "POST",
                url: REGISTER_URL,
                headers: { "Content-type": "application/json" },
                data:{id: user, pw: pwd, name, birth, img, tag, career, intro, intro_one},
                }).catch((err) => console.log(err));

            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
            setName('');
            setBirth('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
         <div>
            <video autoPlay loop muted>
                <source src={bgImage2} type="video/mp4" />
            </video>
            {success ? (
                <section>
                    
                    <h1 className="REGHEAD">회원가입 성공!</h1>
                    
                    <p>
                        <a href="./login">로그인</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>회원가입</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            아이디:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 ~ 24자의 영문, 숫자, 허용된 특수기호로 이루어져야 됩니다.<br />
                            영문으로 시작해야 됩니다.<br />
                            문자, 숫자, "_", "-" 사용가능.
                        </p>


                        <label htmlFor="password">
                            비밀번호:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 ~ 24자의 영문, 숫자, 허용된 특수기호로 이루어져야 됩니다.<br />
                            대문자와 소문자, 숫자 및 특수 문자를 포함되어야 합니다.<br />
                            사용 가능한 특수기호: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            비밀번호 확인:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            비밀번호와 일치해야 합니다.
                        </p>

                        <label htmlFor="birth">
                            생년월일:
                            <FontAwesomeIcon icon={faCheck} className={validBirth ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validBirth || !birth ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="birth"
                            autoComplete="off"
                            onChange={(e) => setBirth(e.target.value)}
                            value={birth}
                            required
                            aria-invalid={validBirth ? "false" : "true"}
                            aria-describedby="ubirthnote"
                            onFocus={() => setBirthFocus(true)}
                            onBlur={() => setBirthFocus(false)}
                        />
                        <p id="ubirthnote" className={birthFocus && birth && !validBirth ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            생년월일 6자를 입력해주세요.<br />
                            예시: 980219<br />
                        </p>

                        <label htmlFor="name">
                            이름:
                        </label>
                        <input 
                            type="text"
                            id="name"
                            ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            onFocus={() => setNameFocus(true)}
                        />

                        

                        <label htmlFor="birth">
                            사진:
                        </label>
                        <input
                        type="file"
                        name="img"
                        onChange={(e) => setImg(e.target.value)}
                        value={img}
                        /> 


                        <label htmlFor="tag">
                            관심분야:
                        </label>
                        <input
                            type="text"
                            id="tag"
                            autoComplete="off"
                            onChange={(e) => setTag(e.target.value)}
                            value={tag}
                            required
                            aria-invalid={validTag ? "false" : "true"}
                            aria-describedby="utagnote"
                            onFocus={() => setTagFocus(true)}
                        />

                        <label htmlFor="birth">
                            경력:
                        </label>
                        <input
                            type="text"
                            id="career"
                            autoComplete="off"
                            onChange={(e) => setCareer(e.target.value)}
                            value={career}
                            required
                        />

                        <label htmlFor="birth">
                            자기소개(상세):
                        </label>
                        <input
                            type="text"
                            id="intro"
                            autoComplete="off"
                            onChange={(e) => setIntro(e.target.value)}
                            value={intro}
                            onFocus={() => setIntroFocus(true)}
                        />

                        <label htmlFor="birth">
                            한마디로 자기소개:
                        </label>
                        <input
                             type="text"
                             id="intro_one"
                             autoComplete="off"
                             onChange={(e) => setIntro_one(e.target.value)}
                             value={intro_one}
                             onFocus={() => setIntro_oneFocus(true)}
                        />







                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>가입</button>
                    </form>
                    <p>
                        이미 가입하셨나요?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="./login">로그인하러 가기</a>
                        </span>
                    </p>
                </section>
            )}
            </div>
        </>
    )
}

export default Register