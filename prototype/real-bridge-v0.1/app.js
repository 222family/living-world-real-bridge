const KEY = "lw-real-bridge-v01";
const missionView = document.querySelector("#mission-view");
const returnView = document.querySelector("#return-view");
const receivedView = document.querySelector("#received-view");
const input = document.querySelector("#real-input");

function show(view) {
  missionView.hidden = view !== "mission";
  returnView.hidden = view !== "return";
  receivedView.hidden = view !== "received";
}

const stored = localStorage.getItem(KEY);
if (stored) show("return");

window.__REAL_BRIDGE_STATE__ = stored ? "return" : "mission";

document.querySelector("#go-button").addEventListener("click", () => {
  localStorage.setItem(KEY, "accepted");
  window.__REAL_BRIDGE_STATE__ = "return";
  show("return");
});

document.querySelector("#return-button").addEventListener("click", () => {
  const real = input.value.trim();
  if (!real) return;
  localStorage.setItem(KEY, JSON.stringify({
    mission_id: "OM-001",
    real,
    returned_at: new Date().toISOString(),
  }));
  window.__REAL_BRIDGE_STATE__ = "received";
  show("received");
});
