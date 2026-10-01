# Living World REAL Bridge

Public evidence bridge for experiments that need a stronger public account-level claim without pretending that a GitHub account proves legal identity.

## ACO LAB Receipt-Holder Proof Ledger

ACO LAB accepts missions on its private-backed production system, while this repository is a public proof ledger.

For the B16 causal path, a qualifying **post-act return** receives:

- an `ACO_INTAKE_ID`
- a separate one-time `ACO_PROOF_KEY`

A public proof must contain both exact values and satisfy all of the following:

- the GitHub account is a normal `User`
- the account is not the known owner login or known owner numeric user ID
- the account is not an OWNER / MEMBER / COLLABORATOR of this repository
- the issue contains an exact `ACO_INTAKE_ID=<value>` line
- the issue contains an exact `ACO_PROOF_KEY=<value>` line
- the issue is created after the corresponding ACO LAB return mission
- no passwords, API keys, customer secrets, payment information, mission text, or other confidential data are posted

The proof key is a receipt capability. It makes an unrelated account that only learns the intake ID insufficient to qualify the event.

## Truth boundary

This ledger proves at most:

> a non-owner GitHub User account possessed the receipt capability for the matched ACO LAB return event and made a public claim after that return was recorded.

It does **not** prove:

- legal identity
- that the GitHub account owner and the human form submitter are the same person
- independence from every possible owner alternate account
- payment
- customer success
- PMF
- causal business impact

ACO LAB must keep those distinctions explicit.

## Privacy

Post only the two issued proof markers. Do not paste the mission text or confidential business information.

## Preserved prototype: REAL BRIDGE v0.1

The repository's current primary role is the **ACO LAB Receipt-Holder Proof Ledger** above.

The earlier OMATSURI GATE prototype is preserved as an isolated runnable prototype under:

`prototype/real-bridge-v0.1/`

It is intentionally **not** installed at the repository root, so the current proof-ledger contract, issue flow, and truth boundary remain the primary repository behavior.

Prototype causal intent:

`WORLD → MISSION → HUMAN ACT → REAL RETURN → VERIFY → EXPERIENCE → BEHAVIOR CHANGE → NEXT MISSION → SECOND HUMAN ACT`

The prototype intentionally locks NEXT MISSION after REAL return until VERIFY → EXPERIENCE → CHANGE is proven.

Run locally with no package install:

```bash
python -m http.server 8000 --directory prototype/real-bridge-v0.1
```

Then open `http://localhost:8000/`.

Truth boundary: preserving this prototype does not prove the full causal loop, Production deployment, customer value, or PMF.
