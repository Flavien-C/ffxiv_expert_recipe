import { useState } from "react";

export function Advice() {
  const [progList, setProg] = useState([]);
  const [qualList, setQual] = useState([]);
  const [geneList, setGene] = useState([]);

  const virtualDurability = (buffs) => {
    return buffs.dura + 5 * buffs.wn + 5 * buffs.manip;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let buffs = {
      goalProg: event.target.goalProg.checked,
      goalIq: event.target.goalIq.checked,
      goalQual: event.target.goalQual.checked,

      cond: event.target.cond.value,
      dura: Number(event.target.dura.value),
      cobs: event.target.cobs.checked,
      hs: event.target.hs.checked,

      mume: Number(event.target.mume.value),
      vene: Number(event.target.vene.value),
      manip: Number(event.target.manip.value),
      wn: Number(event.target.wn.value),
      obs: event.target.obs.checked,
      innov: Number(event.target.innov.value),
      gs: Number(event.target.gs.value),
    };
    console.log(buffs);
    resolve(buffs);
  };

  const resolve = (buffs) => {
    let gene = [];
    let prog = [];
    let qual = [];
    let vdur = virtualDurability(buffs);

    setProg(prog);
    setQual(qual);
    setGene(gene);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset id="goal">
          <legend>Goal</legend>

          <label>
            Progress:
            <input type="checkbox" name="goalProg" />
          </label>

          <label>
            Inner Quiet Stack:
            <input type="checkbox" name="goalIq" />
          </label>

          <label>
            Quality:
            <input type="checkbox" name="goalQual" />
          </label>
        </fieldset>

        <fieldset id="status">
          <legend>Status</legend>

          <label>
            Condition:
            <select name="cond">
              <option value="normal">Normal</option>
              <option value="centered">Centered</option>
              <option value="omen">Omen Good</option>
              <option value="good">Good</option>
              <option value="malleable">Malleable</option>
              <option value="pliant">Pliant</option>
              <option value="primed">Primed</option>
              <option value="sturdy">Sturdy</option>
            </select>
          </label>

          <label>
            Durability:
            <input
              type="number"
              name="dura"
              min={0}
              max={80}
              defaultValue={60}
            />
          </label>

          <label>
            Careful Observation available:
            <input type="checkbox" name="cobs" />
          </label>

          <label>
            Heart and Soul available:
            <input type="checkbox" name="hs" />
          </label>
        </fieldset>

        <fieldset id="buffs">
          <legend>Buffs</legend>

          <label>
            Muscle Memory:
            <select name="mume">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label>
            Veneration:
            <select name="vene">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>

          <label>
            Manipulation:
            <select name="manip">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label>
            Waste Not:
            <select name="wn">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label>
            Observe:
            <input type="checkbox" name="obs" />
          </label>

          <label>
            Innovation:
            <select name="innov">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>

          <label>
            Great Stride:
            <select name="gs">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>

      <section>
        <ul>
          <h1>General</h1>
          {geneList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <ul>
          <h1>Progress</h1>
          {progList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <ul>
          <h1>IQ Stack / Quality</h1>
          {qualList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
