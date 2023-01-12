# Landing Page com Yew

Este é um modelo bastante minimalista para uma aplicação Yew construída com [Trunk].

## Uso

Para uma explicação mais detalhada sobre o Trunk e suas funcionalidades, visite o [repositório][trunk].

### Instalação

Se você ainda não o tem instalado, é hora de instalar o Rust: <https://www.rust-lang.org/tools/install>. O restante deste guia assume uma instalação típica do Rust que contém tanto `rustup` quanto Cargo.

Para compilar o Rust para WASM, precisamos ter o alvo `wasm32-unknown-unknown` instalado. Se você ainda não o tem, instale-o com o seguinte comando:

```bash
rustup target add wasm32-unknown-unknown


Agora que temos nossas bases cobertas, é hora de instalar o protagonista: [Trunk]. Basta executar o seguinte comando para instalá-lo:

```bash
cargo install trunk wasm-bindgen-cli
```

É isso, terminamos!

### Execução

```bash
trunk serve
```

Reconstrói o aplicativo sempre que uma alteração é detectada e executa um servidor local para hospedá-lo.
