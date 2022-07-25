import { useRouter } from "next/router";

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;

    const goList = () => {
        router.back();
    };

    return (
        <div>
            <div>ID: {id}</div>
            <div>
                <button onClick={goList}>목록</button>
            </div>
        </div>
    );
};

export default Detail;
