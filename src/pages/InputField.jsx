import React, { useState } from "react";
import { VStack, Button } from "@channel.io/bezier-react";
import { useNavigate } from "react-router-dom";

function InputField() {
  const navigate = useNavigate();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const goToNext = () => {
    // text1과 text2 상태 변수를 함께 전달
    navigate("/appointment-check", { state: { text1, text2 } });
  };

  const getInputStyle = () => ({
    width: "40%",
    border: "none",
    borderBottom: "2px solid black",
    outline: "none",
    padding: "8px 0",
    backgroundColor: "inherit",
  });

  return (
    <div>
      <h1 style={{ marginBottom: "50px" }}>
        일정 추가 &gt; 시간 선택 &gt; 내용 추가
      </h1>
      <VStack spacing={100} align="start">
        {/* 첫 번째 입력 필드 */}
        <input
          type="text"
          placeholder="Agenda"
          value={text1} // 상태 변수를 value로 설정
          onChange={(e) => {
            setText1(e.target.value); // 상태 업데이트
            console.log("Text1:", e.target.value); // 콘솔에 출력
          }}
          style={getInputStyle()}
        />

        {/* 두 번째 입력 필드 */}
        <input
          type="text"
          placeholder="Detail"
          value={text2} // 상태 변수를 value로 설정
          onChange={(e) => {
            setText2(e.target.value); // 상태 업데이트
            console.log("Text2:", e.target.value); // 콘솔에 출력
          }}
          style={getInputStyle()}
        />

        {/* "다음" 버튼 */}
        <Button
          text="다음"
          size="m"
          style={{ width: "120px" }}
          onClick={goToNext}
        ></Button>
      </VStack>
    </div>
  );
}

export default InputField;
