import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://openapi.seoul.go.kr:8088/5162554b4679656f3531794a524d56/json/SeoulLibraryBookSearchInfo/1/500/";

const getServiceSideProps = () => {
    
}

const Index = () => {
    const [result, setResult] = useState<any[]>([]);
    useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            setResult(res.data.SeoulLibraryBookSearchInfo.row);
        });
    }, []);

    return (
        <div>
            <table>
                <tbody>
                    {result.map((x, i) => (
                        <tr key={i}>
                            <td>{x.TITLE}</td>
                            <td>{x.AUTHOR}</td>
                            <td>{x.PUBLIR}</td>
                            <td>{x.CONTRY_NAME}</td>
                            <td>{x.CREATE_DATE}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
