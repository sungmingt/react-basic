import { useState } from "react";

//회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birthDate: "",
    country: "",
    bio: "",
  });

  const [name, setName] = useState("이름");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("자기소개");

  const onChangeName = (e) => {
    setInput({
      //기존 값들은 유지시켜준다!
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirthDate = (e) => {
    setInput({
      //기존 값들은 유지시켜준다!
      ...input,
      birthDate: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      //기존 값들은 유지시켜준다!
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      //기존 값들은 유지시켜준다!
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          //초기값 설정
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          //
          type="date"
          onChange={onChangeBirthDate}
          placeholder={"yyyy-mm-dd 형식"}
        />
      </div>

      <div>
        <select>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChance={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
