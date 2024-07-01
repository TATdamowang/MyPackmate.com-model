<<<<<<< HEAD
"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
  Text,
} from "@nextui-org/react";
import { FaUpload, FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { siteConfig } from "@/config/site";
import ImageUploader from "./ImageUpload"; // Custom ImageUploader component
import {getStorageSuggestions} from "./storageSuggestion"; // Utility function for storage suggestions

const StorageSuggestions = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleImageUpload = (image: File) => {
    setUploadedImage(image);
    const storageSuggestions = getStorageSuggestions(image);
    setSuggestions(storageSuggestions);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    handleImageUpload(null);
  };

  return (
=======
"use client"; // 指明这是一个客户端组件，确保在浏览器中运行

import { useState } from "react"; // 导入 React 的 useState 钩子，用于状态管理
import {
  Button, // 导入 Button 组件
  Card, // 导入 Card 组件
  CardBody, // 导入 CardBody 组件
  CardFooter, // 导入 CardFooter 组件
  CardHeader, // 导入 CardHeader 组件
  Divider, // 导入 Divider 组件
  Link, // 导入 Link 组件
  Spacer, // 导入 Spacer 组件
  Text, // 导入 Text 组件
} from "@nextui-org/react"; // 从 @nextui-org/react 库中导入 UI 组件
import { FaUpload, FaCheck } from "react-icons/fa"; // 从 react-icons 库中导入 FontAwesome 图标
import { RoughNotation } from "react-rough-notation"; // 导入 RoughNotation 库，用于文本注释
import { siteConfig } from "@/config/site"; // 导入站点配置
import ImageUploader from "./ImageUpload"; // 导入自定义图片上传组件
import { getStorageSuggestions } from "./storageSuggestion"; // 导入获取存储建议的实用函数

// 定义 StorageSuggestions 组件，接收 id、locale 和 langName 作为属性
const StorageSuggestions = ({
  id, // 组件的 id
  locale, // 本地化文案
  langName, // 语言名称
}: {
  id: string; // id 属性的类型为 string
  locale: any; // locale 属性的类型为 any
  langName: string; // langName 属性的类型为 string
}) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null); // 定义上传图片的状态
  const [suggestions, setSuggestions] = useState<string[]>([]); // 定义存储建议的状态

  // 处理图片上传的函数
  const handleImageUpload = (image: File) => {
    setUploadedImage(image); // 设置上传的图片
    const storageSuggestions = getStorageSuggestions(image); // 获取存储建议
    setSuggestions(storageSuggestions); // 设置存储建议
  };

  // 处理按钮点击事件的函数
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 防止表单提交刷新页面
    handleImageUpload(null); // 清除上传的图片
  };

  return (
    // 渲染组件的根部分，包含 id 和 CSS 类名
>>>>>>> 45ecfca (Your commit message)
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
    >
<<<<<<< HEAD
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.uploadTitle}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight">{locale.uploadSubtitle}</h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{locale.uploadDescription}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-2 justify-items-center w-full">
        <Card className="p-3 flex-1 w-[90%]" shadow="md">
          <CardHeader className="flex flex-col items-start gap-2 pb-6">
            <h2 className="text-large font-medium">{locale.uploadImage}</h2>
            <p className="text-medium text-default-500">{locale.uploadPrompt}</p>
          </CardHeader>
          <Divider />
          <CardBody className="gap-8">
            <ImageUploader onUpload={handleImageUpload} />
            {uploadedImage && (
              <div className="mt-4">
                <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="max-w-full h-auto" />
              </div>
            )}
            {suggestions.length > 0 && (
              <div className="mt-4">
                <h2 className="text-large font-medium">{locale.suggestionsTitle}</h2>
=======
      {/* 渲染文本部分 */}
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.uploadTitle} {/* 渲染标题 */}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight">
          {locale.uploadSubtitle} {/* 渲染副标题 */}
        </h3>
        <Spacer y={4} /> {/* 渲染间隔 */}
        <p className="text-large text-default-500">
          {locale.uploadDescription} {/* 渲染描述 */}
        </p>
      </div>
      <Spacer y={8} /> {/* 渲染间隔 */}
      <div className="grid grid-cols-1 gap-2 justify-items-center w-full">
        {/* 渲染卡片 */}
        <Card className="p-3 flex-1 w-[90%]" shadow="md">
          <CardHeader className="flex flex-col items-start gap-2 pb-6">
            <h2 className="text-large font-medium">
              {locale.uploadImage} {/* 渲染上传图片的标题 */}
            </h2>
            <p className="text-medium text-default-500">
              {locale.uploadPrompt} {/* 渲染上传提示 */}
            </p>
          </CardHeader>
          <Divider /> {/* 渲染分割线 */}
          <CardBody className="gap-8">
            <ImageUploader onUpload={handleImageUpload} /> {/* 渲染图片上传组件 */}
            {uploadedImage && ( // 如果有上传图片，渲染图片预览
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(uploadedImage)}
                  alt="Uploaded"
                  className="max-w-full h-auto"
                />
              </div>
            )}
            {suggestions.length > 0 && ( // 如果有存储建议，渲染建议列表
              <div className="mt-4">
                <h2 className="text-large font-medium">
                  {locale.suggestionsTitle} {/* 渲染建议标题 */}
                </h2>
>>>>>>> 45ecfca (Your commit message)
                <ul className="flex flex-col gap-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheck className="text-blue-500" />
<<<<<<< HEAD
                      <p className="text-default-500">{suggestion}</p>
=======
                      <p className="text-default-500">{suggestion}</p> {/* 渲染单个建议 */}
>>>>>>> 45ecfca (Your commit message)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardBody>
          <CardFooter>
            <Button
              fullWidth
              color="primary"
              onClick={handleButtonClick}
              variant="contained"
            >
<<<<<<< HEAD
              <FaUpload className="mr-2" />
              {locale.uploadButtonText}
=======
              <FaUpload className="mr-2" /> {/* 渲染上传图标 */}
              {locale.uploadButtonText} {/* 渲染上传按钮文本 */}
>>>>>>> 45ecfca (Your commit message)
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike}&nbsp;
=======
      <Spacer y={12} /> {/* 渲染间隔 */}
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike}&nbsp; {/* 渲染喜好提示 */}
>>>>>>> 45ecfca (Your commit message)
          <Link
            color="foreground"
            href={siteConfig.authors[0].twitter}
            underline="always"
            rel="noopener noreferrer nofollow"
          >
<<<<<<< HEAD
            {locale.follow}
=======
            {locale.follow} {/* 渲染关注链接 */}
>>>>>>> 45ecfca (Your commit message)
          </Link>
        </p>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default StorageSuggestions;
=======
export default StorageSuggestions; // 导出 StorageSuggestions 组件
>>>>>>> 45ecfca (Your commit message)
