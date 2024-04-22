import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';
import { useDispatch } from 'react-redux';

const SearchBox = ({ searchStr }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper_search}>
      <label>
        Find contact by name
        <input
          onChange={e => dispatch(changeFilter(e.target.value))}
          value={searchStr}
          type="text"
          placeholder="Enter smth"
        />
      </label>
    </div>
  );
};
//ffff
export default SearchBox;
