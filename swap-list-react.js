import { useState } from "react";

export default function App() {
  const [list1, setList1] = useState([
    { name: "Value 1", checked: false },
    { name: "Value 2", checked: false },
    { name: "Value 3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { name: "Value A", checked: false },
    { name: "Value B", checked: false },
    { name: "Value C", checked: false },
  ]);

  const handleBoxClick = (idx) => {
    const updatedList1 = [...list1];
    updatedList1[idx].checked = !updatedList1[idx].checked;
    setList1(updatedList1);
  };
  const handleButtonClick = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((item, idx) => {
      if (item.checked) {
        const temp = updatedList1[idx].name;
        updatedList1[idx].name = updatedList2[idx].name;
        updatedList2[idx].name = temp;
      }
      updatedList1[idx].checked = false;
    });
    setList1(updatedList1);
    setList2(updatedList2);
  };
  return (
    <div className="App">
      <div>
        <h2>LIST 1</h2>
        <ul style={{ listStyleType: "none", padding: "2px" }}>
          {list1.map((item, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                value={item.name}
                onChange={() => handleBoxClick(idx)}
                checked={item.checked}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>LIST 2</h2>
        <ul style={{ padding: "2px" }}>
          {list2.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleButtonClick}>SWAP</button>
    </div>
  );
}
