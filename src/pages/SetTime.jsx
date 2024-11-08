import React, { useState } from "react";
import { Button, HStack, VStack } from "@channel.io/bezier-react";
import { useLocation, useNavigate } from "react-router-dom";

function SetTime() {
  // 각 버튼의 hover 상태를 개별적으로 관리하기 위해 객체를 사용
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();
  const selectedDate = location.state?.date;

  const goToNext = () => {
    console.log(selectedDate);
    console.log(selectedTime)
    navigate('/appointment-create/input-field', { state: { date: selectedDate, time: selectedTime } });
  }

  const getButtonStyle = (buttonText) => ({
    backgroundColor: selectedTime === buttonText ? "#E0DEFA" : "white",
    color: selectedTime === buttonText ? "#5858FA" : "black",
    boxShadow: "0px 1.05px 1.4px rgba(0, 0, 0, 0.12)",
    width: "120px",
    fontWeight: 'normal',
  });

  const disabledbuttonStyle = {
    backgroundColor: "#D8D8D8",
    color: "black",
    boxShadow: "0px 1.05px 1.4px rgba(0, 0, 0, 0.12)",
    width: "120px",
    fontWeight: 'normal',
  };

  const handleButtonClick = (time) => {
    setSelectedTime(time);
    console.log(selectedTime)
  };

  return (
    <div>
      <HStack>
        <h1>일정 추가 &gt; 시간 선택</h1>
      </HStack>
      <HStack justify="between" align="end">
        <VStack spacing={10}>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("09:00")}
              onMouseEnter={() => setHoveredButton("09:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("09:00")}
              text="09:00"
            />
            <Button
              style={getButtonStyle("09:30")}
              onMouseEnter={() => setHoveredButton("09:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("09:30")}
              text="09:30"
            />
            <Button
              style={getButtonStyle("10:00")}
              onMouseEnter={() => setHoveredButton("10:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("10:00")}
              text="10:00"
            />
          </HStack>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("10:30")}
              onMouseEnter={() => setHoveredButton("10:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("10:30")}
              text="10:30"
            />
            <Button
              style={disabledbuttonStyle}
              onMouseEnter={() => setHoveredButton("11:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("11:00")}
              text="11:00"
              disabled
            />
            <Button
              style={getButtonStyle("11:30")}
              onMouseEnter={() => setHoveredButton("11:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("11:30")}
              text="11:30"
            />
          </HStack>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("12:00")}
              onMouseEnter={() => setHoveredButton("12:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("12:00")}
              text="12:00"
            />
            <Button
              style={getButtonStyle("12:30")}
              onMouseEnter={() => setHoveredButton("12:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("12:30")}
              text="12:30"
            />
            <Button
              style={getButtonStyle("13:00")}
              onMouseEnter={() => setHoveredButton("13:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("13:00")}
              text="13:00"
            />
          </HStack>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("13:30")}
              onMouseEnter={() => setHoveredButton("13:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("13:30")}
              text="13:30"
            />
            <Button style={disabledbuttonStyle} text="14:00" disabled />
            <Button
              style={getButtonStyle("14:30")}
              onMouseEnter={() => setHoveredButton("14:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("14:30")}
              text="14:30"
            />
          </HStack>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("15:00")}
              onMouseEnter={() => setHoveredButton("15:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("15:00")}
              text="15:00"
            />
            <Button
              style={getButtonStyle("15:30")}
              onMouseEnter={() => setHoveredButton("15:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("15:30")}
              text="15:30"
            />
            <Button
              style={getButtonStyle("16:00")}
              onMouseEnter={() => setHoveredButton("16:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("16:00")}
              text="16:00"
            />
          </HStack>
          <HStack spacing={20}>
            <Button
              style={getButtonStyle("16:30")}
              onMouseEnter={() => setHoveredButton("16:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("16:30")}
              text="16:30"
            />
            <Button
              style={getButtonStyle("17:00")}
              onMouseEnter={() => setHoveredButton("17:00")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("17:00")}
              text="17:00"
            />
            <Button
              style={getButtonStyle("17:30")}
              onMouseEnter={() => setHoveredButton("17:30")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick("17:30")}
              text="17:30"
            />
          </HStack>
        </VStack>
        <Button text='다음' size='m' style={{ width: '120px' }} onClick={goToNext} >
        </Button>
      </HStack>


    </div>
  );
}

export default SetTime;
