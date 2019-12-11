import React from 'react';
import { Button } from 'antd';

function Action ({ config, emit }) {
  return (
    <div className="action-box mb20">
      {
        config.map(({ actionFn, title, type }, i) => <Button key={i} onClick={() => emit(actionFn)} type={type}>{title}</Button>)
      }
    </div>
  )
}

export default Action;