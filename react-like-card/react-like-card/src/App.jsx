import CardList from './components/CardList.jsx';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="app-header__eyebrow">// stack.json</p>
        <h1 className="app-header__title">The Stack I Reach For</h1>
        <p className="app-header__description">
          A quick rundown of the tools in daily rotation — tap the heart on
          anything you'd pick too.
        </p>
      </header>

      <main>
        <CardList />
      </main>

      <footer className="app-footer">
        <p>Built with React &amp; Vite — every like lives only in this tab.</p>
      </footer>
    </div>
  );
}

export default App;
