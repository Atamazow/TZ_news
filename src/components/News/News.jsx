import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "antd";
import { useInView } from "react-intersection-observer";
import NewsCard from "../NewsCard/NewsCard";
import {fetchNews} from "../../redux/slices/newsSlice";

function News(props) {
  const { news, currentPage } = useSelector((state) => state.newsSlice);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView || currentPage === 1) {
      dispatch(fetchNews({ currentPage }));
    }
  }, [inView, currentPage]);

  return (
    <Flex gap="middle" wrap="wrap">
      {news.map((item, index) => (
        <NewsCard item={item} key={index} index={index} refProp={ref} />
      ))}
    </Flex>
  );
}

export default memo(News);
