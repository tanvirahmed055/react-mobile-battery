import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
    </div>
  );
}


function Blog(props) {
  console.log(props);
  return (
    <div className='blog'>
      <h3>The heading of the blog component is: {props.heading} </h3>
      <p>The author name of the blog component is: {props.author} </p>
    </div>
  )
}


function Mobile(props) {
  const [charge, setCharge] = useState(100)

  const handleBatteryDown = () => {
    const newCharge = charge - 10;
    setCharge(newCharge);
  }

  return (
    <div>
      <h2>Battery Charge Remaining: {charge}</h2>
      <button onClick={handleBatteryDown}>battery down</button>
    </div>
  )
}

export default App;


// (চ্যালেঞ্জিং)

// ৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে। 

// ১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে। তারপরে আর বাটনে চাপ দিলে। ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা)