import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const initialBudget = {
    web: true,
    seo: true,
    ads: false,
    lang: 0,
    pages: 0,
  };

  /* const initialBudget = [
    {
      id: "web",
      type: "checkbox",
      value: 500,
      label: "Presupuesto web",
      initialValue: false,
    },
    {
      id: "pages",
      type: "number",
      value: 30,
      label: "Selecciona número de páginas",
      initialValue: false,
    },
  ]; */

  // STATES 90%
  const [budget, setBudget] = useState(initialBudget);
  const [total, setTotal] = useState(0);

  // EFFECTS

  useEffect(() => {
    calculateTotal();
  }, [budget]);

  // LOGIC
  const updateBudget = (e) => {
    let newBudget = { ...budget };
    newBudget[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setBudget(newBudget);
  };

  const calculateTotal = () => {
    let newTotal =
      (budget.web && 500) + (budget.seo && 300) + (budget.ads && 200);

    setTotal(newTotal);
  };

  return (
    <>
      {/* type, id, name, label */}
      {getForm()}
      <div>
        <input
          onChange={updateBudget}
          checked={budget.web}
          type="checkbox"
          id="web"
          name="web"
        />
        <label for="scales">WEB</label>
      </div>
      <div>
        <input
          onChange={updateBudget}
          checked={budget.seo}
          type="checkbox"
          id="seo"
          name="seo"
        />
        <label for="scales">SEO</label>
      </div>
      <div>
        <input
          onChange={updateBudget}
          checked={budget.ads}
          type="checkbox"
          id="ads"
          name="ads"
        />
        <label for="scales">ADS</label>
      </div>
      <div>
        <input onChange={updateBudget} type="number" id="lang" name="lang" />
        <label for="lang">LANG</label>
      </div>
      <br />
      WEB: {budget.web ? "UEEE" : "UOOO"} <br />
      SEO: {budget.seo ? "UEEE" : "UOOO"} <br />
      ADS: {budget.ads ? "UEEE" : "UOOO"} <br />
      LANG: {budget.lang}
      <br />
      TOTAL: {total}
    </>
  );
}

export default App;
