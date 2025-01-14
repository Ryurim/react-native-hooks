import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Button from "./Button";

const StyledText = styled.Text`
    font-size: 15px;
    margin: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <StyledText>count: {count}</StyledText>
            <Button
                title="+"
                onPress={() => {
                    // setCount(count + 1);
                    setCount((prevCount) => prevCount + 1);
                    console.log(`누른 다음 첫번째 count: ${count}`);
                    // setCount(count + 1);
                    setCount((prevCount) => prevCount + 1);
                    console.log(`누른 다음 두번째 count: ${count}`);
                }}
            />
            <Button
                title="-"
                onPress={() => {
                    setCount(count - 1);
                }}
            />
        </>
    );
};

export default Counter;
