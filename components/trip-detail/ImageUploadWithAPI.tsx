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
import { FaUpload, FaCheck, FaTrash } from "react-icons/fa"; // 从 react-icons 库中导入 FontAwesome 图标
import { RoughNotation } from "react-rough-notation"; // 导入 RoughNotation 库，用于文本注释
import { siteConfig } from "@/config/site"; // 导入站点配置
import { useDropzone } from "react-dropzone"; // 导入 react-dropzone 库
import { useRouter } from "next/navigation"; // 导入 Next.js 的 useRouter 钩子

const ImageUploadWithAPI = ({ id, locale, langName }: { id: string; locale: any; langName: string }) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]); // 定义上传图片的状态
  const [uploadStatus, setUploadStatus] = useState<string>(""); // 定义上传状态的状态
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 定义选中图片的状态

  const router = useRouter(); // 获取 Next.js 的 router 实例

  // 处理图片上传的函数
  const handleImageUpload = (images: File[]) => {
    setUploadedImages([...uploadedImages, ...images]); // 添加上传的图片到列表
  };

  // 发送图片到API的函数
  const sendImagesToAPI = async (images: File[]) => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`file${index}`, image);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Upload successful!");
        router.push(`/suggestion/${langName}`); // 成功上传后跳转到 suggestion 页面
      } else {
        setUploadStatus("Upload failed.");
      }
    } catch (error) {
      setUploadStatus("An error occurred during upload.");
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    handleImageUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*" });

  const handleButtonClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = (event: any) => {
      if (event.target.files.length > 0) {
        handleImageUpload(Array.from(event.target.files));
      }
    };
    input.click();
  };

  const handleConfirmClick = () => {
    if (uploadedImages.length > 0) {
      sendImagesToAPI(uploadedImages); // 确认后发送图片到API
    }
  };

  const handleDeleteClick = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index)); // 删除图片
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // 设置选中图片
  };

  const handleCloseImageClick = () => {
    setSelectedImage(null); // 关闭选中图片
  };

  return (
    <section
      id={id}
      className="flex flex-row justify-between items-center w-full pt-16"
    >
      {/* 左侧标题 */}
      <div className="flex flex-col w-1/2 p-8">
        <h1 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.uploadTitle} {/* 渲染标题 */}
          </RoughNotation>
        </h1>
        <h2 className="text-4xl font-medium tracking-tight">
          {locale.uploadSubtitle} {/* 渲染副标题 */}
        </h2>
      </div>

      {/* 右侧内容 */}
      <div className="flex flex-col w-1/2 p-8">
        <p className="text-large text-default-500 mb-4">
          {locale.uploadDescription} {/* 渲染描述 */}
        </p>
        <div className="grid grid-cols-1 gap-2 justify-items-center w-full">
          <Card className="p-3 flex-1 w-full" shadow="md">
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
              <div {...getRootProps({ className: "dropzone" })} className="border-2 border-dashed p-4 w-full text-center cursor-pointer">
                <input {...getInputProps()} />
                <p>{locale.dragDropPrompt}</p> {/* 多语言支持 */}
              </div>
              <Spacer y={2} /> {/* 调整间隔 */}
              <Button
                fullWidth
                color="primary"
                onClick={handleButtonClick}
                variant="contained"
              >
                <FaUpload className="mr-2" /> {/* 渲染上传图标 */}
                {locale.uploadButtonText} {/* 渲染上传按钮文本 */}
              </Button>
              {uploadedImages.length > 0 && ( // 如果有上传图片，渲染图片预览和操作按钮
                <div className="mt-4">
                  <div className="flex flex-wrap gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded ${index}`}
                          className="w-16 h-16 cursor-pointer object-cover"
                          onClick={() => handleImageClick(URL.createObjectURL(image))}
                        />
                        <FaTrash
                          className="absolute top-0 right-0 m-1 cursor-pointer text-black"
                          onClick={() => handleDeleteClick(index)}
                          title={locale.handleDeleteClick}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button
                      style={{ backgroundColor: "#2563EB" }}
                      onClick={handleConfirmClick}
                    >
                      <FaCheck className="mr-2" /> {locale.handleConfirmClick} {/* 确认按钮 */}
                    </Button>
                  </div>
                </div>
              )}
              {uploadStatus && ( // 如果有上传状态，渲染上传状态信息
                <div className="mt-4">
                  <p className="text-default-500">{uploadStatus}</p> {/* 渲染上传状态 */}
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>

      {/* 图片放大查看 */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          <Button
            className="absolute top-4 right-4"
            onClick={handleCloseImageClick}
            style={{ backgroundColor: "#fff", color: "#000", border: "1px solid #000" }}
          >
            X
          </Button>
        </div>
      )}
    </section>
  );
};

export default ImageUploadWithAPI; // 导出 ImageUploadWithAPI 组件
