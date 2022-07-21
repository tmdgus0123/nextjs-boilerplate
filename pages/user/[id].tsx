import { useRouter } from "next/router";

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>ID: {id}</div>;
};

export default Detail;
