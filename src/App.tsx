import React, {useEffect, useState} from 'react';
import './App.css';
import Main from "./components/screens/Main";
import Popup from "./Popup";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <Popup v={true}/>
      <Main/>
    </div>
  );
}