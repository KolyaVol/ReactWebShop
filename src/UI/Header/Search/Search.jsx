import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../../../hooks/usePosts';
import { filteredProds } from '../../../store/prodFilterSlice';
import { queryKind } from '../../../store/sortSlice';
import MyInput from '../../MyInput/MyInput';
import styles from "./Search.module.css";

export default function Search() {
    const prodList = useSelector(state => state.prodList)
    const sortType = useSelector(state => state.sortType);
    const dispatch = useDispatch()

    const sortedAndFilteredProds = usePosts(
      prodList.prods,
      sortType.sort,
      sortType.query
    );

    const router = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(filteredProds(sortedAndFilteredProds));
        router('/search')
    }
    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.search}>
      <MyInput
        classes={addCssClass(styles.input, styles.header__item)}
        value={sortType.query}
        onChange={(e) => dispatch(queryKind(e.target.value))}
        placeholder="Поиск..."
      />
    </form>
  );
}
