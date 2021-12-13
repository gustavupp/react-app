import React from 'react'
import ReactDom from 'react-dom'

//import css
import './index.css'

const bookArray = [
  {
    id: 1,
  img: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
  title: 'Atomic habits',
  author: 'James Clear'
},
{
  id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/812ufIGbAmL._AC_UL200_SR200,200_.jpg",
  title: 'The Storyteller: Tales of Life and Music',
  author: 'Dave Grohl'
},
{
  id: 3,
  img: "https://images-na.ssl-images-amazon.com/images/I/71fWy4UWqlL._AC_UL200_SR200,200_.jpg",
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins Reid'
},
{
  id: 4,
  img: "https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg",
  title: 'Apples Never Fall',
  author: 'Liane Moriarty'
}
];

//renderer
const BookList = () => {
   return ( 
     <section className="book-list">
       {bookArray.map(item => {
         const { id, img, title, author } = item;
         return (
          <Book key={id} item={item} />
          );
       })}
     </section>
  );
}

const newFunc = (param) => {
 console.log(param)
}

//component
const Book = (props) => {
 const { img, title, author } = props.item;
  return (
    <div>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <p style={{fontSize:'14px'}}>{author}</p>
      <button onClick={()=>newFunc(title)}>Button</button>
    </div>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'));