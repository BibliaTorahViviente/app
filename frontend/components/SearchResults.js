// components/SearchResults.js
import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function SearchResults({ results }) {
  return (
    <ScrollArea className="h-[400px]">
      {results.map((result) => (
        <Card key={result.id} className="p-4 mb-2">
          <h3 className="font-bold">
            {result.book} {result.chapter}:{result.verse}
          </h3>
          <p>{result.content}</p>
        </Card>
      ))}
    </ScrollArea>
  );
}
