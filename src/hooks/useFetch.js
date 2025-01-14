import { useState, useEffect } from "react";

// () => {} jsx 없이 리턴한거
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);

    // useEffect(async () => {
    //     try {
    //         const res = await fetch(url);
    //         const result = await res.json();
    //         if (res.ok) {
    //             setData(result);
    //             setError(null);
    //         } else {
    //             throw result;
    //         }
    //     } catch (error) {
    //         setError(error);
    //     }
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInProgress(true);
                const res = await fetch(url);
                const result = await res.json();
                if (res.ok) {
                    // setData(result);
                    setData(Array.isArray(result) ? result[0] : result);
                    setError(null);
                } else {
                    throw result;
                }
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setInProgress(false);
            }
        };
        fetchData();
    }, []);
    return { data, error, inProgress };
};
