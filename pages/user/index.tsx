import { axios } from "utils/axios";
import { useEffect, useState } from "react";
import { IUser } from "@api/user";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    const [result, setResult] = useState<IUser[]>([]);


    const onDetail = (item: any) => {
        router.push(`/user/${item.id}`);
    }

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
                            <td align="center">{idx + 1}</td>
                            <td align="center">{item.name}</td>
                            <td><button onClick={() => onDetail(item)}>상세보기</button></td>
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
