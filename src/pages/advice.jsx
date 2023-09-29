import { useState } from "react";

export function Advice() {
  const [otherList, setOther] = useState([]);
  const [progList, setProg] = useState([]);
  const [qualList, setQual] = useState([]);

  const virtualDurability = (buffs) => {
    return buffs.dura + 5 * buffs.wn + 5 * buffs.manip;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let buffs = {
      goalProg: event.target.goalProg.checked,
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
      iq: Number(event.target.iq.value),
      innov: Number(event.target.innov.value),
      gs: Number(event.target.gs.value),
    };
    console.log(buffs);
    resolve(buffs);
  };

  const resolve = (buffs) => {
    let other = [];
    let prog = [];
    let qual = [];
    let vdur = virtualDurability(buffs);
    console.log(vdur);

    //Repair TODO:value dura, vdur | affinate
    if (buffs.dura <= 10 || vdur < 10) {
      switch (buffs.cond) {
        case "normal":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        case "centered":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        case "omen":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        case "good":
          other.push("Tricks of Trade");
          break;

        case "malleable":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        case "pliant":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        case "primed":
          other.push("Manipulation");
          other.push("Master's Mend");
          break;

        case "sturdy":
          other.push("Master's Mend");
          other.push("Manipulation");
          break;

        default:
          break;
      }
    } else {
      // Prog goal
      if (buffs.goalProg) {
        // Opener Mume
        if (buffs.mume > 0) {
          switch (buffs.cond) {
            case "normal":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "centered":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "omen":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "good":
              qual.push("Precise Touch");
              break;

            case "malleable":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "pliant":
              // TODO
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else if (buffs.manip == 0) {
                other.push("Manipulation");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "primed":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else if (buffs.manip == 0) {
                other.push("Manipulation");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "sturdy":
              if (buffs.mume == 5) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            default:
              break;
          }
        }
        // Prog after opener
        else {
          switch (buffs.cond) {
            case "normal":
              break;

            case "centered":
              break;

            case "omen":
              break;

            case "good":
              other.push("Tricks of Trade");
              prog.push("Intensive Synthesis");
              break;

            case "malleable":
              prog.push("Rapid Synthesis");
              break;

            case "pliant":
              break;

            case "primed":
              break;

            case "sturdy":
              break;

            default:
              break;
          }
        }
      }
    }

    // Quality goal
    if (buffs.goalQual) {
      switch (buffs.cond) {
        case "normal":
          break;

        case "centered":
          break;

        case "omen":
          break;

        case "good":
          break;

        case "malleable":
          break;

        case "pliant":
          break;

        case "primed":
          break;

        case "sturdy":
          break;

        default:
          break;
      }
    }

    setOther(other);
    setProg(prog);
    setQual(qual);

    /*switch (buffs.cond) {
          case "normal":
            break;

          case "centered":
            break;

          case "omen":
            break;

          case "good":
            break;

          case "malleable":
            break;

          case "pliant":
            break;

          case "primed":
            break;

          case "sturdy":
            break;

          default:
            break;
        }
        */
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
            Inner Quiet:
            <select name="iq">
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
          {otherList.map((item) => (
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
