use yew::prelude::*;
#[function_component(App)]
pub fn app() -> Html {
    html! {
      <body>
        <div id="wrapper">
          <header>
            <h1 class="left">
              <img src="assets/logo.svg" alt="Logo" />
            </h1>

            <nav class="middle">
              <ul>
                <li><a href="#">{"Solutions"}</a></li>
                <li><a href="#">{"Resources"}</a></li>
                <li><a href="#">{"Pricing"}</a></li>
              </ul>
            </nav>

            <div class="right">
              <a class="conf">
                <img src="assets/special-button.svg" alt="Special Conference" />
                <span>{"Special Conf"}</span>
              </a>
              <img class="avatar" src="assets/avatar.svg" alt="Avatar" />
            </div>
          </header>
            <main>
              <h1>
                <span>{"Develop."}</span>
                <span>{"Preview."}</span>
                <span>{"Ship."}</span>
              </h1>

              <div class="buttons">
                <button>{"Start coding."}</button>
                <button class="outlined">{"Get a demo"}</button>
              </div>

              <h2>
                {"Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend to do their best work."}
              </h2>
            </main>
          <footer>{"Explore the Vercel way"}</footer>
        </div>
      </body>
    }
}
