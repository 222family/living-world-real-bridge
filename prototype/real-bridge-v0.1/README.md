# REAL BRIDGE v0.1 — isolated prototype

Purpose: preserve the original OMATSURI GATE causal intent without changing the repository root's current proof-ledger role.

Causal intent:

`WORLD → MISSION → HUMAN ACT → REAL RETURN → VERIFY → EXPERIENCE → BEHAVIOR CHANGE → NEXT MISSION → SECOND HUMAN ACT`

The prototype intentionally locks NEXT MISSION after a REAL return. It does not generate a next mission until VERIFY → EXPERIENCE → CHANGE is proven.

## Run

No package install is required.

```bash
python -m http.server 8000 --directory prototype/real-bridge-v0.1
```

Open `http://localhost:8000/`.

Truth boundary: this prototype proves only the local interaction body and local persistence/lock behavior. It does not prove Production deployment, the full causal loop, customer value, PMF, or legal identity.
