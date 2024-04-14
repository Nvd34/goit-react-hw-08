import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const inputValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.searchBoxContainer}>
      <label>Find contacts by name</label>
      <input
        className={css.searchInput}
        name="searchName"
        type="text"
        value={inputValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
}
