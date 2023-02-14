# Landing Page with Yew

This is a very minimalist template for a Yew application built with [Trunk].

## Use

For a more detailed explanation of Trunk and its functionality, visit the [repository][trunk].

### Installation

If you don't have it installed yet, it's time to install Rust: <https://www.rust-lang.org/tools/install>. The remainder of this guide assumes a typical Rust installation that contains both `rustup` and Cargo.

To compile Rust for WASM we need to have the `wasm32-unknown-unknown` target installed. If you don't already have it, install it with the following command:

```bash
rustup target add wasm32-unknown-unknown
```

Now that we have our bases covered, it's time to install the protagonist: [Trunk]. Just run the following command to install it:

```bash
cargo install trunk wasm-bindgen-cli
```

That's it, we're done!

### Execution

```bash
trunk serve
```

Rebuilds the application whenever a change is detected and runs a local server to host it.
