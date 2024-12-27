// hooks/useBible.js
import { useState, useEffect } from "react";

export function useBible() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapterContent, setChapterContent] = useState(null);

  const loadChapter = async (book, chapter) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/chapter/${book}/${chapter}`);
      const data = await res.json();
      setChapterContent(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, chapterContent, loadChapter };
}
