import Header from "@/components/header";
import Footer from "@/components/footer";

const MainLayout = (page: any) => {
    return (
        <>
            <Header />
            <div>{page}</div>
            <Footer />
        </>
    );
};

export default MainLayout;