import { CalendarIcon, CancelIcon } from "@channel.io/bezier-icons";
import {
  Text,
  Button,
  HStack,
  VStack,
  Box,
  Center,
} from "@channel.io/bezier-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from "react-calendar";

import "./calendar.css";

function Check() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const boxStyle = {
    width: "160px", // 박스 너비
    height: "80px", // 박스 높이
    backgroundColor: "white", // 배경을 흰색으로 설정
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "black", // 글씨를 검은색으로 설정
    boxShadow: "0px 1.05px 1.4px rgba(0, 0, 0, 0.12)",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const goToNext = () => {
    navigate("/appointment-create/set-time", { state: { date: selectedDate } });
  };

  return (
    <VStack>
      <HStack display="flex" align="center" justify="between">
        <Text bold="true" typo="18">
          내 일정
        </Text>
        <Button
          leftContent={CancelIcon}
          styleVariant="tertiary"
          colorVariant="monochrome"
        ></Button>
      </HStack>
      <HStack display="flex" justify="between">
        <Box
          backgroundColor="bg-white-normal"
          borderRadius="12"
          width={336}
          height={312}
          padding={24}
          elevation="2"
        >
          {/* <HStack>
                        <Button leftContent={ChevronLeftIcon} colorVariant='monochrome' styleVariant='tertiary' size='s'></Button>
                        <ButtonGroup>
                            <Button active={isMonthOpen} onClick={() => setIsOpen(true)} styleVariant='tertiary' text='11월' colorVariant='monochrome' rightContent={TriangleDownIcon}></Button>
                            <Button active={isMonthOpen} onClick={() => setIsOpen(true)} styleVariant='tertiary' text='2024년' colorVariant='monochrome' rightContent={TriangleDownIcon}></Button>
                        </ButtonGroup>
                    </HStack> */}
          <Calendar onChange={handleDateChange} />
        </Box>
        <VStack justify="between" spacing={4}>
          <Box style={boxStyle}>Box 1</Box>
          <Box style={boxStyle}>Box 2</Box>
          <Box style={boxStyle}>Box 3</Box>
          <Box style={boxStyle}>Box 4</Box>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Check;
