import { useState } from "react";

interface ISearch {
    sch_key?: string;
    sch_keyword?: string;
    page_index?: number;
    unit_count?: number;
}

const Index = () => {
    const [inputs, setInputs] = useState<ISearch>({
        sch_key: "",
        sch_keyword: "",
        page_index: 1,
        unit_count: 10,
    });

    return { inputs };
};

export default Index;
