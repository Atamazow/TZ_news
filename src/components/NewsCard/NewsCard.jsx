import React, { memo } from "react";
import { Card } from "antd";
import style from "./News.module.css";
function NewsCard({ item, refProp }) {
  return (
    <Card
      ref={refProp}
      style={{
        width: 300,
        marginLeft: 40,
        marginTop: 50,
        background: "#f6f6f6",
      }}
    >
      <p>{item.title}</p>
      <p className={style.text}>{item.body}</p>
      <div className={style.tags_wrapper}>
        {item.tags.map((tags, i) => (
          <div className={style.tags} key={i}>
            {tags}
          </div>
        ))}
      </div>
      <div className={style.reactions}>👍{item.reactions}</div>
    </Card>
  );
}

export default memo(NewsCard);
