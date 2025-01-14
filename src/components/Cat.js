import React from "react";
import styled from "styled-components/native";
import { useFetch } from "../hooks/useFetch";
import { View, Text } from "react-native";

const StyledImage = styled.Image`
    background-color: #7f8c8d;
    width: 300px;
    height: 300px;
`;

const ErrorMessage = styled.Text`
    font-size: 18px;
    color: #e74c3c;
`;

const LoadingMessage = styled(ErrorMessage)`
    color: #2ecc71;
`;

const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const Cat = () => {
    const { data, error, inProgress } = useFetch(URL);

    return (
        <View>
            {inProgress && <LoadingMessage>The API request is in progress</LoadingMessage>}
            <StyledImage source={data?.url ? { uri: data.url } : null} />
            <Text>{data.id}</Text>
            <Text>{data.url}</Text>
            <ErrorMessage>{error?.message}</ErrorMessage>
        </View>
    );
};

export default Cat;
