import "./Main.css"
export default function Main(){
const user={
    name:"정예은",
    isLogin:true
}
    // return <>
    // {/* 객체를 그대로 사용하면 안되니깐 (JSX주의사항)
    // 객체의 점표기법을 사용해서 접근함.
    // */}
    // {user.isLogin?<div>로그아웃</div>:<div>로그인</div>}
    // </>

// 조건문 사용하기 
if(user.isLogin){
    return<>
    <div className="logout">로그아웃2</div></>
}return<>
<div>로그인</div></>

}