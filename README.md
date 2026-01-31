# Governance DAO Voting Engine

This repository implements a modular and secure DAO governance framework. It allows token holders to participate in the decision-making process of a protocol by proposing and voting on executable actions.



## Core Workflow
1. **Proposal**: A user with enough "Proposal Threshold" submits a target contract and data.
2. **Voting**: Token holders cast votes (For, Against, or Abstain) weighted by their token balance at the time of proposal creation (Snapshot logic).
3. **Queue**: If the quorum is reached and the proposal passes, it enters a `Timelock`.
4. **Execute**: After the timelock delay expires, the proposal is executed on-chain.

## Features
* **Snapshot Mechanism**: Prevents "flash loan" attacks where users borrow tokens just to vote.
* **Timelock Controller**: Adds a delay before execution to allow users to exit the protocol if they disagree with a decision.
* **Delegation Support**: Users can delegate their voting power to community leaders.

## Setup
1. `npm install`
2. Deploy `GovernanceToken.sol` first.
3. Deploy `GovernorContract.sol` using the token address.
