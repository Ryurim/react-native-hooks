import React, { useState, useMemo } from "react";
import styled from "styled-components/native";
import Button from "./Button";

const StyledText = styled.Text`
    font-size: 24px;
`;

const getLength = (text) => {
    console.log(`Target text: ${text}`);
    return text.length;
};

const list = ["JavaScript", "Expo", "Expo", "React Native"];

let idx = 0;
const Length = () => {
    const [text, setText] = useState(list[0]);
    // const [length, setLength] = useState("");

    const _onPress = () => {
        // setLength(getLength(text));
        ++idx;
        if (idx < list.length) setText(list[idx]);
    };
    //useMemo 추가
    const length = useMemo(() => getLength(text), [text]);
    return (
        <>
            <StyledText>Text : {text}</StyledText>
            <StyledText>Length : {length}</StyledText>
            <Button title="Get Length" onPress={_onPress} />
        </>
    );
};

export default Length;
