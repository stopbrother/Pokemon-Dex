import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";

function Router() {
  return (
    //Routes를 BrowserRouter로 감싼이유 : 브라우저가 깜빡이지 않고 페이지 이동하기 위해
    <BrowserRouter>
      <Routes>
        {/* path는 사용하고 싶은 주소
            element는 이동했을때 보여주고자 하는 컴포넌트 */}
        <Route path="/" element={<Home />} />
        <Route path="dex" element={<Dex />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
