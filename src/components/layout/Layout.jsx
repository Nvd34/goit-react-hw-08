import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
// not work
export default function Layout({ children }) {
  return (
    <div className={css.containerLayout}>
      <AppBar />
      {children}
    </div>
  );
}
