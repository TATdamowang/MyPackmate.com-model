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
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
    >
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
                <ul className="flex flex-col gap-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheck className="text-blue-500" />
                      <p className="text-default-500">{suggestion}</p>
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
              <FaUpload className="mr-2" />
              {locale.uploadButtonText}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike}&nbsp;
          <Link
            color="foreground"
            href={siteConfig.authors[0].twitter}
            underline="always"
            rel="noopener noreferrer nofollow"
          >
            {locale.follow}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default StorageSuggestions;