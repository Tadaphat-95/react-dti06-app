import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from "./views/Home.jsx"
import MyPageA from "./views/MyPageA.jsx"
import MyPageB from "./views/MyPageB.jsx"
import MyPageC from "./views/MyPageC.jsx"
import MyPageD from "./views/MyPageD.jsx"
import NotFound from "./views/NotFound.jsx"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypageA" element={<MyPageA />} />
          <Route path="/mypageB" element={<MyPageB />} />
          <Route path="/mypageC" element={<MyPageC />} />
          <Route path="/mypageD" element={<MyPageD />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
