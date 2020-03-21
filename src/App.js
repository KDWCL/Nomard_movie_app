import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
<<<<<<< HEAD
      <img src={picture} alt={name}/>
      {/* alt는 시각장애인을 위한 설명을 위해 사용 */}
=======
      <img src={picture} />
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    </div>
  );
}

const foodILike = [
  {
<<<<<<< HEAD
    id:1,
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
<<<<<<< HEAD
    id:2,
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
<<<<<<< HEAD
    id:3,
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
<<<<<<< HEAD
    id:4,
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
<<<<<<< HEAD
    id:5,
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];
<<<<<<< HEAD

const renderFood = (dish) =>{
  // 리액트 내부에서 사용하기 위해서 key라는 프로퍼티를 만들어준다. 컴포넌트들을 유일하게 만들어주기 위해 사용. 리액트의 element(컴포넌트)들은 유일성을 가져야 하기 때문이다ㅓ.
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
} 
=======
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6

function App() {
  return (
    <div>
<<<<<<< HEAD
      {console.log(foodILike.map(renderFood))}
      {/* map으로 만들어진 컴포넌트들을 찍어보자 */}
      {foodILike.map(renderFood)}
=======
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
        // 여기서의 dish는 foodIlike의 오브젝트인 요소임
      ))}
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

/* map은 array의 각 요소에 function을 실행하기 위해서 사용하는 자바스크립트 함수이다. fuction의 결과값을 갖는 배열을 나에게 준다. *
const friends = ["a","b","c"]
friends.map((current)=>{
  console.log(current)
  return 0
}) <- [0,0,0,0]을 반환해준다.
*/
>>>>>>> 6e791f408feda71e86060de4ceda9a365b67faf6
