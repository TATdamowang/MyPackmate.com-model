//LayoutPack.tsx：定义了一个特定布局的组件，可能用于包裹 trip-detail 页面或相关的组件。
//主要作用：提供一种布局结构，用于组织页面内容，例如添加标题、侧边栏或内容区域。
import React from 'react';

const LayoutPack = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutPack;
