"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

const Suggestions = ({ id, locale = { textSuggestionsTitle: "Text Suggestions" }, apiEndpoint }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(apiEndpoint);
      if (response.ok) {
        const data = await response.json();
        // 假设API返回的是一个JSON字符串列表
        const suggestionsArray = JSON.parse(data);
        setSuggestions(suggestionsArray);
      } else {
        console.error("Failed to fetch suggestions");
      }
    } catch (error) {
      console.error("An error occurred during fetching suggestions.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-4xl">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-4">
              <RoughNotation type="highlight" show={true} color="#2563EB">
                {locale.textSuggestionsTitle}
              </RoughNotation>
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col items-center">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ul className="list-disc pl-5">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-default-500 mb-2">
                    <FaCheck className="text-blue-500 mr-2" /> {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Suggestions;
