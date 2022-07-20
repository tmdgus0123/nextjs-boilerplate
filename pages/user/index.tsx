import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../api/user";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Index = () => {
    const [result, setResult] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get(`/api/user`).then((res) => {
            setResult(res.data);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <th>No.</th>
                        <th>Name</th>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result ? (
                        result.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell align="center">{idx}</TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2}>데이터가 없습니다.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Index;
