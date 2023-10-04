import React ,{useState} from 'react'
import "./style.css";
import Menu from "./menuapi";
import MenuCard from './Menucard';
import Navbar from './Navbar';


//new Set is used to  unique the category does not repeat it
// map is used here to list the category
const uniquelist=[
  ...new Set(Menu.map((curElem)=>{
  return curElem.category;
})
),
"ALL",
];
console.log(uniquelist);

export default function Restaurant() {

    const[menuData,setMenuData]=useState(Menu);
    const [menulist,setmenulist]=useState(uniquelist)
    // console.log(menuData)
    const filterItem=(category)=>{ 
      if(category==="ALL"){
        setMenuData(Menu);
        return;
      }   //here category is the breakfast of button
      const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===category;    //curElem.category means api category
      });
      setMenuData(updatedlist);  
    };

//MenuCard
   
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menulist}/>
   <MenuCard  menuData={menuData}/>
    
    </>
  )
}
