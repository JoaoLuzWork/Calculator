# 🧮 Calculator — Vanilla JS Calculator Web App

A calculator web app built with vanilla HTML, CSS and JavaScript — no frameworks, no build step, no dependencies. Three switchable colour themes, deployed on Vercel.

🌐 **Live demo:** <https://calculator-v1-bay.vercel.app>

*The layout follows the Frontend Mentor* Calculator app *challenge design.*

---

## 📖 About

Calculator is a fully working web-based calculator built from scratch to practise vanilla JavaScript, DOM manipulation, and responsive design. Beyond the standard arithmetic operations, it features three switchable colour themes controlled by a sliding switch, and adapts across four responsive breakpoints.

The project follows the Frontend Mentor *Calculator app* challenge as its visual reference, but the logic — theme switching, expression evaluation, decimal handling and equals-repeat behaviour — is implemented from scratch.

---

## 🛠️ Tech Stack

| Layer         | Technology                                |
| ------------- | ----------------------------------------- |
| Structure     | HTML5                                     |
| Styling       | CSS3 (custom properties, media queries)   |
| Interactivity | Vanilla JavaScript                        |
| Hosting       | Vercel                                    |

No build step, no package manager, nothing to install.

---

## 🚀 Running Locally

The pages reference `/styles/style.css` and `/scripts/script.js` with absolute paths, so serve the folder from its root rather than opening `index.html` directly:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

*(Opening the file with `file://` loads the markup but not the stylesheet or the script, so you get an unstyled, non-working page.)*

---

## 📂 Project Structure

```
.
├── index.html          Markup — header, theme switcher, display, keypad
├── scripts/
│   └── script.js       Theme switching and all calculator logic
└── styles/
    └── style.css       Three theme palettes, layout, four breakpoints
```

---

## 🔧 How It Works

**Display state.** Everything hangs off a handful of module-level variables in `script.js`:

| Variable                    | Role                                                            |
| --------------------------- | --------------------------------------------------------------- |
| `numbers`                   | the string currently on screen                                  |
| `result[0]` / `result[1]`   | the stored left operand and the running total                   |
| `operation`                 | `"+"`, `"-"`, `"/"` or `"*"`                                    |
| `p`, `m`, `d`, `mult`       | per-operator flags: is this the first `=` press or a repeat?    |
| `conditional`               | set after `=`, so the next digit starts a fresh sum             |
| `dotCond`                   | allows one decimal point                                        |

**Entering numbers.** Each key has an inline `onclick` calling its own function — `num7()`, `plus()`, `del()` and so on. The digit functions append to `numbers` and write it into `#receiver`, capping the length so the display can't overflow.

**Operators.** Pressing `+`, `-`, `/` or `x` moves `numbers` into `result[0]`, records the operator, clears the display and resets that operator's flag. `-` does double duty: pressed on an empty display it starts a negative number instead.

**Equals.** `equals()` branches on `operation`. On the first press it computes `result[0] ⊕ numbers`; on a repeat press it applies the same operand again, so `2 + 3 = =` gives 8.

**Themes.** Three radio inputs sit behind a sliding switch. `changeTheme()` finds the checked one and swaps `theme-1` / `theme-2` / `theme-3` on `<body>`; the stylesheet defines each theme as a block of custom properties (`--background`, `--fontNum`, …) that the rest of the CSS reads. Theme 1 is selected on `window.load`.

**Responsive.** Four breakpoints — **850 px**, **600 px**, **450 px** and **375 px**.

---

## ⚠️ Known Limitations

I tested these in a browser; the first one is worth fixing before this stays linked from a portfolio.

- **Decimals break on the second operand — silently and badly.** `dotCond` is set to 0 the first time a decimal point is used and is only ever restored by `RESET`, never by pressing an operator. So the second number silently loses its point:

  | Input           | Shows      | Should be |
  | --------------- | ---------- | --------- |
  | `2.5 + 1.5 =`   | **17.5**   | 4         |
  | `1.5 + 1.5 =`   | **16.5**   | 3         |
  | `0.5 + 0.5 =`   | **5.5**    | 1         |

  It computes `2.5 + 15`. The fix is one line — reset `dotCond = 1` inside `plus()`, `subtract()`, `divide()` and `multiplication()`, the same way they already reset `conditional`. *(`3 x 0.5 =` happens to work, because a point pressed on an* empty *display takes a different branch that doesn't consult `dotCond`.)*

- **`5 + =` shows `NaN`.** Pressing equals with no second operand parses an empty string. Guarding for an empty `numbers` would leave the first number on screen instead.

- **Digit limits are inconsistent.** `num1()`–`num9()` allow up to 11 characters, `num0()` only 9 — so `1` followed by twelve zeros stops at `100000000`, while thirteen `1`s gives eleven digits.

- **The favicon 404s.** `index.html` points at `./images/favicon-32x32.png`, but there is no `images/` folder in the repo.

- **The `<script>` tag is outside `</body>`.** It sits between `</body>` and `</html>`. Browsers tolerate it, but it belongs just before the closing `</body>`.

---

## 📝 Notes on the Code

Not bugs, but the obvious things to tidy if this gets picked up again.

- **`num0()` through `num9()` are ten near-identical functions** — around 500 of the file's 708 lines. They differ only by the digit they append. One `addDigit(d)` function, with the keypad wired up by a loop over the buttons, would cut the file by roughly two thirds and make the digit-limit inconsistency above impossible.
- **Inline `onclick` handlers**, and button ids like `id="+"` and `id="7"`. Attaching listeners in JavaScript and reading the digit from `textContent` or a `data-` attribute would separate markup from behaviour.
- **Absolute asset paths** (`/styles/style.css`) mean the app only works when served from a domain root. Relative paths (`./styles/style.css`) would work from any subfolder and from the filesystem.
- **Leftovers:** `pos`, `posF` and `cond` are declared but never used, and there's a commented-out `eval()` line at the top of the calculator section.
- **Mixed-language comments** — some Portuguese, some English. Worth settling on one.

---

## 🔮 Possible Next Steps

- [ ] Reset `dotCond` in the four operator functions — that's the decimal bug fixed
- [ ] Collapse the ten digit functions into one, wired up with a loop
- [ ] Add the missing favicon, or drop the `<link>`
- [ ] Add keyboard support so the number row and Enter work
- [ ] Remember the chosen theme in `localStorage` so it survives a refresh

---

## 👤 Author

**João Pedro Luz**

- GitHub: [@JoaoLuzWork](https://github.com/JoaoLuzWork)
- Email: <joao.pedro.luz.work@gmail.com>
- Location: Dublin, Ireland

🌐 Live site: **[calculator-v1-bay.vercel.app](https://calculator-v1-bay.vercel.app)**

---

## 📄 License

This project is open source and available for personal and educational use.
