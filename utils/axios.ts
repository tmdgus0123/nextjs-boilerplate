import AXOIS from "axios";

export const axios = AXOIS.create({
    // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axios.interceptors.request.use(
    (config) => {
        // 요청이 전달 되기 전에 작업 수행
        return config;
    },
    (error) => {
        // 요청 오류가 있는 작업 수행
        return error;
    }
);

axios.interceptors.response.use(
    (response) => {
        // 2ㅌx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 데이터가 있는 작업 수행
        console.log("====== axios intercepter ======");
        console.log(response.status, response.data);
        console.log("===============================");
        return response;
    },
    (error) => {
        // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 오류가 있는 작업 수행
        if (error.response.status == 404) {
            console.log("404 intercepter");
        }
        return Promise.reject(error);
    }
);
