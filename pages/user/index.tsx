import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "@api/user";

const Index = () => {
    const [result, setResult] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get(`/api/user`).then((res) => {
            setResult(res.data);
        });
    }, []);

    return (
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {result ? (
                        result.map((item, idx) => (
                            <tr key={idx}>
                                <td align="center">{idx}</td>
                                <td align="center">{item.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
    );
};

export default Index;
