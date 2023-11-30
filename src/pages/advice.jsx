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

    //Urgent Repair
    if (
      (buffs.dura <= 10 && buffs.cond != "sturdy") ||
      (buffs.dura <= 5 && buffs.cond == "sturdy")
    ) {
      switch (buffs.cond) {
        case "normal":
          other.push("Master's Mend");
          break;

        case "centered":
          other.push("Master's Mend");
          break;

        case "omen":
          other.push("Master's Mend");
          break;

        case "good":
          other.push("Tricks of Trade");
          break;

        case "malleable":
          other.push("Master's Mend");
          break;

        case "pliant":
          other.push("Master's Mend");
          break;

        case "primed":
          if (buffs.manip <= 1) {
            other.push("Manipulation");
          } else {
            other.push("Master's Mend");
          }
          break;

        case "sturdy":
          other.push("Master's Mend");
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
            case "centered":
            case "omen":
            case "malleable":
            case "sturdy":
              if (buffs.mume >= 4 && buffs.vene == 0) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "good":
              qual.push("Precise Touch");
              break;

            case "pliant":
              if (buffs.manip == 0) {
                other.push("Manipulation");
              } else if (buffs.mume >= 4 && buffs.vene == 0) {
                prog.push("Veneration");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            case "primed":
              if (buffs.mume >= 4 && buffs.vene == 0) {
                prog.push("Veneration");
              } else if (buffs.manip == 0) {
                other.push("Manipulation");
              } else {
                prog.push("Rapid Synthesis");
              }
              break;

            default:
              break;
          }
        }
        // Try to Finish Prog
        else {
          switch (buffs.cond) {
            case "normal":
            case "sturdy":
              if (buffs.hs) {
                other.push("Heart and Soul");
              }
              if (buffs.cobs) {
                other.push("Careful Observation");
              } else {
                other.push("Observe");
              }
              break;

            case "centered":
            case "malleable":
              prog.push("Rapid Synthesis");
              break;

            case "omen":
              // TODO
              break;

            case "good":
              other.push("Tricks of Trade");
              prog.push("Intensive Synthesis");
              break;

            case "pliant":
              if (buffs.dura < 30) {
                other.push("Master's Mend");
              }
              if (buffs.manip <= 1) {
                other.push("Manipulation");
              }
              // TODO
              break;

            case "primed":
              if (buffs.manip <= 1) {
                other.push("Manipulation");
              }
              if (buffs.manip >= 5 && buffs.wn == 0) {
                other.push("Waste Not I");
              }
              // TODO
              break;

            default:
              break;
          }
        }
      }

      // Quality goal
      if (buffs.goalQual) {
        switch (buffs.cond) {
          case "normal":
          case "malleable":
            // TODO
            break;

          case "centered":
            qual.push("Hasty Touch");
            break;

          case "omen":
            if (buffs.innov <= 1) {
              qual.push("Innovation");
            }
            if (buffs.gs == 0) {
              qual.push("Great Strides");
            }
            // TODO
            break;

          case "good":
            qual.push("Precise Touch");
            other.push("Tricks of Trade");
            break;

          case "pliant":
            if (buffs.dura < 30) {
              other.push("Master's Mend");
            }
            if (buffs.manip <= 1) {
              other.push("Manipulation");
            }
            // TODO
            break;

          case "primed":
            if (buffs.manip <= 1) {
              other.push("Manipulation");
            }
            if (buffs.innov == 0) {
              qual.push("Innovation");
            }
            // TODO
            break;

          case "sturdy":
            // TODO
            break;

          default:
            break;
        }
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
    <main className="m-2 flex gap-1">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border-2 rounded px-1"
      >
        <fieldset
          id="goal"
          className="px-2 pb-1 flex flex-col gap-1 justify-items-start border-2 rounded border-slate-600 bg-slate-800"
        >
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

        <fieldset
          id="status"
          className="px-2 pb-1 flex flex-col gap-1 border-2 rounded border-slate-600 bg-slate-800"
        >
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
              min={1}
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

        <fieldset
          id="buffs"
          className="px-2 pb-1 flex flex-col gap-1 border-2 rounded border-slate-600 bg-slate-800"
        >
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

        <input
          type="submit"
          value="Submit"
          className="my-2 bg-sky-600 border-2 rounded border-sky-800 w-full"
        />
      </form>

      <section className="bg-slate-900 border-2 rounded px-1">
        <h1 className="col-span-full">Advices</h1>
        <div className="grid grid-cols-3 gap-2">
          <section className="border-2 rounded border-slate-600 bg-slate-700">
            <h1 className="px-1 bg-sky-700">General</h1>
            <ul className="[&>*:nth-child(odd)]:bg-slate-800 [&>*:nth-child(even)]:bg-slate-700">
              {otherList.map((item, index) => (
                <li key={index} className="px-2">
                  {item}
                </li>
              ))}
              <li className="px-2">Test Heavy Big Name of Doom</li>
            </ul>
          </section>

          <section className="border-2 rounded border-slate-600 bg-slate-700">
            <h1 className="px-1 bg-sky-700 ">Progress</h1>
            <ul className="[&>*:nth-child(odd)]:bg-slate-800 [&>*:nth-child(even)]:bg-slate-700">
              {progList.map((item, index) => (
                <li key={index} className="px-2">
                  {item}
                </li>
              ))}
              <li className="px-2">Test Heavy Big Name of Doom</li>
              <li className="px-2">Carefull Observation</li>
              <li className="px-2">Test Heavy Big Name of Doom</li>
            </ul>
          </section>

          <section className="border-2 rounded border-slate-600 bg-slate-700">
            <h1 className="px-1 bg-sky-700 ">IQ Stack / Quality</h1>
            <ul className="[&>*:nth-child(odd)]:bg-slate-800 [&>*:nth-child(even)]:bg-slate-700">
              {qualList.map((item, index) => (
                <li key={index} className="px-2">
                  {item}
                </li>
              ))}
              <li className="px-2">Test Heavy Big Name of Doom</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
