import React, { useState } from "react";

function App() {
  const [crystalbet, setCrystalbet] = useState();
  const [adjarabet, setAdjarabet] = useState();
  const [crystalbetMoney, setCrystalbetMoney] = useState();
  const [adjarabetMoney, setAdjarabetMoney] = useState();
  const [crys, setCrys] = useState();
  const [profit, setProfit] = useState();
  const [crystalbet2, setCrystalbet2] = useState();
  const [adjarabet2, setAdjarabet2] = useState();
  const [crystalbetMoney2, setCrystalbetMoney2] = useState();
  const [adjarabetMoney2, setAdjarabetMoney2] = useState();
  const [crys2, setCrys2] = useState();
  const [profit2, setProfit2] = useState();

  const submit = async (event) => {
    event.preventDefault();

    let a = adjarabet;
    let b = crystalbet;
    let c = crystalbetMoney;
    let z = (c * b) / (0.97 + (a - 1));

    let prof = z - z * 0.03 - c;

    setAdjarabetMoney(z.toFixed(1));
    setProfit(prof.toFixed(1));
    setCrys(c);
  };

  const submit2 = async (event) => {
    event.preventDefault();

    let a = adjarabet2;
    let b = crystalbet2;
    let c = crystalbetMoney2;
    let z = (c * b) / (0.95 + (a - 1));

    let prof = z - z * 0.05 - c;

    setAdjarabetMoney2(z.toFixed(1));
    setProfit2(prof.toFixed(1));
    setCrys2(c);
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
        <p>Crystalbet Money: {crys}</p>
        <p>Adjarabet Money: {adjarabetMoney}</p>
        <p>Profit: {profit}</p>
      </form>
      <h2>Premier League</h2>
      <form onSubmit={submit2}>
        <div>
          Crystalbet Odd{" "}
          <input
            value={crystalbet2}
            required
            onChange={({ target }) => setCrystalbet2(target.value)}
          />
        </div>
        <div>
          Adjarabet Odd{" "}
          <input
            value={adjarabet2}
            required
            onChange={({ target }) => setAdjarabet2(target.value)}
          />
        </div>

        <div>
          Crystal Money{" "}
          <input
            value={crystalbetMoney2}
            required
            onChange={({ target }) => setCrystalbetMoney2(target.value)}
          />
        </div>

        <button type="submit">Count</button>
        <p>Crystalbet Money: {crys2}</p>
        <p>Adjarabet Money: {adjarabetMoney2}</p>
        <p>Profit: {profit2}</p>
      </form>
    </div>
  );
}

export default App;
