import useInput from "@/components/hooks/useInput";

const Index = () => {
    const id = useInput("id", "");
    const password = useInput("password", "");

    return (
        <div>
            야이디:
            <input type="text" {...id} />
            <br />
            패스워드:
            <input type="password" {...password} />
        </div>
    );
};

export default Index;
