import React, { useState } from "react";

function App() {
  const [crystalbet, setCrystalbet] = useState();
  const [adjarabet, setAdjarabet] = useState();
  const [crystalbetMoney, setCrystalbetMoney] = useState();
  const [adjarabetMoney, setAdjarabetMoney] = useState();
  const [profit, setProfit] = useState();

  const submit = async (event) => {
    event.preventDefault();

    let a = adjarabet;
    let b = crystalbet;
    let c = crystalbetMoney;
    let z = (c * b) / (0.965 + (a - 1));

    let prof = z - z * 0.035 - c;

    setCrystalbet("");
    setAdjarabet("");
    setCrystalbetMoney("");
    setAdjarabetMoney(z);
    setProfit(prof);
  };

  return (
    <div className="toto">
      <form onSubmit={submit}>
        <div>
          Crystalbet Odd{" "}
          <input
            value={crystalbet}
            required
            onChange={({ target }) => setCrystalbet(target.value)}
          />
        </div>
        <div>
          Adjarabet Odd{" "}
          <input
            value={adjarabet}
            required
            onChange={({ target }) => setAdjarabet(target.value)}
          />
        </div>

        <div>
          Crystal Money{" "}
          <input
            value={crystalbetMoney}
            required
            onChange={({ target }) => setCrystalbetMoney(target.value)}
          />
        </div>

        <button type="submit">Count</button>
        <p>Adjarabet Money: {adjarabetMoney}</p>
        <p>Profit: {profit}</p>
      </form>
    </div>
  );
}

export default App;
