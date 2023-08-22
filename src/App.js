import "./App.css";
import Counter from "./Counter"
export default function App() {
  //Js starts
  const name = "OmPrakash";
  const name1 = "Aswin";

  const people = ["Yogesh", "Manoj", "Abhijit", "Kaushik"];

  const userList = [
    {
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg",
      name: "Yogesh",
    },
    {
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "OmPrakash",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
      name: "Aswin",
    },
  ];
  //                0          1         2
  //JS ends
  //JSX starts
  return (
    <div className="App">
       {userList.map((usr) => (
        <ProfileData image={usr.pic} name={usr.name} />
      ))} 
      
    </div>
  );
  //JSX ends
}



//Display Profile Pic and name 🏢

function ProfileData({ image, name }) {
  return (
    <div>
      <img className="profile-pic" src={image} alt={name} />
      <h1>{name}</h1>
      <Counter />
    </div>
    
  );
}

function Welcome({ name, age }) {
  return (
    //Fragment => React.Fragment
    <>
      <h1>
        Hey {name} {age}
      </h1>
      {/* <h1>Hey {props.name} </h1> */}
    </>
  );
}


