import { CalendarIcon, CancelIcon } from '@channel.io/bezier-icons';
import { Text, Button, HStack, VStack, Box, Center, } from '@channel.io/bezier-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Calendar from 'react-calendar';

import './calendar.css'

function PickDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const goToNext = () => {
        navigate('/appointment-create/set-time', { state: { date: selectedDate } });

    }

    return (
        <VStack>
            <HStack display='flex' align='center' justify='between'>
                <Text bold='true' typo='18'>일정 추가</Text>
                <Button leftContent={CancelIcon} styleVariant='tertiary' colorVariant='monochrome'></Button>
            </HStack>
            <HStack display='flex' justify='between'>
                <Box backgroundColor='bg-white-normal' borderRadius='12' width={336} height={312} padding={24} elevation='2'>
                    {/* <HStack>
                        <Button leftContent={ChevronLeftIcon} colorVariant='monochrome' styleVariant='tertiary' size='s'></Button>
                        <ButtonGroup>
                            <Button active={isMonthOpen} onClick={() => setIsOpen(true)} styleVariant='tertiary' text='11월' colorVariant='monochrome' rightContent={TriangleDownIcon}></Button>
                            <Button active={isMonthOpen} onClick={() => setIsOpen(true)} styleVariant='tertiary' text='2024년' colorVariant='monochrome' rightContent={TriangleDownIcon}></Button>
                        </ButtonGroup>
                    </HStack> */}
                    <Calendar onChange={handleDateChange} />
                </Box>
                <VStack justify='between'>
                    <Button text={selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '날짜를 선택해 주세요.'}
                        style={{ width: '192px' }}
                        styleVariant='tertiary'
                        colorVariant='monochrome'
                        leftContent={CalendarIcon}
                    ></Button>
                    <Button text='다음' size='m' onClick={goToNext}></Button>
                </VStack>
            </HStack >
        </VStack >
    );
}

export default PickDate;