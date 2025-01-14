import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: "none",
    autoCorrect: false,
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const refName = useRef(null);
    const refEmail = useRef(null);

    //Mount & UnMount
    useEffect(() => {
        console.log("\n======= Form component Mount =======");
        console.log(`name: ${name}, email: ${email}`);
        // refName.current.focus(); ==> 이거 원래 잘 안됨
        // console.log(`refName.current: ${refName.current}`);
        return () => console.log("\n======= Form component UnMount =======");
    }, []);

    // 조건: Email이 변경될 때만 실행
    useEffect(() => {
        console.log("\n======= Form component Update =======");
        console.log(`name: ${name}, email: ${email}`);
    }, [email]);

    return (
        <>
            <StyledText>name: {name}</StyledText>
            <StyledText>email: {email}</StyledText>
            <StyledTextInput
                value={name}
                onChangeText={(value) => setName(value)}
                placeholder="name"
                // ref={refName}
                returnKeyType="next"
                // onSubmitEditing={() => refEmail.current.focus()}
            />
            <StyledTextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="email"
                // ref={refEmail}
                returnKeyType="done"
            />
        </>
    );
};

export default Form;
