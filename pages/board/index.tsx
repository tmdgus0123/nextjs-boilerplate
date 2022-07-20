import axios from "axios";
import { useEffect, useState } from "react";

const Index = () => {
    const [result, setResult] = useState<any>({name: ""});
    useEffect(() => {
        axios.get(`/api/board`).then((res) => {
            setResult(res.data);
        });
    }, []);

    return <div>{result.name}</div>;
};

export default Index;
