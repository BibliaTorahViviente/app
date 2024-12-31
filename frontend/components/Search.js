// components/Search.js
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    const res = await fetch(`/api/search?q=${searchTerm}`);
    const results = await res.json();
    onSearch(results);
  };

  return (
    <div className="flex gap-4">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar en la Biblia..."
        className="w-full"
      />
      <Button onClick={handleSearch}>
        <Search className="w-4 h-4 mr-2" />
        Buscar
      </Button>
    </div>
  );
}
