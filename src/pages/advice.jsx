export function Advice() {
  const handleSubmit = (event) => {
    event.preventDefault();

    let buffs = {
      progDone: event.target.progDone.checked,
      iqDone: event.target.iqDone.checked,
      qualDone: event.target.qualDone.checked,
      innov: Number(event.target.innov.value),
      gs: Number(event.target.gs.value),
      obs: event.target.obs.checked,
      manip: Number(event.target.manip.value),
      wn: Number(event.target.wn.value),
      vene: Number(event.target.vene.value),
      mume: Number(event.target.mume.value),
      cond: event.target.cond.value,
      dura: Number(event.target.dura.value),
    };
    console.log(buffs);
  };

  const virtualDurability = (buffs) => {
    return buffs.dura + 5 * buffs.wn + 5 * buffs.manip;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Status</legend>

          <label>
            Progress done:
            <input type="checkbox" name="progDone" />
          </label>

          <label>
            Inner Quiet Stack done:
            <input type="checkbox" name="iqDone" />
          </label>

          <label>
            Quality done:
            <input type="checkbox" name="qualDone" />
          </label>

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
        </fieldset>

        <fieldset>
          <legend>Buffs</legend>
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

          <label>
            Observe:
            <input type="checkbox" name="obs" />
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
        </fieldset>

        <input type="submit" value="Submit" />
      </form>

      <section>
        <ul>
          <h1>General</h1>
          <li>item1</li>
          <li>...</li>
          <li>itemN</li>
        </ul>

        <ul>
          <h1>Progress</h1>
          <li>item1</li>
          <li>...</li>
          <li>itemN</li>
        </ul>

        <ul>
          <h1>IQ Stack / Quality</h1>
          <li>item1</li>
          <li>...</li>
          <li>itemN</li>
        </ul>
      </section>
    </>
  );
}
