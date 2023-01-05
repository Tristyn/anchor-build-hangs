import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { BuildHangs } from "../target/types/build_hangs";

describe("build-hangs", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.BuildHangs as Program<BuildHangs>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
